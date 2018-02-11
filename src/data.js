import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'Gazi Mustafa Kemal Atatürk',
    poster: 'http://imageserver.kitapyurdu.com/select.php?imageid=5193438&width=100&isWatermarked=true',
    genre: 'Tarih',
    days,
    times,
  },
  {
    title: 'Saklı Seçilmişler Siz Onları Değil, Onlar Sizi Seçti',
    poster: 'http://imageserver.kitapyurdu.com/select.php?imageid=5391420&width=100&isWatermarked=true',
    genre: 'Araştırma-İnceleme',
    days,
    times,
  },
  {
    title: 'Dirilt Kalbini',
    poster: 'http://imageserver.kitapyurdu.com/select.php?imageid=4982713&width=100&isWatermarked=true',
    genre: 'Araştırma-İnceleme',
    days,
    times,
  },
  {
    title: 'Bir Çöküşün Öyküsü',
    poster: 'http://imageserver.kitapyurdu.com/select.php?imageid=3169901&width=100&isWatermarked=true',
    genre: 'Roman',
    days,
    times,
  },
  {
    title: 'Yuval Noah Harari Set (Sapiens / Homo Deus) (Ciltli)',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Bilim Tarihi',
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
    days,
    times,
  },
  {
    title: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
    days,
    times,
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
    days,
    times,
  },
  {
    title: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
  },
  {
    title: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    days,
    times,
  },
  {
    title: 'Sing Street',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];