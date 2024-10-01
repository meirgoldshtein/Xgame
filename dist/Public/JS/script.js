"use strict";
const formTitle = document.getElementById('form-title');
const switchText = document.getElementById('switch-text');
const switchLink = document.getElementById('switch-link');
const submitBtn = document.querySelector('.submit-btn');
let isLogin = true;
switchLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (isLogin) {
        formTitle.textContent = 'רישום';
        submitBtn.textContent = 'הירשם';
        switchText.innerHTML = 'כבר יש לך חשבון? <a href="#" id="switch-link">התחברות</a>';
    }
    else {
        formTitle.textContent = 'התחברות';
        submitBtn.textContent = 'התחבר';
        switchText.innerHTML = 'אין לך חשבון? <a href="#" id="switch-link">הרשמה</a>';
    }
    isLogin = !isLogin;
});
