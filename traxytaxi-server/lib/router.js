/**
 * Created by udantha on 4/5/14.
 */
Router.configure({
    // layoutTemplate: 'layout'
    loadingTemplate: 'loading',
    waitOn: function(){
        return Meteor.subscribe('taxiList');
    }
});

Router.map(function(){
    this.route('taxiList', {path: '/'});

    this.route('taxiPage', {
        path: '/taxiapp'
    });
});