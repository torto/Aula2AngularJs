describe('IndexDirective', function() {

  var $compile,
      $rootScope;

  beforeEach(module('cruj'));
  beforeEach(module('js/index/IndexTemplateDirective.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
  }));

  describe('Render', function(){
    it('Render variable and variableTwo', function(){

      $rootScope.passarValor = 'Valor Um';

      var elemento = $compile('<index-directive variable="{{passarValor}}"' +
       'variable-two="Texto sem var"></index-directive>')($rootScope);
       $rootScope.$digest();
       expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);
       expect(elemento.find('h2').text()).toEqual('Texto sem var');
    });

    it('Render variable is change', function(){
      $rootScope.passarValor = 'Valor Um';

      var elemento = $compile('<index-directive variable="{{passarValor}}"' +
       'variable-two="Texto sem var"></index-directive>')($rootScope);
       $rootScope.$digest();
       console.log('Valor inicial', elemento.find('h1').text());
       expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);

       $rootScope.passarValor = 'Alterou valor';
       $rootScope.$digest();
       console.log('Valor Alterado', elemento.find('h1').text());
       expect(elemento.find('h1').text()).toEqual($rootScope.passarValor);
    });
  });



});
