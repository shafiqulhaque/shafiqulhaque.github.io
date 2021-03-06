function tester() {
    //E-1
    describe("filter", function () {
        it("removes bad words from a string", function () {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'))
        })
    })

    //E-2
    describe("bubbleSort", function () {
        it("Sorts an array in ascending order", function () {
            expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
        })
    })

    //E-3
    let T = new Teacher();
    T.initialize("Thorfinn", 16);
    T.teach("War studies");

    describe("teach", function () {
        it("Sets what a person teaches and returns the same thing", function () {
            assert.equal("Thorfinn is now teaching War studies", T.teach("War studies"));
        })
    });

    mocha.run();

}

tester();