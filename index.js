const sidebarToggle=document.querySelector(".sidebar-toggle");
const closeBnt=document.querySelector(".close-bnt");
const sidebar=document.querySelector(".sidebar");

sidebarToggle.addEventListener("click",function(){
    if(sidebar.classList.contains("shrow-sideba")){
        sidebar.classList.remove("shrow-sideba");
    }else{
        sidebar.classList.add("shrow-sideba");
    }
});

closeBnt.addEventListener("click",function(){
    sidebar.classList.remove("shrow-sideba");
})