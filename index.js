function btnGenerator(){

    let getBody = document.querySelector('body');
    let colorHexa = document.querySelector('#colorHexa');
    let lastColor = document.querySelector('#lastColor');

    let randomNum = Math.floor(Math.random() * (10000 - 0) ) + 0;
    getBody.style.background = `#${randomNum}`;

    colorHexa.innerHTML = `Color now:<br> Hexa: #${randomNum} <br> Rgb: ${getBody.style.background}`;
    lastColor.innerHTML = `Last color:<br> Hexa: #${randomNum} <br> Rgb: ${getBody.style.background}`;

    localStorage.setItem('colorHexa', `#${randomNum}`);
    localStorage.setItem('colorRgb', `${getBody.style.background}`);

}
lastColor.innerHTML = `Last color:<br> Hexa: ${localStorage.getItem('colorHexa')} <br> Rgb: ${localStorage.getItem('colorRgb')}`;