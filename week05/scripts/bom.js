
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize array from localStorage or empty
let chaptersArray = getChapterList() || [];

// Populate the list on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});


//Event Listener for Add chapter button

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
    else {
        alert("Please Enter a chapter you wished to add");
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// LocalStorage Functions
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}


function deleteChapter(chapter) {
    // Re-format string to remove the '❌' before filtering
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}