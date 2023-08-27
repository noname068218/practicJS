// // ЗАДАЧА 1
// // Створіть карточки товару з масиву використовуючи createElement

// // js/
// export default [
//   {
//     name: "pajero",
//     img: "https://smart-style.com.ua/uploads/mitsubishi-pajero-2011.jpg",
//     price: 950000,
//     description:
//       "Широкий вибір комплектацій дозволяє підібрати автомобіль під ваші потреби та стиль життя. Тип привода, потужність двигуна та кількість місць у салоні — порівняти комплектації та ціни стало ще простіше.",
//   },
//   {
//     name: "jeep",
//     img: "https://ukravto.ua/files/Text/190225_JEEP_NEW_CHEROKEE_9.jpg",
//     price: 1200000,
//     description:
//       "Як і всі моделі Jeep - володіє безпрецедентним поєднанням ходових якостей, комфортності та міського шику. 2,4-літровий бензиновий двигун в поєднанні з шестиступінчастою автоматичною коробкою передач, яка відрізняється плавністю перемикання.",
//   },
//   {
//     name: "toyota",
//     img: "https://molbuk.ua/uploads/posts/2021-06/1623319390_toyota_camry.jpg",
//     price: 999000,
//     description:
//       "Оснащений тихим самозарядним гібридним двигуном об’ємом 2,5 літра, автомобіль забезпечує значний крутний момент на низьких оборотах і феноменальну потужність на високих, а також краще реагування на дії водія та легше прискорення.",
//   },
//   {
//     name: "range rover",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UDUbCd6nzB5lO33DgkvyXJD4OOoKEsCemg&usqp=CAU",
//     price: 5328000,
//     description:
//       "Редуктивний характер дизайну не містить зайвих деталей, що створює форму, яка демонструє захоплюючий дух сучасності. Це найбажаніший Range Rover серед усіх існуючих.",
//   },
// ];

// import cars from "./date/cars.js";

// const ul = document.querySelector(".js-goods");
// function elementsCars({ name, img, price, description }) {
//   const liCar = document.createElement("li");
//   const heroTitelEl = document.createElement("h1");
//   const imageEl = document.createElement("img");
//   const priceEl = document.createElement("p");
//   const text = document.createElement("p");

//   heroTitelEl.textContent = name;
//   imageEl.textContent = img;
//   imageEl.width = 300;
//   priceEl.textContent = price;
//   text.textContent = description;

//   liCar.append(imageEl, heroTitelEl, priceEl, text);
//   return liCar;
// }

// const elements = cars.map(elementsCars);
// ul.append(...elements);
//==================================\

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    <button class="btn">Calculate</button>

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const formEl = document.querySelector(".form");
// const inputPrice = document.querySelector("#price");
// const quantityPrice = document.querySelector("#quantity");
// const totalPrice = document.querySelector(".text-right");
// const spanText = document.querySelector(".amount");
// const div = document.querySelector(".container");

// formEl.addEventListener("submit", calc);
// function calc(e) {
//   e.preventDefault();
//   spanText.textContent = quantityPrice.value;
//   const canculator = inputPrice.value * quantityPrice.value;
//   console.log(canculator);
//   totalPrice.textContent = canculator;
// }
// formEl.addEventListener("input", newCalc);
// function newCalc(end) {
//   spanText.textContent = quantityPrice.value;
// }
// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };
// div.style.backgroundColor = randomRgbColor();

// const instruments = [
//   {
//     id: 1,
//     img: 'https://content.rozetka.com.ua/goods/images/big/13664457.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];

// const markup = document.querySelector('.js-list');

// function createMarkup() {
//   const result = instruments
//     .map(({ id, img, name, price }) => {
//       return `    <li data-id = ${id}>
//       <img src="${img}" alt="${name}">
//       <h2>${name}</h2>
//       <p>${price}</p>
//       <button class = "btn">Купити</button>
//     </li>`;
//     })
//     .join('');
//   console.log(result);
//   markup.insertAdjacentHTML('beforeend', result);
// }

// createMarkup();

// // 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// function oneClick(event) {
//   if (!event.target.classList.contains('btn')) {
//     return;
//   }
//   const btnClick = event.target.closest('li');
//   console.log(btnClick);
//   const resultClick = btnClick.dataset.id;
//   console.log(resultClick);

//   const resultBtn = instruments.find(
//     instrument => instrument.id == resultClick
//   );
//   console.log(resultBtn);
// }
// markup.addEventListener('click', oneClick);

// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// // є елемент масиву , який незнає нікого
// // якщо не одна така людина , то вертаємо not found
// // якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
// ];

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];
