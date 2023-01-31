var expect = chai.expect;

describe ('MyFunctions', function() {
    describe('#doSomething', function(){ //not sure, but the #doSomething seems to refer to the function from my main MochaChai practice
        it('should concatenate the two parameters', function(){
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });
        it('should throw an error if first parameter is not a string', function(){
            expect(function(){
                doSomething(5, 5);
            }).to.throw(Error);
        });
    });
});

//Happy Path Unit Test above...