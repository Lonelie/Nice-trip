Router.configure
(
    {
        layoutTemplate: 'layout'
    }
);

Router.route('/', { name: 'home' });
Router.route
(
    '/trips/:_id'
    ,{
    	name:'tripDetail'
    	,template: 'tripDetail'
        ,data: function() { return Trips.findOne( this.params._id ); }
    }
);