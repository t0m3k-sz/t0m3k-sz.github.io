let main = document.querySelector('main');
let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let experience = document.querySelector('#experience');
let contact = document.querySelector('#contact');

let mainLink = document.querySelector("#menu li[data-index='1']");
let aboutLink = document.querySelector("#menu li[data-index='2']");
let skillsLink = document.querySelector("#menu li[data-index='3']");
let experienceLink = document.querySelector("#menu li[data-index='4']");
let contactLink = document.querySelector("#menu li[data-index='5']");

let burger = document.querySelector('#burger');
let menuOpen = document.querySelector('#menuOpen');
let menuClosed = document.querySelector('#menuClosed');
let menu = document.querySelector('#menu');

burger.addEventListener('click', toggleBurger);

function toggleBurger() {
  menuOpen.classList.toggle('hidden');
  menuClosed.classList.toggle('hidden');
  toggleNav();
}

function toggleNav() {
  menu.classList.toggle('-ml-64');
  menu.classList.toggle('ml-0');
}

function modifyActive() {
  let currentActive = document.querySelector('.text-main');
  currentActive.classList.add('text-secondary');
  currentActive.classList.remove('text-main');
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function (event) {
	if (isInViewport(main) || about.getBoundingClientRect().top >= 539) {
		modifyActive();
    setNewActive(mainLink);
	}

  if (isInViewport(about)) {
		modifyActive();
    setNewActive(aboutLink);
	}

  if (isInViewport(skills)) {
		modifyActive();
    setNewActive(skillsLink);
	}

  if (isInViewport(experience)) {
		modifyActive();
    setNewActive(experienceLink);
	}

  if (isInViewport(contact)) {
		modifyActive();
    setNewActive(contactLink);
	}
}, false);

function setNewActive(elem) {
  elem.classList.remove('text-secondary');
  elem.classList.add('text-main');
}
