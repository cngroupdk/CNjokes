import JokesSearch from './components/JokesSearch.vue';
import JokesListing from './components/JokesListing';

const routes = [
  { path: '/', component: JokesSearch },
  { path: '/Listing', component: JokesListing }
];

export default routes;