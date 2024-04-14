import { getData } from "../../modules/http";
import { reload } from "../../modules/reloads";

let cars_amount = document.querySelector('.cars_amount')

let select = document.querySelector('.mark_filter')
let year_select = document.querySelector('.year')
let milage_select = document.querySelector('.milage')

let place = document.querySelector('.cars')

getData('/cars')
    .then(res => {
        let arr = res
        let uniqueYears = new Set();
        let milages = new Set();

        reload(arr, place)

        arr.forEach(element => {
            let name = element.mark
            let option = document.createElement('option')
            option.textContent = name
            select.appendChild(option)
        });
        cars_amount.innerHTML = arr.length

        arr.forEach(element => {
            let year = element.year
            uniqueYears.add(year)
        })
        let years = Array.from(uniqueYears)
        years.forEach(element => {
            let option = document.createElement('option')
            option.textContent = element
            year_select.appendChild(option)
        })

        arr.forEach(element => {
            let mileage = element.mileage
            milages.add(mileage)
        })

        let mileages = Array.from(milages)

        mileages.forEach(element => {
            let option = document.createElement('option')
            option.textContent = element
            milage_select.appendChild(option)
        })
        

    })