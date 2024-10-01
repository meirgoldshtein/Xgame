const formTitle = document.getElementById('form-title') as HTMLHeadingElement;
const switchText = document.getElementById('switch-text') as HTMLParagraphElement;
const switchLink = document.getElementById('switch-link') as HTMLAnchorElement;
const submitBtn = document.querySelector('.submit-btn') as HTMLButtonElement;

let isLogin = true;

switchLink.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    if (isLogin) {
        formTitle.textContent = 'רישום';
        submitBtn.textContent = 'הירשם';
        switchText.innerHTML = 'כבר יש לך חשבון? <a href="#" id="switch-link">התחברות</a>';
    } else {
        formTitle.textContent = 'התחברות';
        submitBtn.textContent = 'התחבר';
        switchText.innerHTML = 'אין לך חשבון? <a href="#" id="switch-link">הרשמה</a>';
    }
    
    isLogin = !isLogin;
});
