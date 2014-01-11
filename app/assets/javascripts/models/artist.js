var Artist = Backbone.Model.extend({

  defaults: {
    name: '',
    listened: false
  },

  toggleStatus: function () {
    this.save({
      listened: !this.get('listened') // Sets attribute on opposite value
    });
  },

  listened: function () {
    return this.get('listened');
  }
});