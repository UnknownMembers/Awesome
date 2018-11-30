//     Facebook plugin
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {

    var orderBtns = document.getElementsByClassName("view");

    for (var i = 0; i < orderBtns.length; i++) {
        orderBtns[i].addEventListener('click', openShoe, false);

    }
});

function openShoe(event) {

    var viewButton = event.target;
    var divOrder = viewButton.parentNode;
    // sibling can be used here 

    var singleElement = divOrder.parentNode;
    var childrenArray = singleElement.children;
    for (var i = 0; i < childrenArray.length; i++) {
        //Vzimame takushtiq element
       var currentElement = childrenArray[i];
//proverka dali e kartinka, zashtoto tam ne ni trqbva innerhtml, ami src-to (linka)
        if (currentElement.tagName === "IMG") {
           var imgSrc = currentElement.src;
           
       }
        //ako e paragraph, trqbva ni cenata vytre
        else if (currentElement.tagName === "P") {
           var price = currentElement.innerHTML;
//         console.log(currentElement);
//console.log(currentElement.innerHtml);  
        }
        else if (currentElement.tagName === "H3")
           var title = currentElement.innerHTML;
        else
            continue;
         console.log(currentElement.tagName);
    }
  console.table([imgSrc, price, title]);
    
}

