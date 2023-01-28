
var resultSpan = document.getElementById("resultOfOperation");
var submitBtn = document.getElementById("submitCalculationBtn");

submitBtn.addEventListener('click', e => {
    var firstInput = document.getElementById("FirstInput").value;
    var secontInput = document.getElementById("SecondInput").value;
    var selectedRadio = document.querySelector('input[name="Operations"]:checked').id;
    console.log(firstInput);
    console.log(secontInput);
    console.log(resultSpan);
    console.log(selectedRadio);
    if(!firstInput || !secontInput){
        alert("insert a number on first and second input thanks!");
    }else{
        switch(selectedRadio){
            case "Sum":resultSpan.innerHTML = parsefirstInput + secontInput;
                break;
            case "Div":resultSpan.innerHTML = firstInput / secontInput;
                break;
            case "Sub":resultSpan.innerHTML = firstInput - secontInput;
                break;
            case "Multi":resultSpan.innerHTML = firstInput * secontInput;
                break; 
        }
    }
})