var FetchedArtistItemView = Backbone.View.extend({
  template: JST['artists/fetched_artist_item'],
  tagName: "li",
  className: 'artist',

  events: {
    'click': 'addArtist'
  },
  render: function () {
    var content = this.template({artist: this.model, playcount: false, main: false});
    this.$el.html(content);
    return this;
  },
  addArtist: function (artist) {
    var artist_name = (artist["currentTarget"]["textContent"]);

    if(this.collection.validateUniquenessOfName(artist_name)){
      var artist_model = new Artist({name: artist_name});
      this.collection.add(artist_model);
      artist_model.save();
    };
  }
});