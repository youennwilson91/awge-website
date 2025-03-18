import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Forum from './Forum';
import DVD from './DVD';
import Shop from './Shop';
import VideoPlayer from '../components/VideoPlayer';
import About from './About';
import Artists from './Artists';
import Artist from '../components/Artist';
import People from './People';
import Media from './Media';
import DirByAwge from './DirByAwge';
import Pictures from './Pictures';
import Contact from './Contact';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "home", element: <Home />},
  {path: "forum", element: <Forum />},
  {path: "dvd-vol-1", element: <VideoPlayer src="/DVD/vol-1.mp4"/>},
  {path: "dvd-vol-2", element: <VideoPlayer src="/DVD/vol-2.mp4"/>},
  {path: "dvd-vol-3", element: <VideoPlayer src="/DVD/vol-3.mp4"/>},
  {path: "dvd", element: <DVD />},
  {path: "shop", element: <Shop />},
  {path: "about", element: <About />},
  {path: "artist", element: <Artist />},
  {path: "artists", element: <Artists />},
  {path: "people", element: <People />},
  {path: "media", element: <Media />},
  {path: "dir-by-awge", element: <DirByAwge />},
  {path: "pictures", element: <Pictures />},
  {path: "contact", element: <Contact />}
]);


export const grid = [
  {id: 1, img: '/buttons/user-button.gif', text: 'FORUM', route: '/forum', color: "#d15f18"},
  {id: 2, img: '/buttons/awgeDVD-button.gif', text: 'DVD', route: '/dvd', color: "black"},
  {id: 3, img: '', text: '', class: '', route: ''},
  {id: 4, img: '', text: '', class: '', route: ''},
  {id: 5, img: '/buttons/shop-button.gif', text: 'SHOP', route: '/shop', color: "#2A440B"},
  {id: 6, img: '/buttons/dbd-button.gif', text: 'A$AP ROCKY', route: '/', color: "black"},
  {id: 7, img: '/buttons/about-button.gif', text: 'ABOUT', route: '/about', color: "#d15f18"},
  {id: 8, img: '/buttons/pager-button.gif', text: 'CONTACT',  route: '/contact', color: "#2A440B"}
]

export const grid_mobile = [
  {id: 3, img: '/buttons/shop-button.gif', text: 'SHOP', route: '/shop', color: "#2A440B"},
  {id: 4, img: '/buttons/dbd-button.gif', text: 'A$AP ROCKY', route: '/', color: "black"},
  {id: 2, img: '/buttons/awgeDVD-button.gif', text: 'DVD', route: '/dvd', color: "black"},
  {id: 6, img: '/buttons/pager-button.gif', text: 'CONTACT',  route: '/contact', color: "#2A440B"},
  {id: 1, img: '/buttons/user-button.gif', text: 'FORUM', route: '/forum', color: "#d15f18"},
  {id: 5, img: '/buttons/about-button.gif', text: 'ABOUT', route: '/about', color: "#d15f18"},
]

export const dvd = [
  {id: 1, path: "/dvd-vol-1"},
  {id: 2, path: "/dvd-vol-2"},
  {id: 3, path: "/dvd-vol-3"}
]

export const shopping_grid = [
  {id: 1, img: '/shop/shop-button.gif', text: 'CAP', price: 39.99},
  {id: 2, img: '/shop/tee.gif', text: 'TEE', price: 29.99},
  {id: 3, img: '/shop/jeans.gif', text: 'JEANS', price: 59.99},
  {id: 4, img: '/shop/grillz.gif', text: 'GRILLZ', price: 79.99}
]

export const artists = [
  {id:1, name: "slowthai", info: {info1: ". Northampton, England"}, img: '/artists/artist-slowthai.jpg', bg: '/artists/artist-slowthai.gif'},
  {id:2, name: "ThotTwat", info: {info1: ". Icy Twat", info2: ". Thoto"}, img:'/artists/artist-thottwat.jpg', bg: '/artists/artist-thottwat.gif'},
  {id:3, name: "Kelvin Krash", info: {info1: ". London, UK", info2: ". Producer"}, img: '/artists/artist-krash.jpg', bg: '/artists/artist-krash.gif'},
  {id:4, name: "Smooky Margielaa", info: {info1: ". South Bronx, NY", info2: ". Margielaa Mad Man "}, img: '/artists/artist-smooky.jpg', bg: '/artists/artist-smooky.gif'},
  {id:5, name: "A$AP Nast", info: {info1: ". Harlem, NY", info2: ". Nast/Nasty Baby"}, img: '/artists/artist-nast.jpg', bg: '/artists/artist-nast.gif'},
  {id:6, name: "Playboi Carti", info: {info1: ". Southside Atlanta", info2: ". Cash Carti/Sir Cartier/Young Carti"}, img: '/artists/artist-carti.jpg', bg: '/artists/artist-carti.gif'}
]

export const people =[
  {id:1, name: "Matt Henson-Fashion"},
  {id:2, name: "Hector Delgado-Music"},
  {id:3, name: "Hidjifilms-Video"},
  {id:4, name: "YGA-Director"},
  {id:5, name: "Wally Sajimi-Tech"},
  {id:6, name: "Bladi Corniel-Photo"},
  {id:7, name: "Jimmy Regular-Video"}
]

export const dirByAwge = [ 
  {id:1, title: "Fukk Sleep", By: "A$AP Rocky", img: '/dirByAwge/FukkSleep.gif', link: "https://www.youtube.com/watch?v=pM5XogpX1JA&pp=ygUKZnVja3NsZWVwKg%3D%3D"},
  {id:2, title: "Kids Turned Out Fine", By: "A$AP Rocky", img: '/dirByAwge/KidsTurnedOutFine.gif', link:"https://www.youtube.com/watch?v=FUQI-o02JYU&pp=ygULa2lkcyB0dXJuZWQ%3D"},
  {id:3, title: "Praise The Lord", By: "A$AP Rocky ft. Skepta", img: '/dirByAwge/PDL.gif', link: "https://www.youtube.com/watch?v=Kbj2Zss-5GY&pp=ygUPcHJhaXNlIHRoZSBsb3Jk"},
  {id:4, title: "Potato Salad", By: "A$AP Rocky ft. Tyler The Creator", img: '/dirByAwge/PotatoSalad.gif', link: "https://www.youtube.com/watch?v=93M1QtYDtpU&pp=ygUMcG90YXRvIHNhbGFk"},
  {id:5, title: "Richard Millie Plain", By: "Gunna", img: '/dirByAwge/RichardMilliePlain.gif', link: "https://www.youtube.com/watch?v=zpL3velgzmQ"}
]

export const dirByAwgeImages = [
  {id:1, img: '/dirByAwge/flacko-1.jpg'},
  {id:2, img: '/dirByAwge/flacko-2.jpg'},
  {id:3, img: '/dirByAwge/flacko-3.jpg'}
]

export default router;
