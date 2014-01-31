var TopArtistsListView = Backbone.View.extend({
  className: 'row top-artist-list',
  tagName: 'ul',
  url: url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json", // Last.fm API end-point
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.empty();
    this.getTopArtist();
    return this;
  },
  getTopArtist: function () {
    var self = this;
    var method = "chart.gettopartists"
    url = url +"&method="+ method
    $.getJSON(url, function(data){
      $.each(data.artists.artist, function(){
        self.appendFetchedArtist(this);
      });
    });
  },
  appendFetchedArtist: function (artist) {
    var view = new FetchedArtistItemView({model: artist, collection: this.collection});
    return this.$el.append(view.render().el);
  }
});