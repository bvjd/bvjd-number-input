import QUnit from 'steal-qunit';
import { ViewModel } from './bvjd-number-input';

// ViewModel unit tests
QUnit.module('bvjd-number-input');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the bvjd-number-input component');
});
