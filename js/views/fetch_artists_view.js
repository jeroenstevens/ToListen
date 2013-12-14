var FetchArtistsView = Backbone.View.extend({
  el: $('body'),
  // template: _.template("\
  //   <li class='artist'>\
  //     <div id='artist-name'>"+artist['name']+"</div>\
  //     <img src="+artist['image'][3]['#text']+" id='artist-img' class='large-3'></img>\
  //   </li>\
  // "),

  events: {
    'keypress input': 'processKey',
    'click .artist': 'addToFavorite'
  },

  initialize: function () {
    _.bindAll(this, 'render', 'getLatestArtist', 'addToFavorite'// , 'getSimilar'
    );
    this.render();
  },

  render: function () {
    url = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json";
    $.getJSON(url, function(data){
      $('body').append("<ul class='row' id='list'></ul>");
      $.each(data.artists.artist, function(i, artist){
        console.log(artist['name']);
        $('#list').append("<li class='artist'><div id='artist-name'>"+artist['name']+"</div><img src="+artist['image'][3]['#text']+" id='artist-img' class='large-3'></img></li>").hide().fadeIn(300);
      });
    });
  },

  processKey: function(e) {
    if(e.which === 13){
      this.getLatestArtist();
    }
  },

  getLatestArtist: function () {
    query = $('.searchfield').val()
    method = "user.getrecenttracks"
    url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json"+"&method="+ method +"&user=" + query;
    $.getJSON(url, function(data){
      var latesttracks = data.recenttracks.track
      var random_artist = latesttracks[Math.floor(Math.random() * latesttracks.length)];
      $('#artist-img').attr({src: random_artist['image'][3]['#text']});
      $('#artist-name').text(random_artist['artist']['#text'] +" - "+ random_artist['name']);
      $('#list').fadeOut(600, function(){
         $(this).remove();
         $('#artist').css("display", "block");
      });
      console.log(random_artist);

      query = random_artist['artist']['#text']
      console.log(query);
      method = "artist.getsimilar"
      url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json"+"&method="+ method +"&artist=" + query;
      $('#similar-list').remove();
      $('body').append("<ul class='row' id='similar-list'></ul>")
      $.getJSON(url, function(data){
        $.each(data.similarartists.artist, function (i, artist){
          console.log(artist['name']);
          $('#similar-list').append("<li class='artist'><div id='artist-name'>"+artist['name']+"</div><img src="+artist['image'][3]['#text']+" id='artist-img' class='large-3'></img><meter value="+artist['match']+" min=0 max=1></meter></li>").hide().fadeIn(300);
        });
      });
    });
  },

  addToFavorite: function (artist) {
    var artist_name = (artist["currentTarget"]["textContent"]);
    if(artists.where({name: artist_name}).length == 0){
      var artist_model = new Artist({name: artist_name});
      artists.add(artist_model);
      artist_model.save();
    }
  },

  // getSimilar: function () { // Hoe geeft ik random_artist als een variable mee na getLatestArtist
  //   query = random_artist['artist']['#text']
  //   console.log(query);
  //   method = "artist.getsimilar"
  //   url = "http://ws.audioscrobbler.com/2.0/?api_key=f90b2e1d432ddfeee9b30524aeedd6d7&format=json"+"&method="+ method +"&artist=" + query;
  //   $('#similar-list').remove();
  //   $('body').append("<ul class='row' id='similar-list'></ul>")
  //   $.getJSON(url, function(data){
  //     $.each(data.similarartists.artist, function (i, artist){
  //       console.log(artist['name']);
  //       $('#similar-list').append("<li class='artist'><div id='artist-name'>"+artist['name']+"</div><img src="+artist['image'][3]['#text']+" id='artist-img' class='large-3'></img><meter value="+artist['match']+" min=0 max=1></meter></li>").hide().fadeIn(300);
  //     });
  //   });
  // },
});
  var artists_view = new FetchArtistsView();