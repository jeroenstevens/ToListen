var ArtistFormView = Backbone.View.extend({
  id: "artist-form",
  template: _.template($("#formTemplate").html()),

  initialize: function(){
    this.render();
    console.log('artist_form_view_initialize');
  },
  events: {
    "submit #artist-form": "save"
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  save: function (e) {
    var val = this.$("input").val();
    this.collection.create({name: val});
    this.$("input").val("");
    e.preventDefault();
  }
});