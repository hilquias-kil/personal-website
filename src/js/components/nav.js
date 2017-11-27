import scrollIt from './scroll-it';

class Nav {
    constructor(el) {
        this.el = el;
        this.holder = document.querySelector(this.el.dataset.nav);
        this.bind();
    }

    bind(){
        this.el.addEventListener('click', this.move.bind(this));
    }

    move(e){
        e.preventDefault();
        scrollIt(this.holder, 300, 'easeInOutQuad')
    }
}

export default Nav;
