var FetchArtistsView = Backbone.View.extend({
  template: JST['artists/artist_index'],
  url: url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json", // Last.fm API end-point

  events: {
    'keypress input': 'getRandomArtist',
    'click .artist': 'addToFavorite'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.getTopArtist();
  },

  getTopArtist: function () {
    var self = this;
    var method = "chart.gettopartists"
    url = url +"&method="+ method
    $.getJSON(url, function(data){
      $('body').append("<ul class='row top-artist-list'></ul>");
      $.each(data.artists.artist, function(i, artist){
        var content = self.template({artist: artist, playcount: false, main: false});
        $('.top-artist-list').append(content);
      });
    });
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

        self.getSimilarArtist(artist);
      });
    }
  },

  getSimilarArtist: function (artist) {
    query = artist['name']
    method = "artist.getsimilar"
    url = url +"&method="+ method +"&artist=" + query;

    $('.similar-list').remove();
    $('body').append("<ul class='row similar-list'></ul>")
    $('.heading').text('Similar Artists').addClass('push');

    $.getJSON(url, function(data){
      $.each(data.similarartists.artist, function (i, artist){
        $('.similar-list').append(self.template({artist: artist, playcount:false, main:false}));
      });
    });
  },

  addToFavorite: function (artist) {
    console.log("artist click");
    var artist_name = (artist["currentTarget"]["textContent"]);
    if(artists.where({name: artist_name}).length == 0){         // Add only when artist_name is unique
      var artist_model = new Artist({name: artist_name});       // Instantiate a new Artist model
      artists.add(artist_model);                                // Add the model to the collection(localStorage)
      artist_model.save();
    }
  },
});
