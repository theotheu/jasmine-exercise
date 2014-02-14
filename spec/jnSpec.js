describe ("first test suite", function(){
    it ("2 should equal 2", function(){
        expect("2").toBe("2");
    });
    it ("1 should not equal 2", function(){
        expect("1").not.toBe("2");
    });
})

var request = require('request');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("Something", function () {
    it("Response should contain 'Hello and welcome!'", function (done) {
        request("http://localhost/~theotheu/jasmine-exercise/", function (error, response, body) {
            expect(body).toContain("Hello and welcome!");
            done();
        });
    });
})

