const profile = {

};

let sportsClicked = false;
let animalsClicked = false;
let colourClicked = false;
let avatarClicked = false;
let lightbox = document.querySelector('#lightbox');
let avatarBtn = document.querySelector('#avatars');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let lengthInput = document.querySelector('#length');
let weightInput = document.querySelector('#weight');
let jokeInput = document.querySelector('#joke');
let superpowersInput = document.querySelector('#superpowers');

// remove classlist img-clicked
const removeClassElement = item => {
    let classElement = document.querySelectorAll('.' + item);
    for (let i = 0; i < classElement.length; i++) {
        classElement[i].classList.remove('img-clicked');
    }
};

// show or hide lightbox
const toggleLightBox = () => {
    // let lightbox = document.getElementById('lightbox');
    lightbox.classList.toggle('hidden');
};

// show submit button if sports, animals, colour and avatar is picked
const checkClicked = () => {
    if (sportsClicked && animalsClicked && colourClicked && avatarClicked) {
        let submitBtn = document.querySelector('#submit');
        submitBtn.style.visibility = 'visible';
    }
};


// what happens
const clickAction = e => {
    // console.log(e.target.tagName);

    // execute if it's an image with an alt
    if (e.target.alt !== undefined && e.target.alt !== '') {
        console.log(e.target.alt, e.target.parentNode.parentNode);
        let item = e.target.parentNode.classList[0];
        removeClassElement(item);
        e.target.parentNode.classList.add('img-clicked');
        let category = e.target.parentNode.parentNode.classList[0];
        profile[category] = e.target.alt;
        if (category === 'sports') {
            sportsClicked = true;
        } else if (category === 'animals') {
            animalsClicked = true;
        }
        checkClicked();
        return;
    }

    // execute when a colour is picked
    if (e.target.classList[0] === 'colour') {
        let item = e.target.classList[0];
        removeClassElement(item);
        e.target.classList.add('img-clicked');
        profile[item] = e.target.classList[1];
        colourClicked = true;
        checkClicked();
        return;

    }

    // if the target is the avatar
    if (e.target.id === 'avatars') {
        toggleLightBox();
        return;
    }

    // if the close button is pressed
    if (e.target.classList[0] === 'close') {
        toggleLightBox();
        return;
    }

    // if an avatar is chosen
    if (e.target.classList[0] === 'js-avatar') {
        profile['avatar'] = e.target.src;
        avatarClicked = true;
        checkClicked();
        avatars.src = e.target.src;
        avatars.id = 'noradius';
        toggleLightBox();
        return;
    }

    // check if the focusout is one of following tags input, textarea, select
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        console.log(e.target.value);
        return;
    }

    // if there is a button click
    if (e.target.id === 'submit') {
        e.preventDefault();
        profile.name = nameInput.value;
        profile.age = ageInput.value;
        profile.length = lengthInput.value;
        profile.weight = weightInput.value;
        profile.superpower = superpowersInput.value;
        profile.joke = jokeInput.value;
        return;
    }

    
};

// create global eventlistener
document.body.addEventListener('click', clickAction);
document.body.addEventListener('focusout', clickAction);
