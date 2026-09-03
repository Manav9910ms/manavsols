# Feature architecture

Dynamic systems are intentionally separated from the public content layer.

```text
features/
├── auth/       # sign-in, registration, password reset
├── client/     # client dashboard, projects, requests, messages
├── admin/      # leads, clients, projects, requests, analytics
├── requests/   # project and website requirement intake
└── quote/      # future quote builder
```

Each feature should own its UI, validation and service calls instead of adding more logic to a global script. The public site remains static-first while these modules are added only where dynamic behavior is needed.
