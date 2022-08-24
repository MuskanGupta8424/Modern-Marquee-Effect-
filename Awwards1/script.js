const img=document.querySelector("img");
const cursor=document.querySelector('#cursor');

window.addEventListener("mousemove",function(dets){
    const rotx =58-dets.x/11;
    const roty=Math.abs(rotx);
    img.style.transorm =`rotateX(${rotx}deg) rotateY(${-roty}deg)`
})
img.addEventListener("mouseleave",function(dets){
    setTimeout(function(){
        img.style.transform =`rotateX(0deg) rotateY(0deg)`
    },1000)
})
document.addEventListener("mousemove",function(dets){
cursor.style.left= `${dets.x}px`
cursor.style.top= `${dets.y}px`
})