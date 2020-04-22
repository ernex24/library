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

window.addEventListener('DOMContentLoaded', () => {
	// designTokens();
	darkmodeHandler();
});


const darkmodeHandler = () => {
	showDark = !showDark
	if (showDark === true) {
		window.localStorage.setItem('dark-theme', 'true');
	} else {
		window.localStorage.setItem('dark-theme', 'false');
	}
	darkmodeListener();
}

let showDark = true

const darkmodeListener = () => {
	data = localStorage.getItem('dark-theme');
	console.log(data)
	if (data === 'true') {
		console.log('true')
		const setStyle = document.documentElement.style;
		setStyle.setProperty('--alpq-color-contrast', '#353535');
		setStyle.setProperty('--alpq-color-background', '#2d2d2d');
		setStyle.setProperty('--alpq-font-color-primary', '#eaeaea');
		setStyle.setProperty('--alpq-color-highlight', '#303d42');
		setStyle.setProperty('--alpq-shadow-s', '0 0 16px rgba(0, 0, 0, 0.3)');
		setStyle.setProperty('--alpq-font-color-primary', '#ffffff');
		setStyle.setProperty('--alpq-font-color-highlight', '#ffffff');
		setStyle.setProperty('--alpq-font-color-helper', '#ffffff');
		setStyle.setProperty('--alpq-font-color-h1', '#ffffff');
		setStyle.setProperty('--alpq-font-color-h2', '#ffffff');
		setStyle.setProperty('--alpq-font-color-h3', '#ffffff');
		setStyle.setProperty('--alpq-font-color-h4', '#ffffff');
		setStyle.setProperty('--alpq-font-color-p', '#ffffff');
		setStyle.setProperty('--alpq-font-color-pbold', '#ffffff');
		setStyle.setProperty('--alpq-font-color-description', '#ffffff');
		setStyle.setProperty('--alpq-font-color-description-bold', '#ffffff');
		setStyle.setProperty('--alpq-font-color-sidebar', '#ffffff');
		setStyle.setProperty('--alpq-font-color-placeholder', '#ffffff');
		setStyle.setProperty('--alpq-font-color-label', '#ffffff');
		setStyle.setProperty('--alpq-font-color-link', '#ffffff');
		setStyle.setProperty('--alpq-font-color-linkhover', '#ffffff');
		setStyle.setProperty(' --alpq-font-color-contrast', '#ffffff');
		setStyle.setProperty('--alpq-font-color-warning', '#f3b229');
		setStyle.setProperty('--alpq-font-color-error', '#de592e');
		setStyle.setProperty('--alpq-font-color-success','#99cc51');

		sidebar = document.querySelectorAll('.alpq-main-sidebar > a > div > img');
		sidebar.forEach(() => {
			sidebar;
			sidebar.forEach((i) => {
				i.style.filter = 'grayscale(1) invert(1)';
			});
		});
	} 
	
	if (data === 'false') {
		designTokens()
	}
}




const designTokensHandler = (brand) => {
	window.localStorage.setItem('brand', brand);
	designTokens();
}

