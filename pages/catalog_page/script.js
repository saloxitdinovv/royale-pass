import { getData } from "../../modules/http";

let cars_amount = document.querySelector('.cars_amount')

getData('/cars')
    .then(res => {
        let arr = res

        cars_amount.innerHTML = arr.length
    })