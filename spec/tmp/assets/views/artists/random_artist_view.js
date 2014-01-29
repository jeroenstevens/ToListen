var RandomArtistView = Backbone.View.extend({
  template: JST['artists/artist_index'],
  url: url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json", // Last.fm API end-point

  events: {
    'keypress input': 'getRandomArtist'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
  },

  getRandomArtist: function (e) {
    console.log("random");
    if(e.which == 13){ // Enter key
      self = this;
      query = $('.searchfield').val()
      method = "library.getartists"
      url = url +"&method="+ method +"&user=" + query;
      $.getJSON(url, function(data){

        var artists = data.artists.artist                       // Get all artists from the library
        var artist = artists[Math.floor(Math.random() * 40)];   // Pick a random artist

        var content = self.template({artist: artist, playcount: true, main: true});
        $('.main-artist').remove();
        $('.top-artist-list').remove();
        self.$el.append(content);
        $('.main-artist').css("display", "block");

        //self.getSimilarArtist(artist);
      });
    }
  }
});
