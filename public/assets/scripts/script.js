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
function question2() {
    var input = document.getElementById("question2");
    str = input.value;
    var i = 0;
    if(str.includes("potato")) {
        //Sir, I have used regular expressions in here.
        potatoArray = str.match(/potato/g);
        i = potatoArray.length;
    }
    else {
        alert("String doesnt have potatoes in it...");
    }
    document.getElementById("question2-answer").innerText = i;
}
function question3() {
    var input = document.getElementById("question3");
    var str = input.value;
    var length = str.length;
    let answer = "";
    for (let i = 0; i < length; i++){
        answer += str[i] + str[i];
    }
    document.getElementById("question3-answer").innerText = answer;
}
function question4() {
    var input = document.getElementById("question4");
    var salary = parseInt(input.value);
    var gross = 0;
    if (salary == "") {
        alert("Enter Salary!");
    }
    if (salary <= 10000) {
        gross = salary + (salary * (20 + 80)/100);
    }
    else if (salary <= 20000) {
        gross = salary + (salary * (25 + 90)/100);
    }
    else if (salary > 20000) {
        gross = salary + (salary * (30 + 95)/100);
    }
    document.getElementById("question4-answer").innerText = gross;
}