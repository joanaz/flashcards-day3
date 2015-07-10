app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.on('mouseenter', function() {
        console.log("hello")
        element.addClass('border-on-hover')
      });
      element.on('mouseleave', function() {
        element.removeClass('border-on-hover')
      })
    }
  }
})