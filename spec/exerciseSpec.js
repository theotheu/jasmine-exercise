describe("Tezzt", function () {
    it("Test for Hello World!", function () {
        expect(helloWorld()).toEqual("Hello World!");
    });
});

describe("Testing for side effects", function () {
    it("Test for object, attribute 1", function () {
        var retVal = testObj.attribute1;
        expect(retVal).toEqual(1);
    });
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
