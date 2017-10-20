import QUnit from 'steal-qunit';
import plugin from './bvjd-number-input';

QUnit.module('bvjd-number-input');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the bvjd-number-input plugin');
});
