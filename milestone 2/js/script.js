// Adesso rimuoviamo tutto il markup statico
// e inseriamo le immagini e i testi delle immagini
// dinamicamente servendoci dell'array fornito
// e un semplice ciclo for che concatena un template literal.
//  Al termine di questa fase ci ritroveremo con lo stesso slider,
//  ma costruito dinamicamente attraverso JavaScript.

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
const singleImage = document.querySelector('.main_images_container');
const singleTitle = document.getElementsByClassName('.image_description');
const singleDescription = document.querySelector('.image_description');
// const singleDescription = document.querySelector('.image_description');

for( let i = 0; i < items.length; i++ ) {
    const thisPath = items[i];
    
    // Popolare il contenitore di immagini
    const newImage = `
    <div class="single_image">
        <img src="${thisPath}" alt="Img ${i}">

        <div class="image_description">
            
        </div>
    </div>
    `;

    singleImage.innerHTML += newImage;

}

for( let i = 0; i < title.length; i++ ) {
    const thisTitle = title[i];

    const newTitle = `
    <h2>${thisTitle}</h2>
    `

    singleTitle.innerHTML += newTitle;
}