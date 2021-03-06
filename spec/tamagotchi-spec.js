import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {

  let pet = new Tamagotchi("Browny","Dog");

  beforeEach(function() {
    jasmine.clock().install();
    pet.setHunger();
    pet.setHappy();
    pet.setDiscipline();
    pet.setAge();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name browny and have a hungry level of 40', function() {
    expect(pet.name).toEqual("Browny");
    jasmine.clock().tick(10001);  //
    expect(pet.hungryMeter).toEqual(40);
  });

  it('should have died by now', function() {
      jasmine.clock().tick(1000000000);
      expect(pet.isItDead()).toEqual(true);
  });

  it('should be 2 years old after 2 minutes', function() {
    pet.age = 0;
    jasmine.clock().tick(4*60*1000);
    console.log(pet.age);
    expect(pet.age).toEqual(2);
  });

  it('should be a teen by now', function() {
    pet.age = 0;
    jasmine.clock().tick(20*60*1000);
    console.log(pet.age);
    expect(pet.getStages()).toEqual("Teen");
  });

  it('should have a happy meter value of 50' ,function() {
    pet.happyMeter = 100;
    jasmine.clock().tick(50*60*1000);
    expect(pet.happyMeter).toEqual(50);
  });

  it('should have a displine value of ' , function() {
    pet.disciplineMeter = 21;
    pet.scoldPet();
    expect(pet.getDesciplineMeter()).toEqual(22);
  });
});
