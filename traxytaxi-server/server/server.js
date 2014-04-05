/**
 * Created by udantha on 4/5/14.
 */
Meteor.publish("taxies", function () {
//  return Parties.find(
//    {$or: [{"public": true}, {invited: this.userId}, {owner: this.userId}]});
    return Taxi.find({});
});