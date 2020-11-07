/* Scripts */

/* CSS product card */
function cardMedia() {
  const card = document.querySelectorAll('.main__products--card');
  const cardImage = document.querySelectorAll('.main__products--img');
  const cardVisible = [];

  for (let i = 0; i < card.length; i++) {
    if (!card[i].classList.contains('hide')) {
      cardVisible.push(card[i]);
    }
  }

  for (let i = 0; i < cardVisible.length; i++) {
    if (innerWidth > 1579) {
      if (i % 5 === 0) {
        cardVisible[i].style.width = 'calc(25% - 15px)';
        cardVisible[i].style.margin = '0 30px 0 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else if (i % 5 === 1) {
        cardVisible[i].style.width = 'calc(75% - 15px)';
        cardVisible[i].style.flexDirection = 'row';
        cardVisible[i].style.justifyContent = 'flex-start';
        cardVisible[i].style.alignItems = 'center';
        cardVisible[i].style.paddingRight = '50px';
        cardVisible[i].style.margin = '0';
        cardImage[i].style.margin = '15px auto 0';
      } else if (i % 5 === 2) {
        cardVisible[i].style.width = 'calc(25% - 15px)';
        cardVisible[i].style.margin = '30px 30px 30px 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else if (i % 5 === 3) {
        cardVisible[i].style.width = 'calc(50% - 30px)';
        cardVisible[i].style.margin = '30px 30px 30px 0';
        cardVisible[i].style.flexDirection = 'row';
        cardVisible[i].style.alignItems = 'center';
        cardVisible[i].style.justifyContent = 'flex-start';
        cardImage[i].style.margin = '15px 50px 0';
      } else if (i % 5 === 4) {
        cardVisible[i].style.width = 'calc(25% - 15px)';
        cardVisible[i].style.margin = '30px 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      }
    } else if (innerWidth > 719) {
      if (i % cardVisible.length === 0) {
        cardVisible[i].style.width = 'calc(50% - 7px)';
        cardVisible[i].style.margin = '0 15px 0 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
        cardImage[i].style.margin = '10px auto 0';
      } else if (i % cardVisible.length === 1) {
        cardVisible[i].style.width = 'calc(50% - 8px)';
        cardVisible[i].style.marginTop = '0';
        cardVisible[i].style.marginRight = '0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else if (i % cardVisible.length === 2) {
        cardVisible[i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[i].style.margin = '15px 15px 0 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else if (i % cardVisible.length === 3) {
        cardVisible[i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[i].style.margin = '15px 15px 0 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else if (i % cardVisible.length === 4) {
        cardVisible[i].style.width = 'calc(33.3333% - 10px)';
        cardVisible[i].style.margin = '15px 0 0 0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      }
    } else if (innerWidth > 240) {
      if (i % cardVisible.length !== 0) {
        cardVisible[i].style.width = '100%';
        cardVisible[i].style.marginTop = '20px';
        cardVisible[i].style.marginRight = '0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      } else {
        cardVisible[i].style.width = '100%';
        cardVisible[i].style.marginTop = '0';
        cardVisible[i].style.marginRight = '0';
        cardVisible[i].style.flexDirection = 'column';
        cardVisible[i].style.justifyContent = 'flex-start';
      }
    }
  }
}
/* Control from keyboard */

function keyboard() {
  const buttonsSite = document.querySelectorAll('.buttons');

  const loop = function loop(i) {
    buttonsSite[i].addEventListener('keyup', (event) => {
      buttonsSite[i].style.border = '2px solid black';

      if (event.which === 13) {
        if (event.target.tagName === 'LABEL') {
          buttonsSite[i].click();
        } else if (event.target.tagName === 'A') {
          buttonsSite[i].click();
        } else {
          buttonsSite[i].onclick();
        }
      }
    });
    buttonsSite[i].addEventListener('keydown', () => {
      buttonsSite[i].style.border = 'none';
    });
  };

  for (let i = 0; i < buttonsSite.length; i++) {
    loop(i);
  }
}
/* When we click on the button, go to the categories already with the button pressed */

function getParams(url) {
  const queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  const queryFilter = queryString.split('=')[1];
  const menu = Array.from(document.querySelectorAll('.right-menu__nav'));

  window.onload = () => {
    for (let i = 0; i < menu.length; i++) {
      const category = menu[i].dataset.cat;

      if (queryFilter === undefined) {
        break;
      }

      if (queryFilter === category) {
        menu[i].click();
      }
    }
  };
}
/* Right menu */

function clickHandler(event) {
  const menuItems = document.querySelectorAll('.right-menu__item');
  const card = document.querySelectorAll('.main__products--card');
  if (event.target.tagName !== 'A') return false;

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }

  event.target.parentNode.classList.add('active');
  const buttonCat = event.target.dataset.cat;

  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('hide');

    if (!card[i].classList.contains(buttonCat) && buttonCat !== 'all') {
      card[i].classList.add('hide');
    }
  }
  cardMedia();
}

function rightMenu() {
  const menuOpen = document.querySelector('.right-menu');
  menuOpen.addEventListener('click', clickHandler);
}
/* up & down */

function NumberDown() {
  const down = document.querySelector('.product__right--down');
  const input = document.querySelector('input');
  input.value--;

  if (input.value === '0') {
    input.value = '1';
  }

  if (input.value <= '1') {
    down.removeEventListener('click', NumberDown);
  }
}

function NumberUp() {
  const input = document.querySelector('input');
  const down = document.querySelector('.product__right--down');
  input.value++;
  down.addEventListener('click', NumberDown);
}

function UpDown() {
  const input = document.querySelector('input');
  const up = document.querySelector('.product__right--up');
  const down = document.querySelector('.product__right--down');

  if (!up || !down || !input) {
    return;
  }
  up.addEventListener('click', NumberUp);
}
/* Responsive text in button 'add to card' */

function buttonMedia() {
  const buttonText = document.querySelector('.product__right--button');

  if (innerWidth < 279) {
    buttonText.innerHTML = 'add';
    buttonText.style.padding = '4px 5px';
    buttonText.style.left = '30px';
  }
}

/* Constructor */

function Olios() {
  const container = document.querySelector('.container');
  const slider = document.querySelector('.slider');
  /* Mobile devices */

  /* Parametrs */

  if (window.orientation === 90) {
    container.style.height = 'calc(100vh - 17vh)';

    if (slider) {
      slider.style.height = 'calc(100vh - 17vh)';
    }
  } else {
    container.style.height = 'calc(100vh - 10vh)';

    if (slider) {
      slider.style.height = 'calc(100vh - 10vh)';
    }
  }
  /* Parametrs on resize */

  function orientation() {
    if (window.orientation === 90) {
      container.style.height = 'calc(100vh - 17vh)';

      if (slider) {
        slider.style.height = 'calc(100vh - 17vh)';
      }
    } else {
      container.style.height = 'calc(100vh - 10vh)';

      if (slider) {
        slider.style.height = 'calc(100vh - 10vh)';
      }
    }
  }

  window.addEventListener('orientationchange', orientation);
  window.addEventListener('resize', cardMedia);
  /* Functions */

  getParams();
  rightMenu();
  cardMedia();
  buttonMedia();
  UpDown();
  keyboard();
  /* Mobile devices */

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    container.style.height = '100vh';

    if (slider) {
      slider.style.height = '100vh';
    }
  }
}

Olios();
