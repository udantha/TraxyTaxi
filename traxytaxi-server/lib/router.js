/**
 * Created by udantha on 4/5/14.
 */
Router.configure({
    // layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('taxiList', {path: '/'});

    this.route('taxiPage', {
        path: '/taxiapp'
    });
});