import Resolver from 'resolver';

var App = Ember.Application.extend({
  modulePrefix: 'app',
  Resolver: Resolver['default']
});

export default App;
