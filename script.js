var buttons= document.getElementsByClassName("button");
var display = document.getElementById("screen");
var ops = document.getElementsByClassName("redColor")

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(Nvalue)
{
    return Nvalue == "+" || Nvalue == "-" || Nvalue == "*" || Nvalue == "/";
}


for(var i=0; i<buttons.length; i++)
{
     buttons[i].addEventListener('click', function()
     {
        var Nvalue = this.getAttribute('value');
        var text = display.textContent.trim();

        if(isOperator(Nvalue))
        {
            operator = Nvalue
            operand1 = parseFloat(text);
            display.innerText = "";
        }

        else if (Nvalue == "ac")
        {
            display.textContent= " ";
            operand1 = null;
            operand2 = null;
            operator= null;
        }

        else if (Nvalue == "neg")
        {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1; 
        }

        else if (Nvalue == ".")
        {
            if(text.length && !text.includes('.'))
            {
                display.textContent = text + '.';
            }
            else
            {
                alert("decimal is already there");
            }
        }

        else if (Nvalue == 'per')
        {
            operand1 = parseFloat(text);
            operand1 = operand1/100;
            display.textContent = operand1;
        }

        else if(Nvalue == "=")
        {
            operand2 = parseFloat(display.innerText);
            var result  = eval(operand1 + "" + operator + "" + operand2);
            if (result)
            {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }

        else
        {
            display.innerText += Nvalue;
        }
     });
}
