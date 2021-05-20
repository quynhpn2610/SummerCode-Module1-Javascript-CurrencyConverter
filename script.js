function Convert(event){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    document.getElementById("result").innerHTML = "<h4>Result: " + (amount*from)/to + "</h4>";
    event.preventDefault()
}
