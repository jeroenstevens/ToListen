var Artist = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage('artists-backbone'),

  defaults: {
    name: '',
    listened: false
  },

  save: function () {
    artists.add(this);
  },

  toggleStatus: function () {
    console.log("toggleStatus");
    this.set({
      listened: !this.get('listened')
    });
  }
});