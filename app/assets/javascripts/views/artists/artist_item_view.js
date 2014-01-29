var ArtistItemView = Backbone.View.extend({
  template: JST['artists/artist_item'],
  tagName: 'li',
  className: "artist-item",

  initialize: function () {
    this.model.on('change', this.toggleStrikethrough, this);
  },
  events: {
    "click :checkbox": "toggleListened",
    "click .destroy": "clear"
  },
  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);

    if(this.model.get('listened')){
      this.toggleStrikethrough();
    };

    return this;
  },
  toggleStrikethrough: function () {
    this.$("input").parent().toggleClass("listened");
  },
  toggleListened: function () {
    this.model.toggleListened();
  },
  clear: function () {
    this.model.destroy();
  }
});