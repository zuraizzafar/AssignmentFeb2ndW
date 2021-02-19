function question1() {
    var cc = document.getElementById("question1");
    ccNum = cc.value;
    if (ccNum.length==16) {
        lastDigits = ccNum.substring(12);
        encCC = "**** **** **** " + lastDigits;
        document.getElementById("question1-answer").innerText = encCC;
    }
    else 
        alert("Enter Credit Card in supported format! (16 Digits)");
}