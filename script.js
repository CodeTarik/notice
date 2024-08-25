let posts = [];

let postsAsText = [];


function addMyPost(){
    let text = document.getElementById('notice').value;

    if(text.trim() !== ''){
        posts.push(text);
        document.getElementById('notice').value = '';

        save();
        render();
    }
}

function save(){
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

function render(){
    let myposts = document.getElementById('myposts');
    myposts.innerHTML = '';

    for(let i=0; i < posts.length; i++){
        myposts.innerHTML += /*html*/`
        <div class="post">
            <b>${posts[i]}</b>
            <div>
            <button onclick="deleteNotice(${i})">Delete</button>
            </div>
        </div>`;
    }

    document.getElementById('notice').value = '';
}

function deleteNotice(i){
    posts.splice(i, 1);

    addMyPost();
    save();
    render();
}

document.addEventListener('DOMContentLoaded', () => {
    let textarea = document.getElementById('notice');
    let placeholderText = "Notiz schreiben";
    let currentText = "";
    let index = 0;
    let dots = "";

    function updatePlaceholder() {
        if (index < placeholderText.length) {
            currentText += placeholderText.charAt(index);
            index++;
        } else {
            dots = dots.length < 3 ? dots + "." : "";
            if (dots.length === 3) {
                currentText = "";
                index = 0;
                dots = "";
            }
        }

        textarea.setAttribute("placeholder", currentText + dots);
    }

    setInterval(updatePlaceholder, 200);
});



//HTML einbeziehen
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let element of includeElements) {
        const file = element.getAttribute("w3-include-html");
        try {
            let resp = await fetch(file);
            if (resp.ok) {
                element.innerHTML = await resp.text();
            } else {
                element.innerHTML = 'Seite nicht gefunden';
            }
        } catch (error) {
            console.error('Fehler beim Einfügen von HTML:', error);
            element.innerHTML = 'Inhalt konnte nicht geladen werden';
        }
    }
}

includeHTML();

