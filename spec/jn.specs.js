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
    it("should respond with hello world", function (done) {
        request("http://localhost:3000/hello", function (error, response, body) {
            expect(body).toEqual("hello world");
            done();
        });
    });
})

