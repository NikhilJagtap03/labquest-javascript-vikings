// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  // attack method returns the strength
  attack() {
    return this.strength;
  }

  // receiveDamage method reduces the health by damage received
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  // Add a Viking to the Viking army
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  // Add a Saxon to the Saxon army
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // Viking attacks a random Saxon
  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  // Saxon attacks a random Viking
  saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);

    if (this.vikingArmy[randomVikingIndex].health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1); 
    }

    return result;
  }

  // Return the current status of the war
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
