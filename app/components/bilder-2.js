import Ember from 'ember';

export default Ember.Component.extend({

    link: 'http://img4.wikia.nocookie.net/__cb20091025163133/necyklopedie/images/4/46/Chuck_norris_smoking.JPG',
    link1: 'http://img4.wikia.nocookie.net/__cb20091025163133/necyklopedie/images/4/46/Chuck_norris_smoking.JPG',
    link2: 'http://masternorris.com/images/articles-news/images/Chuck_Norris_BZ_WBK_0005-MasterNorris_com.jpg',

    

    actions: {

        wechseln: function() {


            if (this.get('link') === this.get('link1')) {

                  this.set('link', this.get('link2'));

            } else {

                this.set('link', this.get('link1'));

          }
        }

    }

});
