var orderBtn;
$(document).ready(() => {
   var femaleBtn = document.getElementById("female-link");
   var container = document.getElementsByClassName("container")
   femaleBtn.addEventListener("click",function(){
       $(container).load("FemaleShop.html")
        orderBtn = document.getElementsByClassName("order")
        for (btn of orderBtn) {
            console.log($(btn))
            $(btn).on("click", ()=> {
                alert("")
            })
          btn.addEventListener("click",function(){
             alert()
              console.log(btn.parentNode)
          })
    }
   });
   
   
    
  
})





