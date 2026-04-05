const firebaseConfig = {
    apiKey: "AIzaSyB3JXFZEfozu5oKj4YacSSOaxzJ-FWgN3o",
    authDomain: "medtechexplorer-9074e.firebaseapp.com",
    projectId: "medtechexplorer-9074e",
    storageBucket: "medtechexplorer-9074e.firebasestorage.app",
    messagingSenderId: "33174663346",
    appId: "1:33174663346:web:81f403412340b9313399ab"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

const loginBtn = document.getElementById('login-btn');
const statusMsg = document.getElementById('status-msg');
const loader = document.getElementById('loader');

loginBtn.addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    loader.classList.remove('d-none');
    
    try {
        const result = await auth.signInWithPopup(provider);
        const uid = result.user.uid;
        checkSubscription(uid);
    } catch (error) {
        loader.classList.add('d-none');
        statusMsg.innerHTML = `<small class="text-danger">${error.message}</small>`;
    }
});

async function checkSubscription(uid) {
    try {
        const doc = await db.collection("users").doc(uid).get();
        loader.classList.add('d-none');

        if (doc.exists && doc.data().isPaid === true) {
            statusMsg.innerHTML = `<span class="text-success">Welcome Back! Access Granted.</span>`;
            // Redirect logic yahan aayegi
        } else {
            statusMsg.innerHTML = `<div class="alert alert-warning mt-3">
                <small>Access Denied. Add this UID to Firestore:</small><br>
                <strong>${uid}</strong>
            </div>`;
        }
    } catch (err) {
        loader.classList.add('d-none');
        statusMsg.innerText = "Database Error.";
    }
}