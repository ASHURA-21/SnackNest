import style from './TopBtn.module.css'

export default function TopBtn(){
    let toTop = document.getElementBy('toTop');
toTop.style.display='none';
window.addEventListener('scroll', () =>{
    if(this.scrollY > 500){
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none'
    }
})
toTop.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
return(
     <button className={style.toTop}><i className="fa-solid fa-arrow-up fa-bounce fa-lg" style="color: #0040ff;"></i></button>
)
}