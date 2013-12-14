var ArtistItemView = Backbone.View.extend({
  template: _.template($("#item-template").html()),
  tagName: 'li',
  className: 'artist-item',

  initialize: function () {
    _.bindAll(this, "render", "toggleListen", "clear");
    this.model.bind("change:listened", this.render);
  },
  events: {
    "click :checkbox": "toggleListen",
    "click .destroy": "clear"
  },
  render: function () {
    var content = this.template(this.model.toJSON());
    this.$el.html(content);
    this.isListened(); // Checks the listened attribute
    return this;
  },
  toggleListen: function () {
    this.model.toggleStatus();
  },
  clear: function () {
    this.model.destroy(); // Remove the model Artist from the collection
    this.remove(); // Remove the ArtistItemView
  },
  isListened: function () {
    if(this.model.get('listened')){
      this.$("input").parent().addClass("listened");
    };
  }
});