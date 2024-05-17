class Pizza {
    hasPepperoni: boolean;
    hasSauce: boolean;
    hasCheese: boolean;
    bakeTime = 30;
  
    constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
    }
  
   public bake():void {
      setTimeout(() => console.log('Enjoy your pizza!'));
    }
  }
  
  class Pasta {
    pastaType: string;
    hasSauce: boolean;
    hasCheese: boolean;
    cookTime = 30;
  
    constructor(pastaType: string, hasSauce: boolean, hasCheese: boolean) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
    }
  
   public cook():void {
      setTimeout(() => console.log('Enjoy your pasta!'));
    }
  }
  
  class Kitchen {
    makeDish(dish: Pizza | Pasta):string {
      if ('bake' in dish) {
        dish.bake();
        return `Enjoy your pizza`;
      } else if ('cook' in dish) {
        dish.cook();
        return `Enjoy your pasta!`;
      }
      throw new Error('Unknown dish');
    }
  }
  
  const kitchen = new Kitchen();
  const pizza = new Pizza(true, true, false);
  const pasta = new Pasta('spagetti', true, true);
  
  kitchen.makeDish(pizza);
  kitchen.makeDish(pasta);