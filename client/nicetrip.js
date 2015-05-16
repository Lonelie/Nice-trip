Trips = new Mongo.Collection("trips");


Template.trips.helpers({
    'Trips' : Trips.find({}, {sort : {dest : 1}})
});

Template.tripDetail.helpers({
  Trips: function() {
    return Trips.find({});
  },
  isOwner: function() {
    return this.userId === Meteor.userId();
  }
});

// Events
Template.nicetrip.events = {


    'submit .new-trip' : function ( e, template )
    {
            e.preventDefault();

            var $dest = template.find( "#dest" );
            var $arrival = template.find( "#arrival" );
            var $price = template.find( "#price" );
            var $car = template.find( "#car" );

      if ( $dest.value !== "" && $arrival.value !== "" && $price.value !== "" && $car.value !== "")
      {
       Trips.insert( {dest : $dest.value, arrival : $arrival.value, price : $price.value, car : $car.value} );
      }
    }

};

Template.tripDetail.events({
  "click .delete": function () {
    Trips.remove(this._id);
  }
});
