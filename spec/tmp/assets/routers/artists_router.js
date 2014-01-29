var ArtistRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function () {
    this.collection = new Artists();
    this.collection.reset($('.to-listen').data('artists'));

  },

  index: function () {
    listView = new ArtistListView({collection: this.collection});
    statsView = new ArtistStatsView({collection: this.collection});
    new FetchArtistsView();
    new RandomArtistView();

    $('.to-listen').append(listView.render().el);
    $('.to-listen').append(statsView.render().el);
  }
});
