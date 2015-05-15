Trips = new Mongo.Collection("trips");


Template.trips.helpers({
    'Trips' : Trips.find({}, {sort : {dest : 1}})
});

Template.tripDetail.helpers({
  Trips: function() {
    return Trips.find({});
  }
});


// Helpers
/*Template.nicetrip.helpers
(
  {

    trips : function () {
            console.log(Trips);
            return Trips.find().fetch(

                function( trip, index, cursor ){

                    return { _id : trip._id, dest: trip.dest, arrival : trip.arrival };
            }

          );
    }
  }
);
*/
// Events
Template.nicetrip.events = {


    'submit .new-trip' : function ( e, template )
    {
            e.preventDefault();

            var $dest = template.find( "#dest" );
            var $arrival = template.find( "#arrival" );

      if ( $dest.value !== "" && $arrival.value !== "" )
      {
       Trips.insert( {dest : $dest.value, arrival : $arrival.value} );
      }
    }

};


