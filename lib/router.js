Router.configure
(
    {
        layoutTemplate: 'layout'
    }
);

Router.route('/', { name: 'trips' });
Router.route
(
    '/trips/:_id'
    ,{
        name: 'tripDetail'
        ,data: function() { return trips.findOne( this.params._id ); }
    }
);