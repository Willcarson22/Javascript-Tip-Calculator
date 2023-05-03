//clear button
//easy preselect tip amounts
//clean up code/dry
//what i resist/procrastinate is what i should do
//each pay: NaN on ''

function displayResults () {

    var bill = parseFloat(document.getElementById("bill").value);
    var tip = parseFloat(document.getElementById("tip").value);
    var people = document.getElementById("persons").value;
    var tipTotal = (tip/100) * bill;
    var billTotal = bill + tipTotal;

    document.getElementById("tip-percent").innerHTML = tip + "%";


    if (document.getElementById("bill").value == '') {
        document.getElementById("tip-total").innerHTML = "0.00";
        document.getElementById("bill-total").innerHTML = "0.00";
    }
    else {
        document.getElementById("tip-total").innerHTML = tipTotal.toFixed(2);
        document.getElementById("bill-total").innerHTML = billTotal.toFixed(2);
    }
  
    if (people == 1) {

        document.getElementById("quantity").style.display = "none";
        document.getElementById("above-one").style.display = "none";
    }

    else {

        document.getElementById("quantity").style.display = "block";
        document.getElementById("above-one").style.display = "inline";

    }

    if (document.getElementById("yes").checked) {

        document.getElementById("each-pay").innerHTML = (billTotal/people).toFixed(2);
        document.getElementById("separate").style.display = "none";

    }

    else {

        document.getElementById("each-pay").innerHTML = (bill/people).toFixed(2);
        document.getElementById("separate").style.display = "inline";

    }

    
    
}

displayResults()

function clearResults () {
    document.getElementById("bill").value = 0;
    document.getElementById("persons").value = 1;
    document.getElementById("tip").value = 20;
    displayResults();
}


