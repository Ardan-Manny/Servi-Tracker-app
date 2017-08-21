// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

/* ---------------------------------- Local Variables ---------------------------------- */
  var service = new EmployeeService();
  HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
  EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
  EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
  var slider = new PageSlider($('body'));
  service.initialize().done(function () {
    router.addRoute('', function() {
        slider.slidePage(new HomeView(service).render().$el);
    });

    router.addRoute('employees/:id', function(id) {
        service.findById(parseInt(id)).done(function(employee) {
            slider.slidePage(new EmployeeView(employee).render().$el);
            //this.$el.on('click', '.add-location-btn', this.addLocation);
        });
    });

    router.start();
  });



/* --------------------------------- Event Registration -------------------------------- */

  document.addEventListener('deviceready', function () {
    if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
        navigator.notification.alert(
          message, // message
          null, // callback
          "Workshop", // title
          'OK' // buttonName
        );
      };
    }

    FastClick.attach(document.body);

    StatusBar.overlaysWebView( false );
    StatusBar.backgroundColorByHexString('#ffffff');
    StatusBar.styleDefault();

  }, false);

/* ---------------------------------- Local Functions ---------------------------------- */





}());
