


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

    nav_product.forEach(ele => {
      ele.classList.remove('active');
    });
    nav_product1.classList.add('active');
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

/*=======================================================================================*/
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const countConts = document.querySelectorAll('.count');
const availableSpans = document.querySelectorAll('.available span');
const priceElements = document.querySelectorAll('.price');

plusButtons.forEach((plusButton, i) => {
  const minusButton = minusButtons[i];
  const countCont = countConts[i];
  const availableSpan = availableSpans[i];
  const priceElement = priceElements[i];
  let countElement = 1;
  const flowerPrice = parseInt(priceElement.getAttribute('data-price'));

  plusButton.onclick = () => {
    if (countElement < parseInt(availableSpan.textContent)) {
      countElement++;
      countCont.textContent = countElement;
      const sum = flowerPrice * countElement;
      priceElement.textContent = sum + "$";
    }
  };

  minusButton.onclick = () => {
    if (countElement > 1) {
      countElement--;
      countCont.textContent = countElement;
      const sum = flowerPrice * countElement;
      priceElement.textContent = sum + "$";
    }
  };
});

/*==========================================================================================*/




let quick_view = document.querySelector('.quick-view');
let view = document.querySelectorAll('.view');
let close_view = document.querySelector('.close-view');

view.forEach((ele)=>{
  ele.addEventListener('click', ()=>{
    quick_view.classList.remove('close');
    quick_view.classList.add('open');
  })
})

close_view.addEventListener('click', ()=>{
  quick_view.classList.remove('open');
  quick_view.classList.add('close');
});






















// const plusButtons = document.querySelectorAll('.plus');
// const minusButtons = document.querySelectorAll('.minus');
// const count_conts = document.querySelectorAll('.count');

// let countElement = 1;

// plusButtons.forEach((btn, i) => {
//   btn.onclick = () => {
//     if (countElement < parseInt(count_conts[i].closest('.details').querySelector('.available span').textContent)) {
//       countElement++;
//       console.log(countElement);
//       count_conts[i].textContent = countElement;
//       let price = document.querySelectorAll('.price');

// price.forEach((flower)=>{
//   let flowerPrice = parseInt(flower.getAttribute('data-price'));
//   // console.log(flowerPrice);

//   let sum = flowerPrice * countElement ;

//   console.log(sum);
//   flower.textContent = sum;
  
// })
//     }
//   };
// });

// minusButtons.forEach((btn, i) => {
//   btn.onclick = () => {
//     if (countElement > 1) {
//       countElement--;
//       console.log(countElement);
//       count_conts[i].textContent = countElement;
//       let price = document.querySelectorAll('.price');

// price.forEach((flower)=>{
//   let flowerPrice = parseInt(flower.getAttribute('data-price'));
//   // console.log(flowerPrice);

//   let sum = flowerPrice * countElement ;

//   console.log(sum);
//   flower.textContent = sum;
  
// })
//     }
//   };
// });




  // function fibonacci(n){
  //   const fib = [0 , 1]
  //   for(let i = 2; i < n; i++){
  //     fib[i] = fib[i - 1] + fib[i - 2];
  //   }
  //   return fib
  // }
  // console.log(fibonacci(2));
  // console.log(fibonacci(3));
  // console.log(fibonacci(7));
  // console.log(fibonacci(10));