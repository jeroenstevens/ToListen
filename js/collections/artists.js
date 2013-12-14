var Artists = Backbone.Collection.extend({
  model: Artist,

  localStorage: new Store('artists'),

  listened: function () {
    return this.filter(function (artist) {
      return artist.get('listened');
    });
  },
  unheard: function () {
    return this.without.apply(this, this.listened() );
  }
});

artists = new Artists();