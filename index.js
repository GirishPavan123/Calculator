let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click",function(event){
        let clickedButton = event.target.innerHTML;
        if(clickedButton === "="){
            //string = string.replace(/\s+/g, '');
            string = eval(string);
        }
        else if(clickedButton === "AC"){
            string = "";
        }
        else if(clickedButton === "DEL"){
            string = string.slice(0,string.length-1);
        }
        else{
            string+=clickedButton;
        }
        input.value = string;
    });
}); 