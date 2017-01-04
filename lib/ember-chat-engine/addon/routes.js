import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('viewer', {path: '/viewers/:id'});
});
