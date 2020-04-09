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
	a.setAttribute('value', selElmnt.options[selElmnt.selectedIndex].value);
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement('DIV');
	b.setAttribute('class', 'select-items select-hide');
	for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
    create a new DIV that will act as an option item:*/
		c = document.createElement('DIV');
		c.setAttribute('value', selElmnt.options[j].value);
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener('click', function (e) {
			/*when an item is clicked, update the original select box,
      and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName('select')[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					s.value = this.value;
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
	a.addEventListener('click', function (e) {
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

// change colors dark mode

const darkmodeHandler = () => {
	showDark = !showDark
	if (showDark === true) {
		window.localStorage.setItem('dark-theme', 'true');
	} else {
		window.localStorage.setItem('dark-theme', 'false');
	}
	darkmodeListener();
}


window.addEventListener('DOMContentLoaded', () => {
	darkmodeListener();
	designTokens();
});

const darkmodeListener = () => {
	data = localStorage.getItem('dark-theme');
	console.log(data)
	if (data === 'true') {
		console.log('true')
		document.documentElement.style.setProperty('--alpq-color-contrast', '#353535');
		document.documentElement.style.setProperty('--alpq-color-background', '#2d2d2d');
		document.documentElement.style.setProperty('--alpq-font-color-primary', '#eaeaea');
		document.documentElement.style.setProperty('--alpq-color-highlight', '#303d42');
		document.documentElement.style.setProperty('--alpq-shadow-s', '0 0 16px rgba(0, 0, 0, 0.3)');
		sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
		sidebar.forEach(() => {
			sidebar;
			sidebar.forEach((i) => {
				i.style.filter = 'grayscale(1) invert(1)';
			});
		});
	} else {
		document.documentElement.style.setProperty('--alpq-color-contrast', '');
		document.documentElement.style.setProperty('--alpq-color-background', '');
		document.documentElement.style.setProperty('--alpq-font-color-primary', '');
		document.documentElement.style.setProperty('--alpq-color-highlight', '');
		document.documentElement.style.setProperty('--alpq-shadow-s', '');
		sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
		sidebar.forEach(() => {
			sidebar;
			sidebar.forEach((i) => {
				i.style.filter = 'grayscale(0) invert(0)';
			});
		});
	}
}

let showDark = false



const designTokens = () => {

	const select = document.querySelector(".select-selected");

	const vare = select.addEventListener('click', () => {
		const sa = select.innerHTML.toLowerCase()

		fetch('http://127.0.0.1:5500/api/design-totkens-' + sa + '.json')
			.then(res => {
				return res.json()
			}).then(json => {

				console.log('success!', json);
				const brand = json

				// Background color

				document.documentElement.style.setProperty('--alpq-color-primary', brand.colors.primary);
				document.documentElement.style.setProperty('--alpq-color-contrast', brand.colors.contrast);
				document.documentElement.style.setProperty('--alpq-color-secondary', brand.colors.secondary);
				document.documentElement.style.setProperty('--alpq-color-highlight', brand.colors.highlight);
				document.documentElement.style.setProperty('--alpq-color-error', brand.colors.error);
				document.documentElement.style.setProperty('--alpq-color-success', brand.colors.success);
				document.documentElement.style.setProperty('--alpq-color-H4', brand.colors.H4);
				document.documentElement.style.setProperty('--alpq-color-link-hover', brand.colors.linkHover);
				document.documentElement.style.setProperty('--alpq-color-helper', brand.colors.helper);
				document.documentElement.style.setProperty('--alpq-color-link', brand.colors.link);
				document.documentElement.style.setProperty('--alpq-color-inactive', brand.colors.inactive);
				document.documentElement.style.setProperty('--alpq-color-background', brand.colors.background);

				// Font Colors
				document.documentElement.style.setProperty('--alpq-font-color-primary', brand.fontColors.primary);
				document.documentElement.style.setProperty('--alpq-font-color-contrast', brand.fontColors.contrast);
				document.documentElement.style.setProperty('--alpq-font-color-secondary', brand.fontColors.secondary);
				document.documentElement.style.setProperty('--alpq-font-color-highlight', brand.fontColors.highlight);
				document.documentElement.style.setProperty('--alpq-font-color-error', brand.fontColors.error);
				document.documentElement.style.setProperty('--alpq-font-color-success', brand.fontColors.success);
				document.documentElement.style.setProperty('--alpq-font-color-H4', brand.fontColors.H4);
				document.documentElement.style.setProperty('--alpq-font-color-link-hover', brand.fontColors.linkHover);
				document.documentElement.style.setProperty('--alpq-font-color-helper', brand.fontColors.helper);
				document.documentElement.style.setProperty('--alpq-font-color-link', brand.fontColors.link);
				document.documentElement.style.setProperty('--alpq-font-color-inactive', brand.fontColors.inactive);
				document.documentElement.style.setProperty('--alpq-font-color-background', brand.fontColors.background);

				document.documentElement.style.setProperty('--alpq-borderadius', brand.border.borderadius);

				//Logo
				document.querySelector('.alpq-header-logo').src = brand.logo.url

				if (brand.colors.primary === '#000') {
					
					document.querySelector('.alpq-header').style.backgroundColor = '#ffffff';
					document.documentElement.style.setProperty('--alpq-font-color-contrast', brand.fontColors.primary);

					document.querySelector('.alpq-header-icon').style.filter = 'grayscale(1)';
					
					sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
					sidebar.forEach(() => {
						sidebar;
						sidebar.forEach((i) => {
							i.style.filter = 'grayscale(1)';
						});
					});

				} else{
					document.querySelector('.alpq-header').style.backgroundColor = brand.colors.primary;

					document.querySelector('.alpq-header-icon').style.filter = 'grayscale(0)';

					sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
					sidebar.forEach(() => {
						sidebar;
						sidebar.forEach((i) => {
							i.style.filter = 'grayscale(0)';
						});
					});

				}

				sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
					sidebar.forEach(() => {
						sidebar;
						sidebar.forEach((i) => {
							i.style.filter = 'grayscale(1)';
						});
					});

			}).catch(err => {
				// There was an error
				console.warn('Something went wrong.', err);
			});
	});
}


