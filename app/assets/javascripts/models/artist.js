var Artist = Backbone.Model.extend({
  url: function () { return '/api/artists/' + this.id },

  defaults: {
    name: '',
    listened: false
  },

  toggleListened: function () {
    this.save({
      listened: !this.get('listened') // Sets attribute on opposite value
    });
  }
});