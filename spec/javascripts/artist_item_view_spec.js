describe('ArtistItemView', function() {
  var view;

  beforeEach(function() {
    artist = new Artist();

    view = new ArtistItemView({model: artist});
  });

  describe('when rendering', function() {
    beforeEach(function() {
      artist.set('name', 'test-subject');
      view.render();
    });

    it('should contain the name of the artist', function() {
      expect(view.$el.text()).toContain('test-subject');
    });

    it("should be a list item with 'artist-item' class", function() {
      expect(view.$el.hasClass("artist-item")).toBeTruthy();
    });

    describe('when the destroy button is clicked', function() {
      beforeEach(function() {
        spyOn(artist, 'destroy');
        view.$('.destroy').click();
      });

      it('should destroy the model', function() {
        expect(artist.destroy).toHaveBeenCalled();
      });
    });

    // describe('when the checkbox is checked', function() {
    //   beforeEach(function() {
    //     spyOn(view, 'render');
    //     view.$('.toggle').click();
    //   });
    //
    //   it('should re-render the view', function() {
    //     expect(view.render).toHaveBeenCalled();
    //   });
    // });
  });

  it('should be a Backbone View', function() {
    expect(view).toEqual(jasmine.any(Backbone.View));
  });
});