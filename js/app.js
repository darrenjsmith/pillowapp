App = Ember.Application.create();

App.Router.map(function() {
    this.resource('main');
    this.resource('top-tips');
    this.resource('new-tips');
    this.resource('about');
});