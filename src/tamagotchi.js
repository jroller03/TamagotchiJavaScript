export class Tamagotchi {
  constructor(name,type) {
    this.name = name;
    this.type = type; // type of animal
    this.hungryMeter = 500;
    this.happyMeter = 100;
    this.disciplineMeter = 100;
    this.age = 0;
    this.time = new Date();
  }

  setHunger() {
    setInterval(() => {
      this.hungryMeter--;
    },1000);
  }

  setHappy() {
    setInterval(() => {
      this.happyMeter--;
    },60*1000);
  }

  setDiscipline() {
    setInterval(() => {
      this.disciplineMeter--;
    }, 60 * 60 * 1000);
  }

  setAge() {
    setInterval(() => {
      this.age++; // increment
    }, 2*60*1000);
  }

  setSleep() {
    setInterval(() => {
    this.happyMeter += 1; 
      this.hungryMeter -= 5;
      this.disciplineMeter += 5;
    }, 1000);
  }

  petThem() {
    this.happyMeter++; // increment the happy meter by one
  }

  playWithThem() {
    this.happyMeter++;
  }

  feedThem() {
    this.hungryMeter += 10;
  }

  isItDead() {
    if( this.hungryMeter <= 0 && this.happyMeter <= 0 ) {
      return true;
    } else {
      return false;
    }
  }

  scoldPet() {
    this.disciplineMeter++;
  }
  getDesciplineMeter() {
    return this.disciplineMeter;
  }

  getHappyMeter() {
    return this.happyMeter;
  }

  getHungryMeter() {
    return this.hungryMeter;
  }

  getStages() {
    if( this.age  <= 1 ) {
      return "Baby";
    } else if( this.age <=5 ) {
      return  "Child";
    } else if (this.age <=10 ) {
      return "Teen";
    } else if (this.age <=20) {
      return "Adult";
    } else if( this.age >=25) {
      return "Senior";
    }
  }


}
