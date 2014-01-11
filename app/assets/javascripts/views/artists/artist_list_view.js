var ArtistListView = Backbone.View.extend({
  className: 'artist-list',
  tagName: 'ul',
  //template: JST['artists/index'],

  initialize: function () {
    _.bindAll(this, "render", "appendArtist");
    this.collection.bind("add", this.appendArtist, this);
    this.collection.on("remove", this.render, this);
    this.collection.fetch();
  },

  render: function () {
    this.$el.empty();
    this.collection.each(this.appendArtist, this);
    return this;
  },

  appendArtist: function (artist) {
    var view = new ArtistItemView({model: artist});
    return this.$el.append(view.render().el);
  }
});