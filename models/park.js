const Dinosaur = require('../models/dinosaur.js');

const Park = function(name, ticket_price, dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = dinosaurs;
    // Instructor method:
    // this.dinosaurs = [];
}

Park.prototype.add_dinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove_dinosaur = function(dinosaur){
   index = this.dinosaurs[dinosaur];
   // instructor method:
   // cost index = this.dinosaurs.indexOf(dino);
   this.dinosaurs.splice(index,1);
}

Park.prototype.best_attraction = function(){
    // Set a baseline dinosaur, dinosaurMax, for comparison, with null values, or 0 guests
    // Loop through each dino, in the dinosaurs list
    // If the dino guests attracted > baseline dinosaur guests, replace the baseline with that dino, say dino1
    // Then next item in the array, if dino2 guests attracted > dino 1 guests, repeat as above etc.
    // End loop
    // Return our final dinosaurMax

    let dinosaurMax = new Dinosaur(null, null, null);
    // Instructor method:
    // let dinosaurMax = this.dinosaurs[0]
    // I.e. they set the baseline dino, to the first dino in the list
    // Their method much better. Avoids having to import Dinosaur

    for (let dino of this.dinosaurs){ 
        let dino_value = dino.guestsAttractedPerDay;
        let dino_max_value = dinosaurMax.guestsAttractedPerDay;
        if (dino_value > dino_max_value){
            dinosaurMax = dino;
        };
    }
    return dinosaurMax.species;
}

Park.prototype.same_species = function(search_species){
    let list_of_dinos = [];
    for (dino of this.dinosaurs){
        if (dino.species === search_species){
            list_of_dinos.push(dino);
        }
    }
    return list_of_dinos;
}

Park.prototype.total_daily_visitors = function(){
    let total = 0;
    for (dino of this.dinosaurs){
        total += dino.guestsAttractedPerDay;
    }
    return total;
}   

Park.prototype.total_annual_visitors = function(days_open){
    let total = this.total_daily_visitors() * days_open;
    return total;
}

Park.prototype.total_annual_revenue = function(days_open){
    let total = this.total_annual_visitors(days_open) * this.ticket_price;
    return total;
}

Park.prototype.remove_by_species = function(species){
    const newDinos = [];
    // We cannot delete as we go through the list, as the loop is based on index number
    // I.e. if we delete index 1, everything then moves up one, so there is a new index 1..

    // Instead, we are replacing the dinosaurs list with a new list of dinos, where it
    // does NOT match the species

    for (const dino of this.dinosaurs){
        if (dino.species !== species){
            newDinos.push(dino);
        }
    }
    this.dinosaurs = newDinos;
}

Park.prototype.numberOfDinosByDiet = function(){
    let numberOfDinosByDiet = {};
    for (const dino of this.dinosaurs){
        if (numberOfDinosByDiet[dino.diet]){ // if the diet key is there
            numberOfDinosByDiet[dino.diet] += 1; //add 1 to the value of the diet in the object
        } else {
            
        }
    }
}
module.exports = Park;