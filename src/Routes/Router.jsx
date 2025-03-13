import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Forum from './Forum';
import DVD from './DVD';
import Shop from './Shop';
import VideoPlayer from '../components/VideoPlayer';

export const grid = [
  {id: 1, img: '/buttons/user-button.gif', text: 'FORUM', route: '/forum', color: "#d15f18"},
  {id: 2, img: '/buttons/awgeDVD-button.gif', text: 'DVD', route: '/dvd', color: "black"},
  {id: 3, img: '', text: '', class: '', route: ''},
  {id: 4, img: '', text: '', class: '', route: ''},
  {id: 5, img: '/buttons/shop-button.gif', text: 'SHOP', route: '/shop', color: "#2A440B"},
  {id: 6, img: '/buttons/dbd-button.gif', text: 'A$AP ROCKY', route: '/asap-rocky', color: "black"},
  {id: 7, img: '/buttons/about-button.gif', text: 'ABOUT', route: '/about', color: "#d15f18"},
  {id: 8, img: '/buttons/pager-button.gif', text: 'CONTACT',  route: '/contact', color: "#2A440B"}
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

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "home", element: <Home />},
  {path: "forum", element: <Forum />},
  {path: "dvd-vol-1", element: <VideoPlayer src="/DVD/vol-1.mp4"/>},
  {path: "dvd-vol-2", element: <VideoPlayer src="/DVD/vol-2.mp4"/>},
  {path: "dvd-vol-3", element: <VideoPlayer src="/DVD/vol-3.mp4"/>},
  {path: "dvd", element: <DVD />},
  {path: "shop", element: <Shop />}
]);

export default router;
