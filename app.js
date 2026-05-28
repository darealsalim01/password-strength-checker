
const passwd = document.getElementById("password");
const bar = document.getElementById("meterbar");
const result = document.getElementById("result");


function updateMeter(width, text, color) {
    bar.style.width = `${width}%`;
    bar.style.background = color;
    result.textContent = text;
    result.style.color = color;
}


passwd.addEventListener('input', () => {
    const password = passwd.value;
    let s = 0;

    if (!password || password.length < 8) {
        updateMeter(0, 'Too short', '#ff4d4d');
        return; 
    }

   
    s++;
    if(password.length >= 8) s++;

    if(/[a-z]/.test(password)) s++;

    if(/[A-Z]/.test(password)) s++;

    if(/[0-9]/.test(password)) s++;

    if(/[^A-Za-z0-9]/.test(password)) s++;
    switch (s) {
        case 1:
            updateMeter(20, 'Very Weak', '#ff4d4d'); // Red
            break;
        case 2:
            updateMeter(40, 'Weak', '#ff944d'); // Orange
            break;
        case 3:
            updateMeter(60, 'Medium', '#ffd11a'); // Yellow
            break;
        case 4:
            updateMeter(80, 'Strong', '#4dff4d'); // Light Green
            break;
        case 5:
            updateMeter(100, 'Very Strong', '#00cc44'); // Dark Green
            break;
        default:
            updateMeter(10, 'Very Weak', '#ff4d4d');
    }

    
})