const designTokens = (brand) => {
	brand = localStorage.getItem('brand');
		fetch('api/design-totkens-' + brand + '.json')
			.then(res => {
				return res.json()
			}).then(json => {
				console.log('success!', json);
				const brand = json
				const setStyle = document.documentElement.style;

				// Background color
				setStyle.setProperty('--alpq-color-primary', brand.colors.primary);
				setStyle.setProperty('--alpq-color-contrast', brand.colors.contrast);
				setStyle.setProperty('--alpq-color-secondary', brand.colors.secondary);
				setStyle.setProperty('--alpq-color-highlight', brand.colors.highlight);
				setStyle.setProperty('--alpq-color-error', brand.colors.error);
				setStyle.setProperty('--alpq-color-success', brand.colors.success);
				setStyle.setProperty('--alpq-color-h4', brand.colors.h4);
				setStyle.setProperty('--alpq-color-link-hover', brand.colors.linkHover);
				setStyle.setProperty('--alpq-color-helper', brand.colors.helper);
				setStyle.setProperty('--alpq-color-link', brand.colors.link);
				setStyle.setProperty('--alpq-color-inactive', brand.colors.inactive);
				setStyle.setProperty('--alpq-color-background', brand.colors.background);
				setStyle.setProperty('--alpq-button-primary', brand.colors.buttonPrimary);
				setStyle.setProperty('--alpq-button-primary-hover', brand.colors.buttonPrimaryHover);
				setStyle.setProperty('--alpq-header-color', brand.colors.header);
				setStyle.setProperty('--alpq-font-color-header', brand.fontColors.fontColorheader);

				// Font Colors
				setStyle.setProperty('--alpq-font-color-primary', brand.fontColors.primary);
				setStyle.setProperty('--alpq-font-color-secondary', brand.fontColors.secondary);
				setStyle.setProperty('--alpq-font-color-highlight', brand.fontColors.highlight);
				setStyle.setProperty('--alpq-font-color-helper', brand.fontColors.helper);
				setStyle.setProperty('--alpq-font-color-inactive', brand.fontColors.inactive);
				setStyle.setProperty('--alpq-font-color-background', brand.fontColors.background);	
				setStyle.setProperty('--alpq-font-color-h1', brand.fontColors.h1);
				setStyle.setProperty('--alpq-font-color-h2', brand.fontColors.h2);
				setStyle.setProperty('--alpq-font-color-h3', brand.fontColors.h3);
				setStyle.setProperty('--alpq-font-color-h4', brand.fontColors.h4);
				setStyle.setProperty('--alpq-font-color-p', brand.fontColors.p);
				setStyle.setProperty('--alpq-font-color-pbold', brand.fontColors.pbold);
				setStyle.setProperty('--alpq-font-color-description', brand.fontColors.description);
				setStyle.setProperty('--alpq-font-color-description-bold', brand.fontColors.descriptionBold);
				setStyle.setProperty('--alpq-font-color-sidebar', brand.fontColors.sidebar);
				setStyle.setProperty('--alpq-font-color-placeholder', brand.fontColors.placeholder);
				setStyle.setProperty('--alpq-font-color-label', brand.fontColors.label);
				setStyle.setProperty('--alpq-font-color-link', brand.fontColors.link);
				setStyle.setProperty('--alpq-font-color-linkhover', brand.fontColors.linkHover);
				setStyle.setProperty(' --alpq-font-color-contrast', brand.fontColors.contrast);
				setStyle.setProperty('--alpq-font-color-warning', brand.fontColors.warning);
				setStyle.setProperty('--alpq-font-color-error', brand.fontColors.error);
				setStyle.setProperty('--alpq-font-color-success', brand.fontColors.success);
				setStyle.setProperty('--alpq-borderadius', brand.border.borderadius);

				//Logo
				document.querySelector('.alpq-header-logo').src = brand.logo.url

				var element = document.querySelectorAll('style[data-name="font-changer"]');
				console.log(element)
				if(element.length === 2){
					element.forEach( item => item.parentNode.removeChild(item) )
				}

				//Fonts
				var newStyle = document.createElement('style');
				newStyle.setAttribute('data-name', 'font-changer');

				newStyle.appendChild(document.createTextNode("\
					@font-face {\
						font-family: " + brand.fonts.primaryRegular.fontFamily + ";\
						src: url('" + brand.fonts.primaryRegular.url + "') format('truetype');\
					}\
					\
					@font-face {\
						font-family: " + brand.fonts.primaryBold.fontFamily + ";\
						src: url('" + brand.fonts.primaryBold.url + "') format('truetype');\
					}\
					\
					@font-face {\
						font-family: " + brand.fonts.secondaryRegular.fontFamily + ";\
						src: url('" + brand.fonts.secondaryRegular.url + "') format('truetype');\
					}\
					\
					@font-face {\
						font-family: " + brand.fonts.secondaryBold.fontFamily + ";\
						src: url('" + brand.fonts.secondaryBold.url + "') format('truetype');\
					}\
				"));

				document.head.appendChild(newStyle);

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
}


window.addEventListener('load',function(){
	document.querySelector('.alpq-loader-container').classList.add("alpq-loaded")  
  });


