document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.querySelector('.get-started-btn');
    
    getStartedBtn.addEventListener('click', () => {
        alert('Get started with Munaafah!');
    });
    
    // You can add more interactivity here for the dashboard and other sections
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginCard = document.querySelector('.card');
    const signupCard = document.getElementById('signup-card');

    document.getElementById('show-signup').addEventListener('click', () => {
        loginCard.classList.add('d-none');
        signupCard.classList.remove('d-none');
    });

    document.getElementById('show-login').addEventListener('click', () => {
        signupCard.classList.add('d-none');
        loginCard.classList.remove('d-none');
    });
});
