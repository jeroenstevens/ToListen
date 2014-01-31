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
    top_artists = new TopArtistsListView({collection: this.collection});
    new RandomArtistView();

    $('body').append(top_artists.render().el);

    $('.to-listen').append([listView.render().el],[statsView.render().el]);
  }
});