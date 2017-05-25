describe('The language function', function() {

    it("should return Hello Ayabulela when english is selected", function() {
        assert.equal(languages('Ayabulela', 'english'), "Hello, Ayabulela");
    });

    it("should return Molo Ayabulela when xhosa is selected", function() {
        assert.equal(languages('Ayabulela', 'xhosa'), 'Molo, Ayabulela');
    });
    it ("should return Hallo davids when afrikaans is selected",  function() {
        assert.equal(languages('davids', 'afrikaans'), 'Hallo, davids');
    });
});
