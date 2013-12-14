var ArtistRouter = Backbone.Router.extend({
  initialize: function () {
    listView = new ArtistListView({collection: artists});
    statsView = new ArtistStatsView({collection: artists});
  },
  routes: {
    "": "index"
  },
  index: function () {
    $('body').append(listView.render().el);
    $('body').append(statsView.render().el);
  }
});