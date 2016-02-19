import Ember from 'ember';
import layout from '../templates/components/inview-scroll';

export default Ember.Component.extend({
  layout: layout,
 
  didInsertElement: function() {
    var _this = this;
    jQuery(window).on('scroll resize', function(event) {
      Ember.run.debounce(_this, _this.checkInView, 250);
    });
    Ember.run.later(this, this.checkInView);
  },

  checkInView: function() {
    var element = this.get('element');
    if (!element) {
      return;
    }
    var rect = element.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var isInView = rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth;
    if (isInView) {
      this.sendAction('action', false);
    }
  }

});
