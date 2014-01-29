var ArtistItemView = Backbone.View.extend({
  template: JST['artists/artist_item'],
  tagName: 'li',
  className: "artist-item",

  initialize: function () {
  },
  events: {
    "click :checkbox": "toggleListen",
    "click .destroy": "clear"
  },
  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.isListened();                                  // Checks the listened attribute
    return this;
  },
  toggleListen: function () {
    this.model.toggleStatus();
    this.$("input").parent().toggleClass("listened");   // Toggle the class when value of listened changed
  },
  clear: function () {
    this.model.destroy();                               // Remove the model Artist from the collection
    this.remove();                                      // Remove the ArtistItemView
  },
  isListened: function () {
    if(this.model.get('listened')){                     // Gives listened class to every class that is listened
      this.$("input").parent().addClass("listened");
    };
  }
});
