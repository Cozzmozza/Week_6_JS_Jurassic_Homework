const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    let dinosaur_1 = new Dinosaur ('Big Ones', 'Pineapples', 150)
    let dinosaur_2 = new Dinosaur ('Small bois', 'Gluten', 80)
    let dinosaurs = [dinosaur_1, dinosaur_2]
    park = new Park('Historical Thiccs', 185.00, dinosaurs);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Historical Thiccs');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 185.00);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });
  
  it('should be able to add a dinosaur to its collection',function(){
    let dinosaur_3 = ('Riggidy Rex', 'Pizza', 1000);
    park.add_dinosaur(dinosaur_3)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    let dinosaur = this.dinosaur_2;
    park.remove_dinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    // Could grab a whole dinosaur, but it is nicer if we just grab a species
    const actual = park.best_attraction();
    // const actual = park.dinosaurMax
    assert.strictEqual(actual, 'Big Ones');
    // Note, we will return just the species from best_attraction eventually
    // For now, just trying to return the dinosaur itself to see what happens in the terminal
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    search = 'Big Ones';
    const actual = park.same_species(search);
    assert.strictEqual(actual,1);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
