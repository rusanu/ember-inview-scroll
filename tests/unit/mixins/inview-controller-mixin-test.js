import Ember from 'ember';
import InviewControllerMixinMixin from '../../../mixins/inview-controller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | inview controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let InviewControllerMixinObject = Ember.Object.extend(InviewControllerMixinMixin);
  let subject = InviewControllerMixinObject.create();
  assert.ok(subject);
});
