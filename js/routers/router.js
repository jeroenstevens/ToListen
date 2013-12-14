var ArtistRouter = Backbone.Router.extend({
  initialize: function () {
    formView = new ArtistFormView({collection: artists});
    listView = new ArtistListView({collection: artists});
    statsView = new ArtistStatsView({collection: artists});
    console.log('router_initialize');
  },
  routes: {
    "": "index"
  },
  index: function () {
    //$('body').append(formView.render().el);
    $('body').append(listView.render().el);
    $('body').append(statsView.render().el);
  }
});