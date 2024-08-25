let posts = [];
let titles = [];

let postsAsText = [];
let titlesAsText = [];


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
            <b>${titles[i]}</b><br>
            <b>${posts[i]}</b>
            <div>
            <button class="d-button" onclick="deleteNotice(${i})">Löschen</button>
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

//Animation placeholder - Beginn
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
//Animation placeholder - Ende


//Titel & Notizen in einem Fenster - Beginn
document.addEventListener('DOMContentLoaded', () => {
    const noticeTextarea = document.getElementById('notice');
    const titleTextarea = document.getElementById('title');

    noticeTextarea.addEventListener('focus', () => {
        // Erweitern des Textarea-Feldes und Anzeige des Titel-Eingabefeldes
        noticeTextarea.classList.add('expanded');
        titleTextarea.style.display = 'block'; // Das Titel-Textarea wird innerhalb des erweiterten Bereichs angezeigt
    });

    noticeTextarea.addEventListener('blur', () => {
        // Wenn keine Notiz eingegeben wurde, zurücksetzen
        if (!noticeTextarea.value.trim()) {
            noticeTextarea.classList.remove('expanded');
            titleTextarea.style.display = 'none'; // Das Titel-Textarea wird ausgeblendet
        }
    });
});
// Titel & Notizen in einem Fenster - Ende







