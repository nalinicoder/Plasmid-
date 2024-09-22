let string = "";
let memoryValue=0; //Memory storage for M+ and M- operations
let buttons = document.querySelectorAll('.button');
//Iterate over the buttons and add event Listeners
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // Handle '=' to evaluate the expression
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        // Handle 'C' to clear the display
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        // Handle M+ (Memory Add)
        else if(e.target.innerHTML == 'M+'){
            if (string !== ""){
                memoryValue += parseFloat(string);
                alert('Added to memory: '+memoryValue);
            }
        }
        // Handle M- (Memory Subtract)
        else if(e.target.innerHTML == 'M-'){
            if(string !==""){
                memoryValue -= parseFloat(string);
                alert('Subtracted from memory: '+memoryValue);
            }
        }
        // Handle other buttons (numbers, operators)
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})