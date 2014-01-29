describe('Artist', function() {
  var artist;

  beforeEach(function() {
    artist = new Artist();
  });

  it('should have a default listened value of false', function() {
    expect(artist.get('listened')).toBeTruthy;
  });

  it('should toggle listened value', function() {
    artist.toggleListened();
    expect(artist.get('listened')).toBeFalsy;
  });
})