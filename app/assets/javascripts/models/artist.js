var Artist = Backbone.Model.extend({
  url: function () {
    if (this.isNew()) {
      return '/api/artists';
    } else {
      return '/api/artists/' + this.id;
    }
  },
  defaults: {
    name: '',
    listened: false
  },
  toggleListened: function () {
    this.save({
      listened: !this.get('listened') // Sets attribute on opposite value
    });
  }

  // validateUniquenessOfName: function (collection) {
  //   console.log(this);
  //   console.log(this.collection);
  //   console.log(this.model);
  //   this.where({name: "Arctic Monkeys"}) == 0;
  // }
});