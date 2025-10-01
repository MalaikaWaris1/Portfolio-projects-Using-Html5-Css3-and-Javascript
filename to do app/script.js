const input = document.getElementById('input');
const listcontainer = document.getElementById('list_container');

function addclick() {
    if (input.value.trim() === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // × icon
        li.appendChild(span);
    }
    input.value = '';
    savedata();
}

listcontainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem('data') || '';
}

showtask();
