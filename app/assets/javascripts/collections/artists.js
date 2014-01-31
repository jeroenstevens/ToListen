var Artists = Backbone.Collection.extend({
  url: '/api/artists',
  model: Artist,

  listened: function () {
    return this.filter(function (artist) {
      return artist.get('listened');
    });
  },
  validateUniquenessOfName: function (artist_name) {
    return this.where({name: artist_name}) == 0;
  }
});