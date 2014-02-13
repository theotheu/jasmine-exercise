var testObj = {
    attribute1: 1,
    attribute2: "1",
    attribute3: [1, 2, 3],
    attribute4: function () {
        return true;
    }
};

function myBtnClickHandler(val) {
    console.log('myBtnClickHandler is called with val = ', val);
    return true;
}

function helloWorld() {
    return "Hello World!";
}

function sayHi() {
    alert("Hello world!");
}

function sayYes() {
    return confirm("Confirm or cancel.");
}

function whoAreYou() {
    return prompt("Please type (exact): tezzt");
}

if(document.getElementById("myBtn")) {
    document.getElementById("myBtn").addEventListener("click", myBtnClickHandler, false);
}
