// 1 //
// function filter(event) {
//   const inputElement = event.target;
//   const inputValue = inputElement.value;
//   const filteredValue = inputValue.replace(/\d/g, "");
//   if (filteredValue !== inputValue) {
//     inputElement.value = filteredValue;
//   }
// }


// 3 //
// var books = document.getElementsByClassName("book");
// var previousBook = null;
// for (var i = 0; i < books.length; i++) {
//   books[i].addEventListener("click", selectBook);
// }
// function selectBook(event) {
//   var currentBook = event.target;
  
//   if (previousBook !== null) {
//     previousBook.classList.remove("selected");
//   }
//   currentBook.classList.add("selected");
//   previousBook = currentBook;
// }

// 4 //
// var tooltipBtns = document.getElementsByClassName('tooltip-btn');
// for (var i = 0; i < tooltipBtns.length; i++) {
//     tooltipBtns[i].addEventListener('mouseover', function() {
//         var tooltip = this.nextElementSibling;
//         var rect = this.getBoundingClientRect();
//         var topSpace = rect.top - tooltip.offsetHeight - 10;
//         var bottomSpace = window.innerHeight - rect.bottom - tooltip.offsetHeight - 10;

//         tooltip.classList.remove('bottom');

//         if (topSpace > bottomSpace || topSpace < 0) {
//             tooltip.classList.add('bottom');
//         }
//     });
// }