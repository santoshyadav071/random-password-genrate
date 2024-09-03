const passwordBox = document.getElementById("password");
const length = 12; // Corrected variable name
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@$#%^&*()_+";
const allchars = uppercase + lowercase + number + symbol;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    // Shuffle password to ensure characters are randomly distributed
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    passwordBox.value = password;
}

function copyPassword() {
    if (!navigator.clipboard) {
        alert('Clipboard API not supported.');
        return;
    }

    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
            alert('Failed to copy password.');
        });
}
