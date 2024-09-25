//function to clear current content
function clearContent(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

export function loadContent(){
    clearContent();
    const contentDiv = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Chisom's Bistro";

    const paragraph = document.createElement('p');
    paragraph.textContent = "At Chisom's Bistro, we bring you the finest cuisine source from the best places. Each dish is prepared with love and would have you coming for more";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
}