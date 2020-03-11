const mess = document.querySelector('.mess-with-me')

mess.style.fontSize ='3em'



mess.style.backgroundColor='green'

const hideMe= document.querySelector('#hide-me')

hideMe.hidden= true

const editBluePowerRangerZoid =document.querySelector('#triceratops')

editBluePowerRangerZoid.style.width=('324px')

const addborder =function(){

editBluePowerRangerZoid.style.border='5px solid red'
} 

editBluePowerRangerZoid.addEventListener('click', addborder)

const editRowOfDinos=document.querySelector('#row')

const changeRowBackgroundColor=function(){

    editRowOfDinos.style.backgroundColor='purple'
}
editRowOfDinos.addEventListener('click',changeRowBackgroundColor)

const editFeather=document.querySelector('#feathers')

const changeTransparanceyFeathers=function(){
    editFeather.style.opacity='0.5'

}

editFeather.addEventListener('click',changeTransparanceyFeathers)

const editDisneyPic =document.querySelector('#biggify')

const growDisneyPic=function(){

   editDisneyPic.style.width=('200px')

}

editDisneyPic.addEventListener('mouseover',growDisneyPic)