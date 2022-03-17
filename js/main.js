
let cartBtn = document.querySelector('.page-card__btn-add'); // Кнопка для активации карточки
let staticBtn = document.querySelector('.page-card__col-add'); // Окно с кнопкой Add
let cart = document.querySelector('.page-card__col-add-card'); // Новая карточкa

function go() {
    cartBtn.addEventListener("click", function () {

        cart.style.display = "block"

    });
}
go()

