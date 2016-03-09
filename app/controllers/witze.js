import Ember from 'ember';

export default Ember.Controller.extend({

    FehlerInfo: 'Leider ist der "Witze-Server" offline!',
    ZurueckButton: 'Zurück',
    Info: 'Wähle eine Option:',
    
    
  actions: {
  show1: function() {

    Ember.$('#auswahl').hide('slow');
    Ember.$('#APIwitze').show('slow');
    Ember.$('#ZurückButton').show('slow');


  },
      
  show2: function() {
      
      Ember.$('#auswahl').hide('slow');
      Ember.$('#RANDOMwitze').show('slow');
      Ember.$('#ZurückButton').show('slow');
      
  },
      
  show3: function() {
      
     Ember.$('#auswahl').hide('slow'); 
     Ember.$('#FIRSTwitze').show('slow'); 
     Ember.$('#ZurückButton').show('slow'); 
      
  },
      
  reset: function() {
      
      Ember.$('#auswahl').show('slow');
      Ember.$('#APIwitze').hide('slow');
      Ember.$('#RANDOMwitze').hide('slow');
      Ember.$('#FIRSTwitze').hide('slow');
      Ember.$('#ZurückButton').hide('slow');
      
  }
      
      
      
}




});