const passwordGenerator =  function(){
    const alpabets = ['a', 'b', 'c', 'd',
                  'e', 'f', 'i', 'j',
                  'k', 'l', 'm', 'n',
                  'o', 'p', 'q', 'r',
                  's', 't', 'u', 'v',
                  'w', 'x', 'y', 'z'
]
const specialChars = ['!', '@', '#', '$', '%', '&']

let pw = '';

for (let i = 0; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * 24);
    pw += alpabets[randomNum]
}
for (let i = 0; i < 3; i++) {
    pw +=  Math.floor(Math.random() * 9);
    
}
for (let i = 0; i < 2; i++) {
    let randomNum = Math.floor(Math.random() * 6);
    pw +=  specialChars[randomNum];
}

const generate = function(){
    return pw.charAt(0).toUpperCase() + pw.slice(1);
}
return {generate};
}

const displayManager = function(){
    const generateBtn = document.getElementById('generateBtn');
    const passwordField = document.getElementById('password');
    
    generateBtn.addEventListener('click', function(){
        const password = new passwordGenerator();
        passwordField.textContent = password.generate();
    });
}
displayManager();
