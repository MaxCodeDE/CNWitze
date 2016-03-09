import Ember from 'ember';

export default Ember.Route.extend({



model: function() {

        var result;

          var url = 'http://api.icndb.com/jokes';

            result = Ember.$.getJSON(url).then(function(json) {

              if (typeof json !== undefined) {

                var value = json.value;

                return value;

                } else {
                  console.log('Fehler: JSON nicht vorhanden');
                }

            });

        return result;


  },




});
