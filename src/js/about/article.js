export class Article {
  DOM = {
    el: null,
    imageWrap: null,
    image: null,
    number: null,
    title: null,
    intro: null,
    description: null,
  };

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.imageWrap = this.DOM.el.querySelector(".article__img-wrap");
    this.DOM.image = this.DOM.el.querySelector(".article__img");
    this.DOM.number = this.DOM.el.querySelector(".article__number");
    this.DOM.title = this.DOM.el.querySelector(".article__title");
    this.DOM.intro = this.DOM.el.querySelector(".article__intro");
    this.DOM.description = this.DOM.el.querySelector(".article__description");
  }
}
