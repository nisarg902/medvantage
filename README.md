<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code-And-Cure | Pharmacy Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark text-white">

    <div class="container d-flex align-items-center justify-content-center vh-100">
        <div class="auth-card p-5 shadow-lg text-center">
            <h1 class="fw-bold mb-2">Code-And-Cure 🧪</h1>
            <p class="text-secondary mb-4">Wainganga College Engineering & Pharmacy Portal</p>
            
            <button id="login-btn" class="btn btn-warning btn-lg w-100 fw-bold rounded-pill">
                Login with Google
            </button>
            
            <div id="loader" class="spinner-border text-warning mt-3 d-none"></div>
            <div id="status-msg" class="mt-3"></div>
        </div>
    </div>

    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    
    <script src="app.js"></script>
</body>
</html>