
function imagesLoadedFactory($timeout) {

  function link(scope, elem, attr) {
    console.log('directive executada');

    if(scope.$last){
      $timeout(function () {
        scope.$emit('LastRepeaterElement');
      });      
    }
  }

  return {
    restrict: 'EA',
    link : link,
  }
}

imagesLoadedFactory.$inject = ['$timeout'];

export default imagesLoadedFactory;