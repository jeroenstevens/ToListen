var ArtistRouter = Backbone.Router.extend({
  initialize: function () {
    listView = new ArtistListView({collection: artists});
    statsView = new ArtistStatsView({collection: artists});
    artists_view = new FetchArtistsView();
  },
  routes: {
    "": "index"
  },
  index: function () {
    $('.to-listen').append(listView.render().el);
    $('.to-listen').append(statsView.render().el);
  }
});