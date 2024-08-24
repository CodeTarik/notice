//Arrays
let posts =[];
let titles = [];


const postText = [];
const titleText = [];

document.getElementById('notice').addEventListener('click', function() {
    if(!document.getElementById('title-textarea')){
        let titleTextarea = document.getElementById('textarea');
        titleTextarea.placeholder = 'Titel einfügen';
        titleTextarea.id = 'title-textarea';
        titleTextarea.name = 'title';
        titleTextarea.cols = '30';
        titleTextarea.required = true; 
        
        this.parentNode.appendChild(titleTextarea);
    }
})

// Push Notice - Begin
function addMyNotice() {
    let text = document.getElementById('notice').value;
    let title = document.getElementById('title').value;

    if(text.trim() !== '' && title.trim() !== ''){
        posts.push(text);
        titles.push(title);

        document.getElementById('notice').value = '';
        document.getElementById('title').value = '';

        
    }
}
// Notice Push - End



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

