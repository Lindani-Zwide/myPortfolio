//Responsiveness for a navigation bar
const toggleNavBarBtn=document.getElementById('toggle-sideBar');
let isNavBarOpen=false;
const navBar=document.getElementById('navBarEl');
const overLayEl=document.getElementById('overlay')

async function toggleNavBar(){
 
    if(!isNavBarOpen){
        toggleNavBarBtn.style.fontSize="2.5rem"
        navBar.style.right='0';
        overLayEl.style.display='block'
        toggleNavBarBtn.innerHTML=`<i class="fa-solid fa-close" id="menu-icon"></i>`;
        isNavBarOpen=true;
    }else{
        toggleNavBarBtn.style.fontSize="2.3rem"
        navBar.style.right='-100%';
        overLayEl.style.display='none'
        toggleNavBarBtn.innerHTML=`<i class="fa-solid fa-bars" id="menu-icon"></i>`;
        isNavBarOpen=false;
    }
}

toggleNavBarBtn.addEventListener('click',toggleNavBar);

const nav_li_list=document.querySelectorAll('.li-item')
nav_li_list.forEach((a)=>{
    a.addEventListener('click',toggleNavBar)
})

overLayEl.addEventListener('click',toggleNavBar)

//styles and contents for the footer
const footerEl=document.getElementById('footer')
const date=new Date()
const year=date.getFullYear()
footerEl.innerHTML=`
                <p id="copyRight">
                   © ${year} Lindani Mthembu
                </p>
`
const cpRight= document.getElementById('copyRight')
const cpRightStyle=cpRight.style
cpRightStyle.color='#e5e5ed'
cpRightStyle.opacity='0.7'
cpRightStyle.fontSize='0.7rem'

//Responsiveness of the projects section for the horizontal scroll
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlideIndex = 0;
updateSlide();
prevButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlide();
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? 'flex' : 'none';
  });
}
