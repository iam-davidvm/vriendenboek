// empty profile
const profile = {

};

// posts
const posts = [
    sports = {
        paardensport: ['De <span>Mongol Derby</span> is een paardrijdwedstrijd die bekend staat als de langste race ter wereld. De deelnemers leggen in <span>negen dagen</span> een afstand van <span>duizend kilometer</span> af over het Mongools-Mantsjoerisch grasland. <br> <span>#harderwerkers #ilovepaarden</span>','images/paardensport.jpg'],
        motorsport: ['Tijdens een race schakelt een <span>MotoGP</span> rijder minstens <span>500 à 800</span> keer.<br><span>#motogp #gearfreaks</span>','images/motorsport.jpg'],
        voetbal: ['Toen er voor het eerst werd gevoetbald, werd de bal gemaakt van <span>opgeblazen varkensblazen</span> die werden bedekt met leer. ECHT VIES! <br><span>#zotvanvoetbal #oink</span>','images/voetbal.jpg'],
        hockey: ['De <span>Romeinen</span> speelden ook een soort hockey op het strand. Maar in plaats van een bal gebruikten die een echte <span>mensenschedel</span>.<br><span>#ieuw #kopbal</span>','images/hockey.jpg'],
        atletiek: ['<span>Tarzan</span> deed mee aan de Olympische Spelen: Johnny Weissmuller, een atleet die acteur werd en Tarzan speelde in 12 films, won <span>vijf gouden medailles</span> met zwemmen in de jaren 20.<br><span>#Óeeeeehwaaaaahoeahahooeeehoeaaaaaa</span>','images/atletiek.jpg'],
        gymnastiek: ['De <span>Oude Grieken</span> bereidden hun jonge mannen voor op <span>oorlog</span> door aan gymnastiek te doen!<br><span>#moves #turngevecht</span>','images/gymnastiek.jpg'],
        zwemmen: ['In het resort San Alfonso del Mar in Algarrobe aan de zuidkust van <span>Chili</span> bevindt zich het <span>grootste zwembad ter wereld</span>. Het zwembad is namelijk <span>1013</span> meter lang.<br><span>#amaidaslang #wiliknietvullen</span>','images/zwemmen.jpg'],
        esports: ['De Deense Johan Sundstein heeft in totaal bijna <span>7 miljard(!!!)</span> Amerikaanse dollars gewonnen met <span>Dota2</span>. Wow!<br><span>#veelgeoefend #schermtijd</span>','images/esports.jpg'],
        likes: Math.floor(Math.random() * 2000)
    },
    animals = {
        leeuw: ['Voor kleine afstanden kunnen leeuwen een snelheid halen van zo\'n <span>80 kilometer per uur</span>. Volgens het WNF kunnen ze sprongen van <span>elf meter</span> maken.<br><span>#koning #RAWR!</span>','images/leeuw.jpg'],
        pinguin: ['De keizerpinguïn kan maar liefst <span>vijfhonderd meter</span> diep duiken en kan <span>27 minuten</span> onder water blijven.<br><span>#duiker #pingu</span>','images/pinguin.jpg'],
        nijlpaard: ['Een nijlpaard heeft <span>40 tanden</span>. De onderste hoektanden zijn slagtanden met een lengte van <span>50 centimeter</span>!<br><span>#tandjebijsteken</span>','images/nijlpaard.jpg'],
        wolf: ['Mensen bezitten ongeveer 5 miljoen ruikcellen, wolven hebben er <span>200 miljoen</span>. De neus van wolven is zo goed dat ze je vanaf <span>1,5 kilometer</span> afstand al kunnen ruiken.<br><span>#scherpeneus #snifsnif</span>','images/wolf.jpg'],
        walvis: ['Bultruggen zijn enorme walvissen die wel tot <span>15 meter groot</span> kunnen worden! Hun naam danken ze aan het feit, dat wanneer ze duiken, hun rugvin als een bult boven het water uitkomt.<br><span>#blub #vismetwallen</span>','images/walvis.jpg'],
        ijsbeer: ['De haren van de ijsbeer lijken door de reflectie van de zon wit, maar zijn eigenlijk <span>doorzichtig</span>. Onder hun vacht zit dan weer een <span>zwarte huid</span>. <br><span>#camouflage #zeebeer</span>','images/ijsbeer.jpg'],
        neushoorn: ['Neushoorns <span>zien heel slecht</span>. Als je op <span>10 meter</span> afstand heel stil zou staan zou hij kunnen denken dat je een boom bent. Ze kunnen wel heel goed ruiken en horen!<br><span>#brilnodig #mol</span>','images/neushoorn.jpg'],
        uil: ['Een uil kan <span>vliegen zonder geluid</span> te maken. De zachte structuur van de veren zorgt ervoor dat het geluid van de klappende vleugels gedempt wordt.<br><span>#geluidsdemper #oehoe</span>','images/uil.jpg'],
        likes: Math.floor(Math.random() * 2000)
    },
    joke = {
        joke: 'Dit is mijn grap',
        likes: Math.floor(Math.random() * 2000)
    },
    foods = {
        frieten: ['Ik ben <span> zot van</span> frietjes. Lekker goudbruin gebakken.<br><span>#thuis #frituur</span>','images/frieten.jpg'],
        spaghetti: ['Ik ben <span> zot van</span> spaghetti. En dan nog het liefst die van de mama!<br><span>#mamamia #ladyendevagebond</span>','images/spaghetti.jpg'],
        pizza: ['Ik ben <span> zot van</span> pizza. De beste ronde uitvinding uit Italië!<br><span>#zonderananas #deanmartin</span>','images/pizza.jpg'],
        kebab: ['Ik ben <span> zot van</span> kebab. Lekker eten? Hoe vettiger, hoe prettiger!<br><span>#kebabisgeenpita #looksaus?</span>','images/kebab.jpg'],
        spinazie: ['Ik ben <span> zot van</span> spinaziestoemp met worst. Geef mij maar dagelijkse kost!<br><span>#vivabomma #jeroenmeus</span>','images/spinazie.jpg'],
        slaatje: ['Ik ben <span> zot van</span> salade. Geen vettige kost voor mij, geef mij maar een gezond slaatje!<br><span>#geenkonijneneten #caesar</span>','images/slaatje.jpg'],
        witloof: ['Ik ben <span> zot van</span> witloof met hesp in de oven. 3 lekkere ingrediënten gecombineerd: witloof, hesp en kaas.<br><span>#vlaamseklassieker #krokantkorstje</span>','images/witloof.jpg'],
        vis: ['Ik ben <span> zot van</span> visgerechten. Zalm, kabeljauw, tarbot.. ik lust het allemaal.<br><span>#graatloos #zwemmeninsaus</span>','images/vis.jpg'],
        likes: Math.floor(Math.random() * 2000)
    },
    superpowers = {
        vliegen: ['Ik wil kunnen vliegen zoals <span>Superman</span> of <span>Storm</span>! <br><span>#geenfile #verrereizen</span>','images/superpowers/superman.jpg'],
        supersterk: ['Ik wil supersterk zijn zoals <span>Thor</span> of <span>Mr. Incredible</span>! <br><span>#autostillen #allesmeesleuren</span>','images/superpowers/thor.jpg'],
        supersnel: ['Ik wil supersnel zijn zoals <span>Superman</span> of <span>Dash</span> uit The Incredibles! <br><span>#geenautomeernodig #wereldrecordsprint</span>','images/superpowers/dash.jpg'],
        tijdreizen: ['Ik wil kunnen tijdreizen zoals <span>Neo</span> uit The Matrix of <span>Hiro</span> uit Heroes! <br><span>#tijdstilzetten #nooitmeertelaat</span>','images/superpowers/hiro.jpg'],
        onzichtbaar: ['Ik wil onzichtbaar kunnen zijn zoals <span>Griffin</span> uit Hotel Transylvania of <span>Violet</span> uit The Incredibles! <br><span>#winnenbijverstoppertje</span>','images/superpowers/violet.jpg'],
        onsterfelijk: ['Ik wil onsterfelijk kunnen zijn zoals <span>Wolverine</span> of <span>The Thing</span> uit Fantastic Four! <br><span>#geenbang #foreveryoung</span>','images/superpowers/wolverine.jpg'],
        shapeshifting: ['Ik wil kunnen shapeshiften zoals <span>Mystique</span> uit X-Men of <span>Violet</span> uit The Incredibles! <br><span>#overalbinnen #imiteren</span>','images/superpowers/mystique.jpg'],
        mindreading: ['Ik wil kunnen gedachten lezen zoals <span>Professor Xavier</span> uit X-Men of <span>Edward Cullen</span> uit Twilight! <br><span>#ondercontrole #dingenlatenvergeten</span>','images/superpowers/xavier.jpg'],
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

// check the type of post 
const checkPost = i => {
    switch (i) {
        case 0: 
            return 'sports';
        case 1: 
            return 'animals';
        case 2: 
            return 'joke';
        case 3: 
            return 'foods';
        case 4: 
            return 'superpowers';
    }
};


// build personal page
const buildPage = () => {
    // only execute for page.html
    let pageURL = window.location;
    pageURL = pageURL.toString();
    pageURL = pageURL.slice(-9);
    if (pageURL !== 'page.html') {
        return;
    }

    let profile = JSON.parse(window.localStorage.getItem('profile'));

    let timeline = document.querySelector('#timeline');

    // header
    let avatar = document.querySelector('#avatar');
    let avatarImg = document.createElement('img');
    avatarImg.src = profile['avatar'];
    avatar.appendChild(avatarImg);
    let nameHeading = document.querySelector('#name-heading');
    nameHeading.innerText = profile['name'];

    // metrics
    let age = document.querySelector('.age');
    let weight = document.querySelector('.weight');
    let height = document.querySelector('.height');
    age.innerHTML = '<span class="metric-number">' + profile['age'] + '</span>jaar';
    weight.innerHTML = '<span class="metric-number">' + profile['weight'] + '</span>jaar';
    height.innerHTML = '<span class="metric-number">' + profile['height'] + '</span>jaar';

    // creating posts
    for (let i = 0; i <= 4; i++) {
        if (i === 2) {
            let section = document.createElement('section');
            section.classList.add('post');
            let posterName = document.createElement('div');
            posterName.classList.add('postername');
            let posterAvatar = document.createElement('div');
            posterAvatar.classList.add('poster-avatar');
            let postAvatar = document.createElement('img');
            postAvatar.src = profile['avatar'];
            posterAvatar.appendChild(postAvatar);
            let name = document.createElement('p');
            name.innerText = profile['name'];
            posterName.appendChild(posterAvatar);
            posterAvatar.appendChild(postAvatar);
            posterName.appendChild(name);
            section.appendChild(posterName);
    
            let picture = document.createElement('div');
            picture.classList.add('picture');
            let pictureImg = document.createElement('img');
            pictureImg.src = 'images/joke.jpg';
            picture.appendChild(pictureImg);
            section.appendChild(picture);
    
            let likes = document.createElement('div');
            likes.classList.add('likes');
            let like = document.createElement('div');
            like.classList.add('like');
            let likeCount = document.createElement('p');
            likeCount.classList.add('like-count');
            likeCount.innerText = posts[2]['likes'];
            likes.appendChild(like);
            likes.appendChild(like-count);
            section.appendChild(likes);
    
            let desc = document.createElement(div);
            desc.classList.add('desc');
            desc.innerHTML = '<p>' + posts[2]['joke']; + '</p>';
            section.appendChild(desc);

            timeline.appendChild(section);

        } else {
            let section = document.createElement('section');
            section.classList.add('post');
            let posterName = document.createElement('div');
            posterName.classList.add('postername');
            let posterAvatar = document.createElement('div');
            posterAvatar.classList.add('poster-avatar');
            let postAvatar = document.createElement('img');
            postAvatar.src = profile['avatar'];
            posterAvatar.appendChild(postAvatar);
            let name = document.createElement('p');
            name.innerText = profile['name'];
            posterName.appendChild(posterAvatar);
            posterAvatar.appendChild(postAvatar);
            posterName.appendChild(name);
            section.appendChild(posterName);
    
            let picture = document.createElement('div');
            picture.classList.add('picture');
            let pictureImg = document.createElement('img');
            let post = checkPost(i);
            pictureImg.src = 'images/' + posts[0][profile[post]][1] + '.jpg';
            picture.appendChild(pictureImg);
            section.appendChild(picture);
    
            let likes = document.createElement('div');
            likes.classList.add('likes');
            let like = document.createElement('div');
            like.classList.add('like');
            let likeCount = document.createElement('p');
            likeCount.classList.add('like-count');
            likeCount.innerText = posts[i]['likes'];
            likes.appendChild(like);
            likes.appendChild(like-count);
            section.appendChild(likes);
    
            let desc = document.createElement(div);
            desc.classList.add('desc');
            desc.innerHTML = '<p>' + posts[0][profile[post]][1] + '</p>';
            section.appendChild(desc);

            timeline.appendChild(section);

        }
    }

    document.title = 'Website van ' + profile['name'];
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
        let inputItem = e.target.id;
        profile[inputItem] = e.target.value;
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

        // werkt niet dus de pagina zal overschreven moeten worden
        window.localStorage.setItem('profile',JSON.stringify(profile));
        
        // go to page
        window.location.href = 'page.html';
    }

    
};

// create global eventlistener
document.body.addEventListener('click', clickAction);
document.body.addEventListener('focusout', clickAction);

window.addEventListener('load', buildPage);