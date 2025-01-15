const toggleNavBarBtn=document.getElementById('toggle-sideBar');
let isNavBarOpen=false;
const navBar=document.getElementById('navBarEl');
const overLayEl=document.getElementById('overlay')

async function toggleNavBar(){
    if(!isNavBarOpen){
        navBar.style.right='0';
        overLayEl.style.display='block'
        toggleNavBarBtn.innerHTML=`<img src="/Assets/close-menu.png" alt="open navigation bar icon">`;
        isNavBarOpen=true;
    }else{
        navBar.style.right='-100%';
        overLayEl.style.display='none'
        toggleNavBarBtn.innerHTML=`<img src="/Assets/open-menu.png" alt="open navigation bar icon">`;
        isNavBarOpen=false;
    }
}

toggleNavBarBtn.addEventListener('click',toggleNavBar);

const nav_li_list=document.querySelectorAll('.li-item')
nav_li_list.forEach((a)=>{
    a.addEventListener('click',toggleNavBar)
})

overLayEl.addEventListener('click',toggleNavBar)