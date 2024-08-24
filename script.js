let originalContent = document.querySelector('#result-form').innerHTML;

function encryptText() {
    const messageBox = document.querySelector('#messageBox');
    const userText = messageBox.value;
    messageBox.value = '';

    let rule = '';
    for(let i = 0; i < userText.length; i++) {
        switch (userText[i]) {
            case 'a':
                rule += 'ai';
                break;
            case 'e':
                rule += 'enter';
                break;
            case 'i':
                rule += 'imes';
                break;
            case 'o':
                rule += 'ober';
                break;
            case 'u':
                rule += 'ufat';
                break;
            default:
                rule += userText[i];
        }
    } 
    editText(rule);
}

function desencryptText() {
    const messageBox = document.querySelector('#messageBox');
    const userText = messageBox.value;
    messageBox.value = '';
    let i = 0;
    let rule = '';

    while (i < userText.length) {
        if (userText.startsWith('ai', i)) {
            rule += 'a';
            i += 2;
        } else if (userText.startsWith('enter', i)) {
            rule += 'e';
            i += 5;
        } else if (userText.startsWith('imes', i)) {
            rule += 'i';
            i += 4;
        } else if (userText.startsWith('ober', i)) {
            rule += 'o';
            i += 4;
        } else if (userText.startsWith('ufat', i)) {
            rule += 'u';
            i += 4;
        } else {
            rule += userText[i];
            i++;
        }
    }
    editText(rule);
}

function copyText() {
    let userText = document.querySelector('.result-text').textContent;
    navigator.clipboard.writeText(userText);
    let apresentacao = document.querySelector('#result-form');
    apresentacao.innerHTML = originalContent;
}

function editText(userText) {
    let textarea = document.createElement('textarea');
    textarea.classList.add('result-text');
    textarea.setAttribute("disabled", true);
    textarea.textContent= userText;

    let button = document.createElement('button');
    button.innerText= 'Copiar';
    button.classList.add('copy-btn');
    button.onclick = copyText;

    let apresentacao = document.querySelector('#result-form');
    apresentacao.innerHTML = '';
    apresentacao.appendChild(textarea);
    apresentacao.appendChild(button);
}