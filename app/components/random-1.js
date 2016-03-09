import Ember from 'ember';

export default Ember.Component.extend({

    Joke: '',
    Id: '',

    
    actions: {
        
        setJoke: function() {
            
            var $ = Ember.$;
            var url = 'http://api.icndb.com/jokes/random';
            var that = this;
            
            
            $.getJSON(url, function(json) {
            
                var jokes = json.value;
                var VARid = jokes['id'];
                var VARjoke = jokes['joke'];
                
                that.set('Id', VARid);
                that.set('Joke', VARjoke);

            });
            
            
        }
     
        
        
    }
        

});