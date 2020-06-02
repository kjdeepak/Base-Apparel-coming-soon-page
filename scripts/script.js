function onSubscriptionFormSubmit() {
    const emailInput = document.getElementById('email');
    const inputWrapper = document.getElementById('input-wrapper');
    const errorPrompt = document.getElementsByClassName('error-prompt');
    if (!validateEmail(emailInput.value)) {
        errorPrompt[0].style.display = 'inline';
        errorPrompt[1].style.display = 'block';
        inputWrapper.classList.add('input-wrapper--invalid');
    } else {
        errorPrompt[0].style.display = 'none';
        errorPrompt[1].style.display = 'none';
        inputWrapper.classList.remove('input-wrapper--invalid');
        document.getElementById('subscription-form').submit();
        emailInput.value = '';
    }

}

function validateEmail(emailValue) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        return true;
    }
    return false;
}