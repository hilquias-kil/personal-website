import Nav from './components/nav';

let nav = document.querySelectorAll('[data-nav]');

[].forEach.call(nav, (el) => {
    new Nav(el)
})
