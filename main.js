let inp = document.querySelector("input")
let btn = document.querySelector("button")
import axios from 'axios'

let key="7d6e7721715840edbe7134826231311"
let p = document.querySelector('.cel')
let place = document.querySelector(".place")
let cond = document.querySelector(".cond")
let corner = document.querySelector(".corner")
let iphone = document.querySelector(".iphone")

btn.onclick = () =>{
  getData()
    .then(res =>{
      p.innerHTML = `${res.current.temp_c}°` 
      place.innerHTML = `${res.location.name}` 
      cond.innerHTML = `${res.current.condition.text}` 
      corner.src = `${res.current.condition.icon}`
      console.log(res)
      if (+res.current.last_updated.slice(11,13)>=6 && +res.current.last_updated.slice(11,13)<=18){
        iphone.classList.remove("night")
        iphone.classList.add("day")
      }else{
        iphone.classList.remove("day")
        iphone.classList.add("night")
      }
    } )
}


const getData = async () => {
  try {
      const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${inp.value}&aqi=no`)

      return res.data
  } catch (error) {
      alert('что то пошло не так перезагрузите страницу')
  }
}