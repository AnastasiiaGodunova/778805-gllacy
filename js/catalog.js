var cardsData = [
  {
    imgUrl: 'img/1.jpg',
    text: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    isHit: true
  },
  {
    imgUrl: 'img/2.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    isHit: true
  },
  {
    imgUrl: 'img/3.jpg',
    text: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    isHit: true
  },
  {
    imgUrl: 'img/4.jpg',
    text: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    isHit: true
  },
  {
    imgUrl: 'img/5.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 325
  },
  {
    imgUrl: 'img/6.jpg',
    text: 'Сливочно-черничное с цельными ягодами черники',
    price: 410
  },
  {
    imgUrl: 'img/7.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 375
  },
  {
    imgUrl: 'img/8.jpg',
    text: 'Сливочное с шоколадной стружкой',
    price: 320
  },
  {
    imgUrl: 'img/9.jpg',
    text: 'Сливочно-ванильное с кусочками шоколада',
    price: 440
  },
  {
    imgUrl: 'img/10.jpg',
    text: 'Сливочное с ментоловым сиропом',
    price: 435
  },
  {
    imgUrl: 'img/11.jpg',
    text: 'Сливочное с кусочками черного шоколада',
    price: 350
  },
  {
    imgUrl: 'img/12.jpg',
    text: 'Сливочное с мятным сиропом',
    price: 420
  }
];

var cardList = document.querySelector('.catalog-list');

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var renderCards = function (product) {
  var listItem = makeElement('li', 'catalog-item');

  var picture = makeElement('img', 'catalog-item-image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'catalog-item-price');
  var cost = makeElement('b', 'catalog-item-cost', product.price);
  price.appendChild(cost);
  var kilo = makeElement('span', 'catalog-item-weight', '/кг');
  price.appendChild(kilo);
  listItem.appendChild(price);

  var title = makeElement('h3', 'catalog-item-title', product.text);
  listItem.appendChild(title);

  var button = makeElement('a', 'button', 'Быстрый просмотр');
  button.classList.add('popup');
  listItem.appendChild(button);

  if (product.isHit) {
    listItem.classList.add('catalog-item-hit');
  }

  return listItem;
};

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = renderCards(cardsData[i]);
  cardList.appendChild(cardItem);
}
