App = Ember.Application.create();

App.Router.map(function() {
    this.resource('main', { path: '/'});
    this.resource('best');
    this.resource('new');
    this.resource('about');
    this.resource('faq');
});

App.BestRoute = Ember.Route.extend({
    model: function() {
        return tips;
    }
});

//Sets active state to li, not just a. Work around for bootstrap nav. 
App.ApplicationView = Ember.View.extend({
  currentPathDidChange: function() {
    Ember.run.next( this, function() {
      this.$("ul.nav li:has(>a.active)").addClass('active');
      this.$("ul.nav li:not(:has(>a.active))").removeClass('active');
    });
  }.observes('controller.currentPath')
});

// sample data
var tips = [{
    id: '1',
    author: "smithy",
    stars: 99,
    tip: "Professor and student"
}, {
    id: '2',
    author: "bob",
    stars: 34,
    tip: "Keep on the Knee High Boots. Why take them off?"
}]
