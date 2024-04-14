// import { getData } from "../../modules/http"
// import { reload } from "../../modules/reloads"

// let id = location.href.split('=')[1]

// let car_name = document.querySelectorAll('.car_name')
// let car_type = document.querySelectorAll('.type')
// let car_speed = document.querySelector('.car_speed')
// let car_description = document.querySelector('.car_description')
// let price_credit = document.querySelector('.price_credit')
// let place = document.querySelector('.place')
// let show = document.querySelector('.show')



// // getData('/cars/' + id)
// //     .then(res => {
// //         let car = res

// //         car_name.forEach(name => name.innerHTML = car.model)
// //         car_type.forEach(name => name.innerHTML = car.category.title)
// //         car_speed.innerHTML = car.speed
// //         car_description.innerHTML = car.description

// //         category = car.category.title

// //         let price = car.price / 12

// //         price_credit.innerHTML = `${price.toFixed(0)}$/месяц`

// //         // console.log(car);


// //         createSlider(car);

// //         getData('/cars')
// //             .then(data => {
// //                 let arr = data
// //                 let filteredCars = arr.filter(carr => carr.category.title === car.category.title);

// //                 reload(filteredCars.slice(0, 4), place)

// //             })
// //     })


// let allItemsDisplayed = false;
// let filteredCars = [];

// getData('/cars/' + id)
//     .then(res => {
//         let car = res;

//         let category = car.category.title   


//         car_name.forEach(name => name.innerHTML = car.model);
//         car_type.forEach(name => name.innerHTML = car.category.title);
//         car_speed.innerHTML = car.speed;
//         car_description.innerHTML = car.description;

//         let price = car.price / 12;
//         price_credit.innerHTML = `${price.toFixed(0)}$/месяц`;

//         createSlider(car);

//         return getData('/cars'); // После получения данных о машине, получаем список всех машин
//     })
//     .then(data => {
//         filteredCars = data.filter(carr => carr.category.title === category);
//         reload(filteredCars.slice(0, 4), place);
//     });

// function handleShowAll() {
//     if (allItemsDisplayed) {
//         reload(filteredCars.slice(0, 4), place); // Показать первые 4 автомобиля
//         show.innerHTML = 'Показать все машины';
//         allItemsDisplayed = false;
//     } else {
//         reload(filteredCars, place); // Показать все автомобили
//         show.innerHTML = 'Скрыть остальные машины';
//         allItemsDisplayed = true;
//     }
// }

// show.onclick = handleShowAll;




import { getData } from "../../modules/http"
import { reload } from "../../modules/reloads"

let id = location.href.split('=')[1]

let car_name = document.querySelectorAll('.car_name')
let car_type = document.querySelectorAll('.type')
let car_speed = document.querySelector('.car_speed')
let car_description = document.querySelector('.car_description')
let price_credit = document.querySelector('.price_credit')
let place = document.querySelector('.place')
let show = document.querySelector('.show')

let allItemsDisplayed = false;
let filteredCars = [];

getData('/cars/' + id)
    .then(res => {
        let car = res;
        let category = car.category.title;  // Здесь мы определяем переменную 'category'

        car_name.forEach(name => name.innerHTML = car.model);
        car_type.forEach(name => name.innerHTML = category);
        car_speed.innerHTML = car.speed;
        car_description.innerHTML = car.description;

        let price = car.price / 12;
        price_credit.innerHTML = `${price.toFixed(0)}$/месяц`;

        createSlider(car);

        return getData('/cars')
            .then(data => {
                let arr = data
                let filtered = arr.filter(item => item.category.title === category)
                console.log(filtered);

                reload(filtered.slice(0, 4), place)

            })
    })




function createSlider(car) {
    const slidesContainer = document.querySelector('.slides-container');
    slidesContainer.innerHTML = '';

    car.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.url;
        img.style.minWidth = "100%";
        slidesContainer.appendChild(img);
        img.classList.add('slide_img')
    });

    let currentIndex = 0;

    function updateSlide(position) {
        const slideWidth = slidesContainer.clientWidth;
        slidesContainer.style.transition = 'transform 0.5s ease';
        slidesContainer.style.transform = `translateX(-${position * slideWidth}px)`;
    }

    function goToNext() {
        if (currentIndex < car.images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlide(currentIndex);
    }

    function goToPrevious() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = car.images.length - 1;
        }
        updateSlide(currentIndex);
    }

    document.querySelector('.prev').addEventListener('click', goToPrevious);
    document.querySelector('.next').addEventListener('click', goToNext);

    updateSlide(currentIndex);
}
