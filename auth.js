// 注册处理
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#registerForm input[type="email"]').value;
    const password = document.querySelector('#registerForm input[type="password"]').value;

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        alert('Account created! Check your email for verification');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(`Registration failed: ${error.message}`);
    }
});

// 登录处理
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#loginForm input[type="email"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(`Login failed: ${error.message}`);
    }
});

// 密码重置
document.getElementById('resetForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#resetForm input[type="email"]').value;

    try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert('Password reset email sent! Check your inbox');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});