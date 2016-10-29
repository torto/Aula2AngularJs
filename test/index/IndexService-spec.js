describe('IndexService', function(){
  var service;

  beforeEach(module('cruj'));
  beforeEach(inject(function($injector) {
    service = $injector.get('IndexService');
  }));

  it('somaDeDoisValores', function(){
    var a = 1;
    var b = 2;

    expect(service.somaDeDoisValores(a, b)).toEqual(3);
  });

  it('multiplicacaoDeDoisValores', function() {
    var a = 2;

    expect(service.multiplicacaoDeDoisValores(a, a)).toEqual(4);
  });



});
