var ArtistListView = Backbone.View.extend({
  id: "artist-list",

  initialize: function () {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
    this.collection.bind("remove", this.render);
    this.render();
    console.log('artist_list_view_initialize');
  },
  render: function () {
    $(this.el).empty();
    console.log('artist_list_view_render');
    console.log(this);
    console.log('artist_list_view_render');
    var els = [];
    this.collection.each(function(model){
      var view = new ArtistItemView({model: model});
      els.push(view.render().el);
    });
    $(this.el).append(els);
    return this;
  }
});