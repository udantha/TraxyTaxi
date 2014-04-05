/**
 * Created by udantha on 4/5/14.
 */
//Meteor.publish("taxies", function () {
//    return Taxi.find({});
//});

//test entries
if(Taxi.find().count()==0){
    console.log('adding data..');
    Taxi.insert({name: "Upul", latitude: "6.944074", longitude: "79.879164"});
    Taxi.insert({name: "Upul", latitude: "6.940730", longitude: "79.879690"});
    Taxi.insert({name: "Upul", latitude: "6.939590", longitude: "79.877823"});
    Taxi.insert({name: "Upul", latitude: "6.946098", longitude: "79.878016"});
    Taxi.insert({name: "Upul", latitude: "6.944628", longitude: "79.883488"});
    Taxi.insert({name: "Upul", latitude: "6.939963", longitude: "79.876783"});

}