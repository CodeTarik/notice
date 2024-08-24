//Arrays
let posts =[];
let titles = [];


const postText = [];
const titleText = [];


function addMyNotice() {
    let text = document.getElementById('notice').value;
    let title = document.getElementById('title').value;
}



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

