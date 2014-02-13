describe("Tezzt", function () {
    it("Test for Hello World!", function () {
        expect(helloWorld()).toEqual("Hello World!");
    });
});

describe("Module, object, attribute, method test", function () {

    it("Test for object, attribute 1", function () {
        var retVal = testObj.attribute1;
        expect(retVal).toEqual(1);
    });
    it("Test for object, attribute 2", function () {
        var retVal = testObj.attribute2;
        expect(retVal).not.toEqual(1);
    });
    it("Test for object, attribute 2", function () {
        var retVal = testObj.attribute2;
        expect(retVal).toEqual("1");
    });
    it("Test for object, length of attribute 3", function () {
        var retVal = testObj.attribute3.length;
        expect(retVal).toEqual(3);
    });
    it("Test for object, result of attribute 4", function () {
        var retVal = testObj.attribute4();
        expect(retVal).toEqual(true);
    });
});


function fn() {
    return 123;
    alert(123);

}

describe("Events (are side effects)", function () {
    var node;

    // create HTML element and add event listener
    beforeEach(function () {
        node = document.createElement("div");
        node.innerHTML = '<input type="button" value="Click me" id="myBtn">';
        document.getElementsByTagName("body")[0].appendChild(node);
        document.getElementById("myBtn").addEventListener("click", myBtnClickHandler, false);
    });

    it("Test that listener is attached", function () {
        var exist = document.getElementById("myBtn").click !== null;
        expect(exist).toEqual(true);
    });

    it("Click on button simulated", function () {
        spyOn(window, "myBtnClickHandler");
        document.getElementById("myBtn").click(window.myBtnClickHandler());
        expect(window.myBtnClickHandler).toHaveBeenCalled();
    });

    // delete HTML element
    afterEach(function () {
        node = document.getElementById("myBtn");
        if (node) {
            node.parentNode.removeChild(node);
        }
    });


});


describe("Testing for side effects", function () {
    it("Test for alert", function () {
        spyOn(window, "alert");
        sayHi();
        expect(window.alert).toHaveBeenCalled();
    });
    it("Test for confirm", function () {
        spyOn(window, "confirm");
        sayYes();
        expect(window.confirm).toHaveBeenCalled();
    });
    it("Test for prompt", function () {
        spyOn(window, "prompt");
        whoAreYou();
        expect(window.prompt).toHaveBeenCalled();
    });
    it("Test for prompt, with input", function () {
        var retVal = whoAreYou();
        expect(retVal).toEqual("tezzt");
    });

});