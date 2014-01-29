describe('Artists', function() {
  var collection, fakeServer;

  // beforeEach(function() {
//     model1 = new Artist();
//     model2 = new Artist({ listened: true });
//
//     collection = new Artists([model1, model2]);
//   });

  // it('should be a Backbone Collection', function() {
//     expect(collection).toEqual(jasmine.any(Backbone.Collection));
//   });
//
//   it("should have url with the value '/api/artists' ", function() {
//     expect(collection.url).toEqual("/api/artists");
//   });
//
//   it('should consist of Artist models', function() {
//     expect(collection.model).toBe(Artist);
//   });

  // it('should return listened artists', function() {
//     listened_artists = collection.listened();
//     expect(listened_artists).not.toEqual([model1]);
//     expect(listened_artists).toEqual([model2]);
//   });

  beforeEach(function() {
    fakeServer = sinon.fakeServer.create();
  });

  afterEach(function() {
    fakeServer.restore();
  });

  it('description', function() {
    var callback = sinon.spy();

    fakeServer.respondWith("GET", "/api/artists/1",
      [200, {"Content-Type": "application/json"},
      '{"id":1,"name":"test","listened":true}']);

    var artist = new Artist({id: 1});

    artist.bind('change', callback);

    artist.fetch();

    fakeServer.respond();

    console.log(callback.getCall(0));
    expect(callback.called).toBeTruthy();
    expect(callback.getCall(0).args[0].attributes)
          .toEqual({
            id: 1,
            name: "test",
            listened: true
          });
  });
});