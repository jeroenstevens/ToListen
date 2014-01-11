var Artists = Backbone.Collection.extend({
  url: '/api/artists',
  model: Artist,

  //localStorage: new Backbone.LocalStorage('artists'),

  listened: function () {
    return this.filter(function (artist) {
      return artist.get('listened');
    });
  }
});

//artists = new Artists();