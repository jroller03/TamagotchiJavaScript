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
    jasmine.clock().tick(2000);
    console.log(pet.age);
    expect(pet.age).toEqual(2);
  });
});
