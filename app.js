'use strict'

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", toggleInfo);
};

function toggleInfo() {
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.opacity === "1") {
			panel.style.opacity = 0;
			panel.style.height = "0";
			this.replaceWith(createSVGElement(feather.icons['chevron-down'].toSvg({class: 'accordion'})));
    } else {
      panel.style.opacity = 1;
			panel.style.height = "400px";
			this.replaceWith(createSVGElement(feather.icons['chevron-up'].toSvg({class: 'accordion'})));
    }
}

function createSVGElement(data) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(data, "image/svg+xml");
	doc.documentElement.addEventListener("click", toggleInfo);
  return doc.documentElement;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtonns = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach(modal => {
		closeModal(modal);
	});
});

closeModalButtonns.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
	document.body.style.overflow = "hidden";
	document.body.style.height = "100%";
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
	document.body.style.overflow = "auto";
	document.body.style.height = "auto";
}