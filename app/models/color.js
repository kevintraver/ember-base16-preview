import DS from 'ember-data';
import color2xterm from "npm:color2xterm";

export default DS.Model.extend({
  number: DS.attr('string'),
  rgb: DS.attr('string'),
  hex: DS.attr('string'),
  airline: DS.attr('string'),
  description: DS.attr('string'),
  xterm: Ember.computed('hex', function() {
    return color2xterm.hex2xterm(this.get('hex'));
  })
});
