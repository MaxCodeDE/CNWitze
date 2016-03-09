import Ember from 'ember';

export default Ember.Component.extend({

    FehlerInfo: 'Leider ist der "Witze-Server" offline!',
    
    
    
model: function() {
    
    
    var url = 'http://api.icndb.com/jokes';
    var jokes = this.getJSON(url);
    
    jokes = jokes.value;
    
    return jokes.value;
  },
    
    
getJSON: function(url) {
    
    var promise =  new Promise(function(resolve, reject) {
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
    
    
    function handler() {
        if (this.readyState === this.DONE) {
            if (this.status === 200) {
             
                resolve(this.response);
                
            } else {
                reject(new Error('getJSON: ' + url + ' Fehler: ' + this.status));
            }
        }
    }
    
    
    
    });
    
    return promise;
}
    
    


});