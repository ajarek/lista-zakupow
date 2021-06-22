import { spozywka } from "./food.js"
import { chemia } from "./chemia.js"
import {owoce} from "./owoce.js"

const listGrup=document.querySelector('.list-group')



//wyświetlanie listy
const displayList=()=>{
    spozywka.forEach(el=>{
        
    const li=document.createElement('li')
    li.setAttribute('id','spozywka')
    li.classList.add('list-group-item')
    li.classList.add('list-group-item-action')
    li.innerHTML=`<img src='${el.image}'>${el.name}<span id="del">X</span>`
    listGrup.appendChild(li)
})

owoce.forEach(elem=>{
        
    const li=document.createElement('li')
    li.setAttribute('id','owoce')
    li.classList.add('list-group-item')
    li.classList.add('list-group-item-action')
    li.innerHTML=`<img src='${elem.image}'>${elem.name}<span id="del">X</span>`
    listGrup.appendChild(li)
})

chemia.forEach(elem=>{
        
    const li=document.createElement('li')
    li.setAttribute('id','chemia')
    li.classList.add('list-group-item')
    li.classList.add('list-group-item-action')
    li.innerHTML=`<img src='${elem.image}'>${elem.name}<span id="del">X</span>`
    listGrup.appendChild(li)
})

}
 displayList()



const delItem=()=>{
const dels=document.querySelectorAll('#del')
dels.forEach(del=>{
    del.addEventListener('click',(e)=>{
        e.target.parentNode.remove()
    })
})
}
delItem()
