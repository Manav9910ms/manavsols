// ======== Signup / Login ========
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const collegeId = document.getElementById('collegeId').value.trim();
        const skills = document.getElementById('skills').value.trim();

        if (name && collegeId && skills) {
            // Save user to localStorage
            const user = { name, collegeId, skills, points: 0, badges: [] };
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Welcome ${name}! You are logged in.`);
            window.location.href = "helpfeed.html";
        } else {
            alert("Please fill all fields.");
        }
    });
}

// ======== Request Help ========
const requestForm = document.getElementById('requestForm');
if (requestForm) {
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const skillCategory = document.getElementById('skillCategory').value.trim();
        const description = document.getElementById('description').value.trim();

        if (skillCategory && description) {
            let requests = JSON.parse(localStorage.getItem('helpRequests') || "[]");
            const user = JSON.parse(localStorage.getItem('currentUser'));
            const newRequest = {
                id: Date.now(),
                skillCategory,
                description,
                requester: user.name,
                status: "pending"
            };
            requests.push(newRequest);
            localStorage.setItem('helpRequests', JSON.stringify(requests));
            alert("Request posted successfully!");
            requestForm.reset();
        } else {
            alert("Please fill all fields.");
        }
    });
}

// ======== Display Help Requests ========
const requestList = document.getElementById('requestList');
if (requestList) {
    let requests = JSON.parse(localStorage.getItem('helpRequests') || "[]");
    requests.forEach(req => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${req.requester}</strong> needs help in <em>${req.skillCategory}</em>:<br>${req.description}`;
        requestList.appendChild(div);
    });
}

// ======== Points & Badges ========
const totalPointsSpan = document.getElementById('totalPoints');
const badgesDiv = document.getElementById('badges');

if (totalPointsSpan && badgesDiv) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    totalPointsSpan.innerText = user.points;

    // Display badges
    if (user.badges.length > 0) {
        user.badges.forEach(b => {
            const img = document.createElement('img');
            img.src = `badges/${b}.png`;
            img.alt = b;
            badgesDiv.appendChild(img);
        });
    } else {
        badgesDiv.innerHTML = "<p>No badges yet. Help others to earn badges!</p>";
    }
}

// ======== Leaderboard ========
const topHelpers = document.getElementById('topHelpers');
if (topHelpers) {
    // Get all users (for demo, just current user)
    let users = [JSON.parse(localStorage.getItem('currentUser'))];
    users.sort((a,b) => b.points - a.points);
    
    users.forEach(u => {
        const li = document.createElement('li');
        li.textContent = `${u.name} - ${u.points} Points`;
        topHelpers.appendChild(li);
    });
              }
