var ArtistStatsView = Backbone.View.extend({
  className: "artist-stats",
  template: JST['artists/artist_stats'],

  initialize: function () {
    _.bindAll(this, "render");
    this.collection.on("change:listened", this.render);   // Change number in template when new artist is changed
    this.collection.on("add", this.render);               // "      "      "  "        "    "   "      "  added
    this.collection.on("remove", this.render);            // "      "      "  "        "    "   "      "  removed
    this.render();
  },
  events: {
    "click .clear-listened": "clearListened"
  },
  render: function () {
    var listenedCount = this.collection.listened().length;
    var remainingCount = this.collection.length - listenedCount;
    var content = this.template({listened: listenedCount, remaining: remainingCount});
    this.$el.html(content);
    return this;
  },
  clearListened: function () {
    listened_artists = this.collection.listened()
    for (var i = 0; i < listened_artists.length; i++){
      listened_artists[i].destroy();
    }
  }
});
