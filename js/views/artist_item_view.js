var ArtistItemView = Backbone.View.extend({
  template: _.template($("#item-template").html()),
  initialize: function () {
    _.bindAll(this, "render", "toggleListen", "clear");
    this.model.bind("change:listened",this.setStatus);
    this.render();
  },
  events: {
    "click :checkbox": "toggleListen",
    "click .destroy": "clear"
  },
  render: function () {
    var content = this.template(this.model.toJSON());
    this.$el.html(content);
    this.isListened();
    return this;
  },
  toggleListen: function () {
    this.model.toggleStatus();
    this.render();
  },
  clear: function (evt) {
    artists.remove(this.model);
  },
  isListened: function () {
    if(this.model.get('listened')){
      this.$(".artist-item").addClass("listened");
    };
  }
});