const Dinosaur = require('../models/dinosaur.js');
const Park = function(name, ticket_price, dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.add_dinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove_dinosaur = function(dinosaur){
   index = this.dinosaurs[dinosaur];
   this.dinosaurs.splice(index,1);
}

Park.prototype.best_attraction = function(){
    // Set a baseline dinosaur, dinosaurMax, for comparison, with null values, or 0 guests
    // Loop through each dino, in the dinosaurs list
    // If the dino guests attracted > baseline dinosaur guests, replace the baseline with that dino, say dino1
    // Then next item in the array, if dino2 guests attracted > dino 1 guests, repeat as above etc.
    // End loop
    // Return our final dinosaurMax

    let dinosaurMax = new Dinosaur(null, null, 0);
    // let dinosaurMax = [];
    // let dinosaurMax = {};

    for (let dino of this.dinosaurs){ // for each dino object in the dinosaurs list
        // let dino_value = dino['guestsAttractedPerDay'];
        // let dino_max_value = dinosaurMax['guestsAttractedPerDay'];
        
        let dino_value = dino.guestsAttractedPerDay; // Grabs the value of the guests key from dino obect
        let dino_max_value = dinosaurMax.guestsAttractedPerDay;
        if (dino_value > dino_max_value){
            dinosaurMax = new Dinosaur(dino.species, dino.diet, dino.guestsAttractedPerDay);
            
            // dinosaurMax = [dino.species, dino.diet, dino.guestsAttractedPerDay]
        };
    }
    return dinosaurMax.species;

    // return this.dinosaurs; // Did this for a test, interestingly it is only returning [150, 80], not the whole dino??


    // Also tried:
    // for (i = 0; i < this.dinosaurs.length; i++){
    //     // if (i.guestsAttractedPerDay > dinosaur1.guestsAttractedPerDay){
    //     //     this.dinosaur1 = i;
    //     // }
    //     if (i.guestsAttractedPerDay > (i-1).guestsAttractedPerDay){
    //         dinosaur1 = i;
    //     }
    // }
    // return dinosaur1;
    // return this.dinosaur1

    // Alternative way to try make work:
    // let max_num_guests = Math.max(this.dinosaurs.guestsAttractedPerDay);
    // return max_num_guests.guestsAttractedPerDay;
    // Then find which dinosaur matches up with the max value found
    // This avoids having to import dinosaur here

}

Park.prototype.same_species = function(search_species){
    let list_of_dinos = [];
    for (dino of this.dinosaurs){
        if (dino.species === search_species){
            list_of_dinos.push(dino);
        }
    }
    return list_of_dinos;
    // This is returning an empty list. So the return is okay
    // Its like it cant find dino.species, or they simply do not match
}


module.exports = Park;