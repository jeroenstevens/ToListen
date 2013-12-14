var ArtistListView = Backbone.View.extend({
  className: "artist-list",
  tagName: "ul",

  initialize: function () {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
    this.collection.bind("reset", this.render);
    this.collection.fetch();
  },
  render: function () {
    $(this.el).empty();
    var els = [];
    this.collection.each(function(model){
      var view = new ArtistItemView({model: model});
      els.push(view.render().el);
    });
    $(this.el).append(els);
    return this;
  }
});