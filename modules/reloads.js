export function reload(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let card = document.createElement('div')
        let card_image = document.createElement('div')
        let car_img = document.createElement('img')

        let image = item.images[0].url

        car_img.src = image
        card_image.append(car_img)

        let speedometer = document.createElement('div')
        speedometer.classList.add('speedometer')

        let speedometer_img = document.createElement('img')
        speedometer_img.src = '/speedometer.svg'

        let speed = document.createElement('p')
        speed.innerHTML = `${item.speed} км/ч`

        speedometer.append(speedometer_img, speed)

        let carName_info = document.createElement('div')
        carName_info.classList.add('carName_info')

        let car_name = document.createElement('h1')
        car_name.innerHTML = item.model

        let car_type = document.createElement('h3')
        car_type.innerHTML = item.category.title
        car_type.classList.add('cartype')

        carName_info.append(car_name, car_type)

        let car_price = document.createElement('h1')
        car_price.classList.add('car_price')
        let price = item.price / 12
        car_price.innerHTML = `${price.toFixed(0)}$/месяц`

        let card_buttons = document.createElement('div')
        card_buttons.classList.add('card_buttons')

        let rent_btn = document.createElement('button')
        rent_btn.classList.add('rent')
        rent_btn.innerHTML = 'Арендовать'

        let more_btn = document.createElement('button')
        more_btn.classList.add('more')
        more_btn.innerHTML = 'Подробнее'

        card_buttons.append(rent_btn, more_btn)

        card.classList.add('card')
        card_image.classList.add('card_image')


        place.append(card)

        card.append(card_image, speedometer, carName_info, car_price, card_buttons)

        rent_btn.onclick = () => {
            location.assign('/pages/car_page/?id=' + item.id)
        }

    }
}