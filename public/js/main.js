const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const cityname = document.getElementById('city_name')
const temp_real_val = document.getElementById("temp_real_val")
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector('.middle_layer')
const day = document.getElementById('day')
const today_date = document.getElementById('today_date')

let date = new Date().toDateString().slice(0,3)

const getInfo =async (event) =>{
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal === ""){
        cityname.innerHTML = `Plz write the name before search`
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9f26a96f509851b57030cccff50a34cc&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            cityname.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerHTML = arrData[0].main.temp
            temp_status.innerHTML = arrData[0].weather[0].main
            const tempMood = arrData[0].weather[0].main
            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun sa' style='color: #eccc68;'></i>"
            } else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud sa' style='color: #f1f2f6;'></i>"
            } else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain sa' style='color: #a4b0be;'></i>"
            } else if(tempMood == "Haze"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun-haze sa' style='color: #f1f2f6;'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fa-solid fa-clouds-sun sa' style='color: #f1f2f6;'></i>"
            }

            datahide.classList.remove('data_hide')

        }catch{
            cityname.innerHTML = `Plz enter the city name properly`
            datahide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click', getInfo)


