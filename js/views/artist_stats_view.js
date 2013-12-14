var ArtistStatsView = Backbone.View.extend({
  id: "artist-stats",
  template: _.template($("#stats-template").html()),

  initialize: function () {
    _.bindAll(this, "render", "clearListened");
    // artists_stats = this.collection
    // artists_stats.on("listened-changed", this.render, this);
    // artists_stats.on("add", this.render, this);
    // artists_stats.on("remove", this.render, this);
    this.render();
    console.log('artist_stats_view_initialize');
  },
  events: {
    "click #clear-listened": "clearListened"
  },
  render: function () {
    console.log('artist_stats_view_render');
    console.log(this);
    var listenedCount = artists.listened().length;
    var remainingCount = artists.unheard().length;
    var content = this.template({listened: listenedCount, remaining: remainingCount});
    this.$el.html(content);
    return this;
  },
  clearListened: function () {
    this.collection.remove(this.collection.listened());
    event.preventDefault();
  }
});