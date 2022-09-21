const song1artist = 'Prince';
const song1title = 'Purple Rain';
const song1label = 'A&M';

const song2artist = 'Blur';
const song2title = 'Song 2';
const song2publishedYear = 1997;

// - Boolean
// - Null
// - Undefined
// - Number
// - BigInt
// - String
// - Symbol

console.log('song1artist',song1artist);

const songList = []; // array
const song1 = {
  artist: 'Prince',
  title: 'Purple Rain',
  label: 'Warner Brothers',
  publishedYear: 1984,
  isGood: true
}; // object

console.log('song1.title',song1.title);
console.log('song1.isGood',song1.isGood);
console.log('typeOf song1', typeof song1);

const propertyName = 'title';

console.log("song1['title']", song1['title']);

// const album44 = {
//   title: 'The White Album',
//   artist: 'The Beatles',
//   publishedYear: 1968,
//   isGood: true,
//   worldWidePlays: 9007199254740991n,
//   tile: function (album, number){
//     for (let ii = 0; ii < number; ii++){
//       console.log(`|---------------------|`);
//       console.log(`| ${album.title}`);
//       console.log(`|                     |`);
//       console.log(`| ${album.artist}`);
//       console.log(`|                     |`);
//       console.log(`|---------------------|`);
//     }
//     console.log('count inside:', number);  
//   }
// };

const album44 = {
  title: 'The White Album',
  artist: 'The Beatles',
  publishedYear: 1968,
  isGood: true,
  worldWidePlays: 9007199254740991n,
  tile: function (number){
    for (let ii = 0; ii < number; ii++){
      console.log(`|---------------------|`);
      console.log(`| ${this.title}`);
      console.log(`|                     |`);
      console.log(`| ${this.artist}`);
      console.log(`|                     |`);
      console.log(`|---------------------|`);
    }
    console.log('count inside:', number);  
  }
};

let counter = 3;
// primitives are passed by value
// objects are passed by reference
album44.tile(counter);
console.log('album44.title', album44.title);


for (const property in album44) {
  console.log('property:', property);
  console.log('typeof album44[property]:', typeof album44[property]);
}

