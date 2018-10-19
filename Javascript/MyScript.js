$(document).ready(() => {
   var femaleBtn = document.getElementById("female-link");
   var maleBtn = document.getElementById("male-link");
   var womenBagsBtn = document.getElementById("womensbags-link");
   var container = document.getElementsByClassName("container")
   femaleBtn.addEventListener("click",function(){
       $(container).load("FemaleShop.html")    
   });  
   
   maleBtn.addEventListener("click",function(){
         $(container).load("MenShoes.html")
   });
   
   womenBagsBtn.addEventListener("click",function(){
       $(container).load("WomensBags.html")
   })
   
})




/*var orderBtn;
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
   
   
    
  
}) */






