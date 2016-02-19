import Ember from 'ember';

export default Ember.Mixin.create({
  isLoading: false,
  hasMore: true,

  actions: {
    loadMore: function(force) {
      console.log('inview-controller-mixin: loadMore:', force, 'isLoading:', this.get('isLoading'), 'hasMore:', this.get('hasMore'));
      this.set('isLoading', true);
      return true;
    }
  }
});
