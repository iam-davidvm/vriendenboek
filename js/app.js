// empty profile
const profile = {

};

// posts
const posts = [
    sports = {
        paardensport: 'De <span>Mongol Derby</span> is een paardrijdwedstrijd die bekend staat als de langste race ter wereld. De deelnemers leggen in <span>negen dagen</span> een afstand van <span>duizend kilometer</span> af over het Mongools-Mantsjoerisch grasland. <br> <span>#harderwerkers #ilovepaarden</span>',
        motorsport: 'Tijdens een race schakelt een <span>MotoGP</span> rijder minstens <span>500 à 800</span> keer.<br><span>#motogp #gearfreaks</span>', 
        voetbal: 'Toen er voor het eerst werd gevoetbald, werd de bal gemaakt van <span>opgeblazen varkensblazen</span> die werden bedekt met leer. ECHT VIES! <br><span>#zotvanvoetbal #oink</span>', 
        hockey: 'De <span>Romeinen</span> speelden ook een soort hockey op het strand. Maar in plaats van een bal gebruikten die een echte <span>mensenschedel</span>.<br><span>#ieuw #kopbal</span>', 
        atletiek: '<span>Tarzan</span> deed mee aan de Olympische Spelen: Johnny Weissmuller, een atleet die acteur werd en Tarzan speelde in 12 films, won <span>vijf gouden medailles</span> met zwemmen in de jaren 20.<br><span>#Óeeeeehwaaaaahoeahahooeeehoeaaaaaa</span>', 
        gymnastiek: 'De <span>Oude Grieken</span> bereidden hun jonge mannen voor op <span>oorlog</span> door aan gymnastiek te doen!<br><span>#moves #turngevecht</span>', 
        zwemmen: 'In het resort San Alfonso del Mar in Algarrobe aan de zuidkust van <span>Chili</span> bevindt zich het <span>grootste zwembad ter wereld</span>. Het zwembad is namelijk <span>1013</span> meter lang.<br><span>#amaidaslang #wiliknietvullen</span>', 
        esports: 'De Deense Johan Sundstein heeft in totaal bijna <span>7 miljard(!!!)</span> Amerikaanse dollars gewonnen met <span>Dota2</span>. Wow!<br><span>#veelgeoefend #schermtijd</span>', 
        likes: Math.floor(Math.random() * 2000)
    },
    animals = {
        leeuw: 'Voor kleine afstanden kunnen leeuwen een snelheid halen van zo\'n <span>80 kilometer per uur</span>. Volgens het WNF kunnen ze sprongen van <span>elf meter</span> maken.<br><span>#koning #RAWR!</span>',
        pinguïn: 'De keizerpinguïn kan maar liefst <span>vijfhonderd meter</span> diep duiken en kan <span>27 minuten</span> onder water blijven.<br><span>#duiker #pingu</span>',
        nijlpaard: 'Een nijlpaard heeft <span>40 tanden</span>. De onderste hoektanden zijn slagtanden met een lengte van <span>50 centimeter</span>!<br><span>#tandjebijsteken</span>',
        likes: Math.floor(Math.random() * 2000)
    },
    joke = {
        joke: 'Dit is mijn grap',
        likes: Math.floor(Math.random() * 2000)
    },
    foods = {
        frieten: 'Zalig',
        likes: Math.floor(Math.random() * 2000)
    },
    superpowers = {
        vliegen: 'Dan kan ik op het hoofd kakken van mensen',
        likes: Math.floor(Math.random() * 2000)
    }
];

let sportsClicked = false;
let animalsClicked = false;
let colourClicked = false;
let foodsClicked = false;
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

// build personal page
const buildPage = () => {

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
        } else if (category === 'foods') {
            foodsClicked = true;
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
        buildPage();
        return;
    }

    
};

// create global eventlistener
document.body.addEventListener('click', clickAction);
document.body.addEventListener('focusout', clickAction);
