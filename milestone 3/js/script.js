// Adesso rimuoviamo tutto il markup statico
// e inseriamo le immagini e i testi delle immagini
// dinamicamente servendoci dell'array fornito
// e un semplice ciclo for che concatena un template literal.
// Al termine di questa fase ci ritroveremo con lo stesso slider,
// ma costruito dinamicamente attraverso JavaScript.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// POPOLO LE IMMAGINI,H2 E DESCRIZIONI CON IL FOR
// Variabili
const singleImage = document.querySelector('.main_images_container');
const ImageColumn = document.querySelector('.thumbs');

// Logica
for( let i = 0; i < items.length; i++ ) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];
    
    // Popolare il contenitore di immagini
    const newDiv = `
    <div class="single_image">
        <img src="${thisPath}" alt="Image ${i}">

        <div class="image_description">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    singleImage.innerHTML += newDiv;

    // Popolare il contenitore di immagini selezionate
    const newImageSelected = `
    <div class="single_thumbs">
        <img src="${thisPath}" alt="Image ${i}">
    </div>
    `;

    ImageColumn.innerHTML += newImageSelected;

}

// Active
let activeImage = 0;
const allImages = document.getElementsByClassName('single_image');
const imageSelected = document.getElementsByClassName('single_thumbs');
allImages[activeImage].classList.add('active');
imageSelected[activeImage].classList.add('active');

// Al click, sposto le classi active all'immagine in basso
const bottomArrow = document.querySelector('.bottom');
bottomArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    imageSelected[activeImage].classList.remove('active');

    // incrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if( activeImage < items.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // Assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
    imageSelected[activeImage].classList.add('active');
});

// Al click, sposto le classi active all'immagine in alto
const prevArrow = document.querySelector('.top');
prevArrow.addEventListener('click', function() {
    // Rimuovere active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    imageSelected[activeImage].classList.remove('active');

    // decrementare activeImage di 1 solo se non è l'ultima foto
    // se l'immagine è l'ultima ricomincio da zero
    if ( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = items.length - 1;
    }

    // assegnare all'immagine col nouvo indice la classe active
    allImages[activeImage].classList.add('active');
    imageSelected[activeImage].classList.add('active');
});