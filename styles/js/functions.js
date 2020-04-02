// Open close corporative side menu
const toggleCorporativeMenu = () => {
	let corporative_menu = document.querySelector('.alpq-corporative-menu-toggle');
	let header_icon = document.querySelector('.alpq-header-icon');
	if (window.getComputedStyle(corporative_menu).right === '-320px') {
		corporative_menu.style.right = '0';
		header_icon.src = 'styles/icons/icon-close.svg?sanitize=true';
	} else {
		corporative_menu.style.right = '-320px';
		header_icon.src = 'styles/icons/icon-menu-hamburger.svg?sanitize=true';
	}
};

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "alpq-selector":*/
x = document.getElementsByClassName('alpq-selector');
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName('select')[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement('DIV');
	a.setAttribute('class', 'select-selected');
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement('DIV');
	b.setAttribute('class', 'select-items select-hide');
	for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
    create a new DIV that will act as an option item:*/
		c = document.createElement('DIV');
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener('click', function(e) {
			/*when an item is clicked, update the original select box,
      and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName('select')[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName('same-as-selected');
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute('class');
					}
					this.setAttribute('class', 'same-as-selected');
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener('click', function(e) {
		/*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle('select-hide');
		this.classList.toggle('select-arrow-active');
	});
}

function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
  except the current select box:*/
	var x,
		y,
		i,
		arrNo = [];
	x = document.getElementsByClassName('select-items');
	y = document.getElementsByClassName('select-selected');
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove('select-arrow-active');
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add('select-hide');
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect);

/*Accordion*/

var accordion = document.querySelectorAll('.alpq-accordion');
var accordionContent = document.querySelectorAll('.alpq-accordion-content');

const openAccordion = (e) => {
	content = e.target.nextElementSibling;
	target = e.target.classList;

	/*Add open class*/
	if (e.target.classList.value === 'alpq-accordion-header') {
		if (content.classList.contains('alpq-accordion--open')) {
			content.classList.remove('alpq-accordion--open');
		} else {
			content.classList.add('alpq-accordion--open');
		}
	}
};

accordion.forEach((e) => {
	this.addEventListener('click', openAccordion);
});

// change colors

const color = document.querySelector('.selectedcolor');

const changeHandler = () =>{
	console.log(color.value)
	document.documentElement.style.setProperty('--alpq-color-primary', color.value);
}
 
color.addEventListener('change', changeHandler)
