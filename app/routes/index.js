import Ember from 'ember';

export default Ember.Route.extend({
    
    //Führt Code nach dem Rendern der index-Seite aus
    setupController: function(controller, model) {
        this._super('controller', model);
        Ember.run.schedule('afterRender', this, function(){
            
            var $ = Ember.$;
            $('#bilder-2').hide();
            
            setTimeout(function() { $('#animation1').show('slow'); }, 500);
            setTimeout(function() { $('#animation2').show('slow'); }, 900);
            setTimeout(function() { $('#animation3').show('slow'); }, 1600);
            setTimeout(function() { $('#animation4').show('slow'); }, 2100);
            
            setTimeout(function() { $('#bilder-2').show('fast');}, 3000);
        });
        
        
    }
   
    /*
    //Not working סּ_סּ
    showDiv: function(time, div) {
    
        //If !NAN Check
    
        var $ = Ember.$;
    
        setTimeout(function() { $('#animation' + div).show('slow'); }, time);
    
    
    }
    
    */
    
});
