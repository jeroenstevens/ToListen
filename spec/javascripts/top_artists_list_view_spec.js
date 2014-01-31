describe('TopArtistListView', function() {
  var view;

  beforeEach(function() {
    view = new TopArtistListView();
  });

  it('should be a Backbone View', function() {
    expect(view).toEqual(jasmine.any(Backbone.View));
  });
});