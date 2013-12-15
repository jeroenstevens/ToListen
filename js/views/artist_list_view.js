var ArtistListView = Backbone.View.extend({
  className: 'artist-list',
  tagName: 'ul',

  initialize: function () {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
    this.collection.bind("remove", this.render);
    this.collection.fetch();
  },
  render: function () {
    this.$el.empty();
    var artists = [];
    this.collection.each(function(model){
      var view = new ArtistItemView({model: model});
      artists.push(view.render().el);
    });
    this.$el.append(artists);
    return this;
  }
});