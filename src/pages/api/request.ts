import type { APIRoute } from "astro";
import { site } from "../../data/site";

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const escapeHtml = (value: string) => value.replace(/[&<>\"]/g, (char) => {
  switch (char) {
    case "&": return "&amp;";
    case "<": return "&lt;";
    case ">": return "&gt;";
    case '"': return "&quot;";
    default: return char;
  }
});

const clean = (value: unknown, max = 2000) => typeof value === "string" ? value.trim().slice(0, max) : "";
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const allowedServices = new Set(["Website", "Web App / Software", "SEO & Online Visibility", "Hosting & Technical", "Maintenance & Support", "Integrations", "AI & Automation", "Custom Software", "Other"]);
const stringField = (value: string) => ({ stringValue: value });

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("content-type")?.includes("application/json") !== true) return json({ error: "Invalid request." }, 415);
  try {
    const body = await request.json();
    if (clean(body?.company, 100)) return json({ error: "Invalid request." }, 400);

    const name = clean(body?.name, 80);
    const email = clean(body?.email, 120).toLowerCase();
    const mobile = clean(body?.mobile, 20);
    const service = clean(body?.service, 80);
    const requestPackage = clean(body?.package, 100);
    const budget = clean(body?.budget, 60);
    const description = clean(body?.description, 2000);
    const website = clean(body?.website, 200);

    if (!name || !email || !mobile || !service || !description) return json({ error: "Please complete all required fields." }, 400);
    if (!validEmail(email)) return json({ error: "Please enter a valid email address." }, 400);
    if (!allowedServices.has(service)) return json({ error: "Please select a valid service." }, 400);
    if (website && !/^https?:\/\//i.test(website)) return json({ error: "Website URL must start with http:// or https://." }, 400);

    const now = new Date();
    const trackingId = `MS-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
    const timestamp = now.toISOString();

    const projectId = import.meta.env.PUBLIC_FIREBASE_PROJECT_ID;
    const apiKey = import.meta.env.PUBLIC_FIREBASE_API_KEY;
    const resendKey = import.meta.env.RESEND_API_KEY;
    const from = import.meta.env.RESEND_FROM_EMAIL || `${site.name} <${site.email}>`;
    if (!projectId || !apiKey || !resendKey) return json({ error: "Request system is not configured yet. Please try again shortly." }, 503);

    const document = {
      fields: {
        trackingId: stringField(trackingId),
        name: stringField(name),
        email: stringField(email),
        mobile: stringField(mobile),
        service: stringField(service),
        package: stringField(requestPackage),
        budget: stringField(budget),
        description: stringField(description),
        website: stringField(website),
        status: stringField("Pending"),
        timestamp: { timestampValue: timestamp },
      },
    };

    const firestoreResponse = await fetch(`https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/service_requests?documentId=${encodeURIComponent(trackingId)}&key=${encodeURIComponent(apiKey)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(document),
    });
    if (!firestoreResponse.ok) {
      console.error("Firestore request creation failed", await firestoreResponse.text());
      return json({ error: "We could not save your request. Please try again." }, 502);
    }

    const safe = {
      trackingId: escapeHtml(trackingId), name: escapeHtml(name), email: escapeHtml(email), mobile: escapeHtml(mobile), service: escapeHtml(service),
      requestPackage: escapeHtml(requestPackage || "Not specified"), budget: escapeHtml(budget || "Not specified"), website: escapeHtml(website || "Not specified"),
      description: escapeHtml(description).replace(/\n/g, "<br>"), timestamp: escapeHtml(timestamp),
    };

    const html = `<!doctype html><html><body style="margin:0;background:#f4f8fc;font-family:Arial,sans-serif;color:#10213d"><div style="max-width:680px;margin:32px auto;background:#fff;border:1px solid #dbe7f3;border-radius:16px;overflow:hidden"><div style="padding:24px 28px;background:#071a3a;color:#fff"><div style="font-size:13px;letter-spacing:2px;color:#4cc9ff;font-weight:700">MANAV SOLS</div><h1 style="margin:8px 0 0;font-size:28px">${safe.trackingId}</h1></div><div style="padding:28px"><p style="margin-top:0">${safe.name}, your project request has been received.</p><table style="width:100%;border-collapse:collapse"><tr><td style="padding:8px 0;font-weight:700">Service</td><td style="padding:8px 0">${safe.service}</td></tr><tr><td style="padding:8px 0;font-weight:700">Package</td><td style="padding:8px 0">${safe.requestPackage}</td></tr><tr><td style="padding:8px 0;font-weight:700">Budget</td><td style="padding:8px 0">${safe.budget}</td></tr><tr><td style="padding:8px 0;font-weight:700">Mobile</td><td style="padding:8px 0">${safe.mobile}</td></tr><tr><td style="padding:8px 0;font-weight:700">Website</td><td style="padding:8px 0">${safe.website}</td></tr></table><div style="margin-top:20px;padding:16px;border-radius:12px;background:#f5f9ff"><strong>Requirement</strong><p style="margin-bottom:0">${safe.description}</p></div><p style="color:#64748b;font-size:13px;margin-bottom:0">Submitted: ${safe.timestamp}</p></div></div></body></html>`;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [site.email, email], subject: `MANAV SOLS Request Receipt — ${trackingId}`, html, reply_to: email }),
    });

    if (!emailResponse.ok) {
      console.error("Resend email failed", await emailResponse.text());
      return json({ trackingId, email, warning: "Your request was saved, but the receipt email could not be sent right now." }, 201);
    }
    return json({ trackingId, email }, 201);
  } catch (error) {
    console.error("Request API error", error);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
};
