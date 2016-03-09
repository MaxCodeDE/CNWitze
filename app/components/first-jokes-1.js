import Ember from 'ember';

export default Ember.Component.extend({

  jokes: null,
  anzahl: 5,

  firstJokes: Ember.computed('jokes', 'anzahl', function() {

    var allJokes = this.get('jokes');
    var jokesArr = [];
    var anzahl = this.get('anzahl');

    allJokes.forEach(function(item, index) {

      if (index < anzahl) {
        jokesArr.push(item);
      } else {
        return;
      }
    });



    return jokesArr;


  }),




});
