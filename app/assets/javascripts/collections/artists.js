var Artists = Backbone.Collection.extend({
  url: '/api/artists',
  model: Artist,

  //localStorage: new Backbone.LocalStorage('artists'),

  listened: function () {
    return this.filter(function (artist) { // geeft de hele array trg
      return artist.get('listened'); // geeft de objecten binnen de array trg
    });
  }
});