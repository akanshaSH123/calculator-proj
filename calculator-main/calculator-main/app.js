var allTd = document.querySelectorAll('#container td');

var screen = document.querySelector('#container input');

for (let i = 0; i < allTd.length; i++) {
    allTd[i].addEventListener('click', (e) => {
        e.stopPropagation();
        var text = e.target.innerText;
        // screen.value += text;

        if (text === '=') {
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                prompt('invalid operation')
                screen.value = '';
            }
        } else if (text === 'X') {
            screen.value += '*';
        }
        else if (text === 'C') {
            screen.value = '';
        }
        else if (text === 'X2') {
            screen.value += '**'
        }

        else {
            screen.value += text;
        }
    })
} 

