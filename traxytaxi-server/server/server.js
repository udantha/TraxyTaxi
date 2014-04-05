/**
 * Created by udantha on 4/5/14.
 */
//Meteor.publish("taxies", function () {
//    return Taxi.find({});
//});

//test entries
if(Taxi.find().count()==0){
    console.log('adding data..');
    Taxi.insert({id: "0712359841", status: "idle", name: "Upul", latitude: "6.940296", longitude: "79.878312"});   
        
    Taxi.insert({id: "0777158931", status: "hire", name: "Kapila", latitude: "6.944406", longitude: "79.875287"});
    // Update
    var hire_one = new Array(
      Taxi.update({id: "0777158931"}, {latitude: "6.944306", longitude: "79.875649"}),
      Taxi.update({id: "0777158931"}, {latitude: "6.944083", longitude: "79.876528"}),
      Taxi.update({id: "0777158931"}, {latitude: "6.943593", longitude: "79.877709"})
    );    
                
    Taxi.insert({id: "0712493258", status: "idle", name: "Sandun", latitude: "6.949461", longitude: "79.878503"});      
      
    Taxi.insert({id: "0776219872", status: "stop", name: "Surendra", latitude: "6.946098", longitude: "79.878016"});
    
    Taxi.insert({id: "0796229823", status: "hire", name: "Shehan", latitude: "6.950432", longitude: "79.880235"});
    // Update
    var hire_two = new Array(
      Taxi.update({id: "0796229823"}, {latitude: "6.950411", longitude: "79.880278"}),
      Taxi.update({id: "0796229823"}, {latitude: "6.950027", longitude: "79.880718"}),
      Taxi.update({id: "0796229823"}, {latitude: "6.949346", longitude: "79.880750"}),
      Taxi.update({id: "0796229823"}, {latitude: "6.949069", longitude: "79.879666"}),
      Taxi.update({id: "0796229823"}, {latitude: "6.948121", longitude: "79.878711"})
    );
    
    Taxi.insert({id: "0785123548", status: "hire", name: "Kavindu", latitude: "6.947631", longitude: "79.882188"});
    // Update
    var hire_three = new Array(
      Taxi.update({id: "0785123548"}, {latitude: "6.947919", longitude: "79.881544"}),
      Taxi.update({id: "0785123548"}, {latitude: "6.948313", longitude: "79.881029"}),
      Taxi.update({id: "0785123548"}, {latitude: "6.948590", longitude: "79.880407"}),
      Taxi.update({id: "0785123548"}, {latitude: "6.948771", longitude: "79.879709"})
    );
    
    Taxi.insert({id: "0778216828", status: "stop", name: "Kavinda", latitude: "6.939963", longitude: "79.876783"});
    
    Taxi.insert({id: "0779325982", status: "idle", name: "Venura", latitude: "6.939963", longitude: "79.876783"});
    
    Taxi.insert({id: "0712498379", status: "idle", name: "Jayasuriya", latitude: "6.939963", longitude: "79.876783"});
    
    Taxi.insert({id: "0771987354", status: "idle", name: "Somapala", latitude: "6.939963", longitude: "79.876783"});
    
    Taxi.insert({id: "0785139752", status: "hire", name: "Kasun", latitude: "6.950890", longitude: "79.874592"});
    // Update
    var hire_four = new Array(
      Taxi.update({id: "0785139752"}, {latitude: "6.950784", longitude: "79.875557"}),   
      Taxi.update({id: "0785139752"}, {latitude: "6.950634", longitude: "79.876909"}),   
      Taxi.update({id: "0785139752"}, {latitude: "6.950379", longitude: "79.878025"})
    );
}