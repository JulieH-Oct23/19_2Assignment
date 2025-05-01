
// const person = {
//     fullName: function () {
//         return this.first + " " + this.last;
//     }
// }

// const person1 = {
//     first: 'Larry',
//     last: 'Moody'
// }
// const person2 = {
//     first: 'Harry',
//     last: 'Hart'
// }

// const person3 = {
//     first: 'Kate',
//     last: 'Miller not Garrison'
// }

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));
// console.log(person.fullName.call(person3));

// const drink = {
//     quench: function () {
//         return this.name + " should be served " + this.temp;
//     }
// }

// const drink1 = {
//     name: 'Cherry Coke Zero',
//     type: 'Soda',
//     temp: 'Cold'
// }

// const drink2 = {
//     name: 'Diet Coke',
//     type: 'Soda',
//     temp: 'Cold'
// }

// const drink3 = {
//     name: 'Water',
//     type: 'Water',
//     temp: 'Hot or Cold'
// }

// console.log(drink.quench.call(drink1));
// console.log(drink.quench.call(drink2));
// console.log(drink.quench.call(drink3));

// const vehicle = {
//     drive: function() {
//         return this.type + " is driving" + this.speed;
//     }
// }

// const vehicle1 = {
//     type: 'Automobile',
//     speed: 0
// }

// const vehicle2 = {
//     type: 'Human-powered',
//     speed: 0
// }

// const vehicle3 = {
//     type: 'Boat',
//     speed: 0
// // }

// console.log(vehicle.drive.call(vehicle1));
// console.log(vehicle.drive.call(vehicle2));
// console.log(vehicle.drive.call(vehicle3));

// const bookstore = {
//     books: ['Ulysses', 'The Great Gatsby'],
//     removeBook(title) {
//         let newList = this.books.filter((book) => book != title);
//         this.books = newList;
//         this.displayBookstore();
//     },
//     displayBookstore () {
//         const renderTarget = document.getElementById('bookstore');
//         const bookList = this.books.map((book) => `<p>${book}</p>`);    
//         renderTarget.innerHTML = bookList.join( ' ' );

//     shoppingCart.displayCart(this.removeBook.bind(this));
//     },
// };


// const shoppingCart = {
//     itemsInCart: ['The Great Gatstby'],
//     handleClick(removeBook) {
//         removeBook(this.itemsInCart);
//     },
//     displayCart(clickHandler) {
//         const renderTarget = document.getElementById('cart');
//         const itemsInCart = this.itemsInCart.map(item=> `<p>${item}</p>`)    
//         const checkoutButton = "<button id='checkout'> Check out</button>";

//     renderTarget.innerHTML = itemsInCart.join(' ') + checkoutButton;
//         document
//             .getElementById('checkout')
//             .addEventListener('click', () => this.handleClick(clickHandler));
//     },
// };


