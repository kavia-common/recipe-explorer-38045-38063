(function () {
  // PUBLIC_INTERFACE
  function initSignInScreen() {
    /** Initializes event handlers for the Sign In screen. */
    const btn = document.getElementById('big-button');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const gBtn = document.querySelector('#btn-google button');
    const fBtn = document.querySelector('#btn-facebook button');

    const clickHandler = () => {
      const emailVal = email ? email.value.trim() : '';
      const pwdVal = password ? password.value.trim() : '';
      // very basic inline validation styling to hint user, matching pixel-perfect layout (no element shifts)
      const invalidColor = 'rgba(255,0,0,0.45)';
      if (email) email.parentElement.querySelector('.input-rect').style.boxShadow = emailVal ? 'none' : `0 0 0 1px ${invalidColor}`;
      if (password) password.parentElement.querySelector('.input-rect').style.boxShadow = pwdVal ? 'none' : `0 0 0 1px ${invalidColor}`;
      console.debug('Sign In button clicked', { email: !!emailVal, password: !!pwdVal });
    };

    if (btn) btn.addEventListener('click', clickHandler);
    if (gBtn) gBtn.addEventListener('click', () => console.debug('Google sign-in clicked'));
    if (fBtn) fBtn.addEventListener('click', () => console.debug('Facebook sign-in clicked'));
  }

  // Bootstrap after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSignInScreen);
  } else {
    initSignInScreen();
  }
})();
