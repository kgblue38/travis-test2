describe("[ todo ]", function() {
    describe("#get()", function() {
        it("should 'todo'", function() {
            expect(todo.get()).to.be.equal("todo");
        });
    });
    
    describe("#getInt()", function() {
        it("should 100", function() {
            expect(todo.getInt()).to.be.equal(100);    
        });
    });
});

