const request = new XMLHttpRequest();

window.onload = () => {
    const data = new Date();
    const hora = data.getHours();

    if(hora > 19 || hora < 8){
        console.log('teste');
        const inputTel = document.querySelector('#form-nome').disabled = true;
        const inputNome = document.querySelector('#form-tel').disabled = true;
        const textAreaDesc = document.querySelector('#form-desc').disabled = true;
    }
};
