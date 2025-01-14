//Store button element for toggling the navBar
/*
    Make sure that the functions only work on the currently opened window
*/
const toggleNavBarBtn= document.getElementById('toggle-sideBar');
const naviBar=document.getElementById('navBarEl')
let isNavBarOpen=false
const overLayEl=document.getElementById('overlay')
const toggleNaviBar=function(){
  if(!isNavBarOpen){
      naviBar.style.right='0'
      overLayEl.style.display='block'
      toggleNavBarBtn.innerHTML=`<img src="Assets/close-menu.png" alt="open navigation bar icon">`
      isNavBarOpen=true
  }else{
    naviBar.style.right='-100%'
    overLayEl.style.display='none'
    toggleNavBarBtn.innerHTML=`<img src="Assets/open-menu.png" alt="open navigation bar icon">`
    isNavBarOpen=false
  }
}

toggleNavBarBtn.addEventListener('click',toggleNaviBar)

const navElsList=document.querySelectorAll('.li-item')
navElsList.forEach((li)=>{
  li.addEventListener('click',toggleNaviBar)
})

overLayEl.addEventListener('click',toggleNaviBar)

const imageEl=document.getElementById('image-el')
imageEl.innerHTML=` <img src="Assets/image.jpg" alt="Photo of Lindani Ndwandwe" width="140" height="140">`
