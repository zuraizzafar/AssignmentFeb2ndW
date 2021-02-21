function question1() {
    var cc = document.getElementById("question1");
    ccNum = cc.value;
    if (ccNum.length == 16) {
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
    if (str.includes("potato")) {
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
    for (let i = 0; i < length; i++) {
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
    else {
        if (salary <= 10000) {
            gross = salary + (salary * (20 + 80) / 100);
        }
        else if (salary <= 20000) {
            gross = salary + (salary * (25 + 90) / 100);
        }
        else if (salary > 20000) {
            gross = salary + (salary * (30 + 95) / 100);
        }
        document.getElementById("question4-answer").innerText = gross;
    }
}
function question5() {
    var input = document.getElementById("question5");
    var units = parseInt(input.value);
    if (units == 0) {
        alert("Units cant be 0!")
    }
    else {
        if (units > 0 && units <= 50) {
            cost = 0.5;
        } else if (units > 50 && units <= 150) {
            cost = 0.75;
        } else if (units > 150 && units <= 250) {
            cost = 1.2;
        } else {
            cost = 1.5;
        }
        var bill = cost * units;
        var netBill = bill + ((bill * 20)/100);
        document.getElementById("question5-answer").innerText = netBill;
    }
}

function question6() {
    var input = document.getElementById("question6");
    var limmit = parseInt(input.value);
    if (limmit == NaN || (limmit >=0 && limmit < 5)) {
        alert("You entered " + limmit + ", which cannot be processed... Default limmit of 1000 is being processed!");
        limmit = 1000;
    }
    var sum = 0;
    for (let i = 1; i < limmit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    document.getElementById("question6-answer").innerText = sum;
}