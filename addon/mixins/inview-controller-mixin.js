import Ember from 'ember';

export default Ember.Mixin.create({
  isLoading: false,
  hasMore: true,
  hasError: false,
  errorMessage: null,
  modelClass: null,
  sortProperties: ['numericId:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'),
  
  actions: {
    loadMore: function(force) {
      if (!force && (!this.get('hasMore') || this.get('hasError'))) {
        return;
      }
      var fromId = this.get('sortedModel.lastObject.numericId');
      this.set('isLoading', true);
      this.set('hasError', false);
      var modelClass = this.get('modelClass');
      this.store.query(modelClass, {from_id: fromId}).then(
          function(results) {
            var count = results.get('length');
            this.set('hasMore', 0 < count);
          }.bind(this),
          function(error) {
            this.set('hasError', true);
            this.set('errorMessage', error.message)
          }.bind(this)
        ).finally(function () {
          this.set('isLoading', false);
        }.bind(this));
    },
  }
});
