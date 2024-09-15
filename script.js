let posts = [];
let titles = [];

let postsAsText = [];
let titlesAsText = [];

// Push Notes
function addMyPost(){
    let text = document.getElementById('notice').value;
    let title = document.getElementById('title').value;

    if(text.trim() !== '' && title.trim() !== ''){
        posts.push(text);
        titles.push(title);
        document.getElementById('notice').value = '';
        document.getElementById('title').value = '';

        save();
        render();
    }
}

/*
function addNote(){
let noteInputRef = document.getElementById('notice');
let noteInput = noteInputRef.value;

posts.push(noteInput);
render();

noteInputRef.value = '';
}

*/

//Saving Notes
function save(){
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

//Display Notes
function render(){ 
    let myposts = document.getElementById('myposts');
    myposts.innerHTML = '';

    for(let i=0; i < posts.length; i++){
        myposts.innerHTML += /*html*/`
        <div class="post">
            <b class="bold">${titles[i]}</b><br>
            <b>${posts[i]}</b>
            <div>
            <button class="d-button" onclick="deleteNotice(${i})">Löschen</button>
            </div>
        </div>`;
    }
    document.getElementById('notice').value = '';
}

// Delete Notes
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










