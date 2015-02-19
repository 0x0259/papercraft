/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var context = require('./context');
var About = require('./components/screens/about.jsx');
var Gameboard = require('./components/screens/gameboard.jsx');
var Error = require('./components/screens/error.jsx');
var Home = require('./components/screens/home.jsx');
var Login = require('./components/screens/login.jsx');

context
  .createRoute('home', {
    path: '/',
    title: 'Home',
    body: Home,
    action: 'photos:interesting:fetch'
  })
  .createRoute('about', {
    path: '/about',
    title: 'About',
    body: About
  })
  .createRoute('login', {
    path: '/login',
    title: 'Login',
    body: Login
  })
  .createRoute('gameboard', {
    path: '/gameboard',
    title: 'Gameboard',
    body: Gameboard
  })
  .createErrorRoute(404, {
    title: 'Not Found',
    body: Error
  })
  .createErrorRoute(500, {
    title: 'Unexpected Error',
    body: Error
  });
