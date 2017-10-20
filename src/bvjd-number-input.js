import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './bvjd-number-input.less';
import view from './bvjd-number-input.stache';

export const ViewModel = DefineMap.extend({
  value : {
    value : 0,
    type : 'number',
    set(value) {
      if(value > this.max)
        return this.max;
      else if(value < this.min)
        return this.min;
      else
        return value;
    }
  },

  min : {
    value : 0,
    type :  'number'
  },

  max : {
    value : 5,
    type : 'number'
  },

  increment(){
    this.value++;
  },

  decrement(){
    this.value--;
  }

});

export default Component.extend({
  tag: 'bvjd-number-input',
  ViewModel,
  view
});
