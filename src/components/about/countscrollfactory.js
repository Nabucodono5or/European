import CountUp from 'countup.js';

function countScrollFactory() {

  function link(scope, element, attrs) {
    var limit = attrs.countUp;
    var eventString = attrs.scrollevent;
    scope.id = attrs.id;  
    
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
      };

    var demo = new CountUp(document.querySelector("#"+scope.id), 0, limit, 0, 2.5, options);

    scope.$on(eventString, function (event, data) {      
      if (data === scope.id) {
        if (!demo.error) {
          demo.reset();
          demo.start();
        } else {

          console.error(demo.error);
        }    
      }
    });
  }

  return {
    restrict: 'EA',
    transclude: true,
    scope: {
      id : '=',
    },
    link : link,
  }
}

export default countScrollFactory;