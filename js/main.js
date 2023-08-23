


let open = document.querySelector('.open');
let close = document.querySelector('.close');

open.addEventListener('click', function () {
  open.classList.toggle('hide');
  close.classList.toggle('hide');
});

close.addEventListener('click', function () {
  open.classList.toggle('hide');
  close.classList.toggle('hide');
});

/*========================================================================*/

let nav_product = document.querySelectorAll('.nav-product');

nav_product.forEach(nav_product1 => {
  let nav_length = parseInt(nav_product1.getAttribute("data-bs-target"));

  for (let i = 0; i < nav_length; i++) {
    let itemNumber = document.createElement('div');
    itemNumber.classList.add('item-number');
    nav_product1.appendChild(itemNumber);
  }

  nav_product1.onclick = () => {
    let nav_length = parseInt(nav_product1.getAttribute("data-bs-target"));
    let grid_style = document.querySelector(".grid-style");
    grid_style.style.gridTemplateColumns = `repeat(${nav_length} , 1fr)`;
    console.log("hello");

    nav_product.forEach(ele => {
      ele.classList.remove('active');
    });
    nav_product1.classList.add('active');

let itemNumbers = nav_product1.querySelectorAll('.item-number'); 

itemNumbers.onclick =(item)=>{
      item.forEach(item => {
      item.classList.add('active');
    })
    }
// itemNumbers.classList.remove('active');
  };

});

/*==============================================================================*/

let basket = document.querySelector('.basket');
let close_cart = document.querySelector('.close-cart');
let cart_container = document.querySelector(".cart");

basket.addEventListener('click', function () {
  cart_container.classList.add('active');
});

close_cart.addEventListener('click', function () {
  cart_container.classList.remove('active');
});

/*==============================================================================*/

let trash = document.querySelectorAll(".trash");
let big_cont = document.querySelectorAll(".big-cont");

trash.forEach((trash1 , i) => {
  trash1.addEventListener('click', function () {
    big_cont[i].remove();
  });
});

/*====================================================================================*/

  const plusButtons = document.querySelectorAll('.plus');
  const minusButtons = document.querySelectorAll('.minus');
  const count_conts = document.querySelectorAll('.count');

  let countElement = 1;

  plusButtons.forEach((btn, i) => {
    btn.onclick = () => {
      if (countElement < parseInt(count_conts[i].closest('.details').querySelector('.available span').textContent)) {
        countElement++;
        console.log(countElement);
        count_conts[i].textContent = countElement;
      }
    };
  });

  minusButtons.forEach((btn, i) => {
    btn.onclick = () => {
      if (countElement > 1) {
        countElement--;
        console.log(countElement);
        count_conts[i].textContent = countElement;
      }
    };
  });
