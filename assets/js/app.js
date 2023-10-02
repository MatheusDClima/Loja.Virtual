var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px"; /* "0" significa q vai ser escondida */ 

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
    MenuItens.style.maxHeight = "200px";
    }else{ 
        MenuItens.style.maxHeight = "0px";
    }
}