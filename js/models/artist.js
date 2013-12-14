var Artist = Backbone.Model.extend({

  defaults: {
    name: '',
    listened: false
  },

  toggleStatus: function () {
    this.set({
      listened: !this.get('listened') // Sets attribute on opposite value
    });
  }
});