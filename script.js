document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
    document.getElementById('register-heading').style.display = 'none';
});