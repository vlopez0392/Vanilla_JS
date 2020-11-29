/*
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat. 

Use JS to randomly create a three-course meal based on what is available on a menu. The user will keep running until he or she is satisfied with the generated meal!
*/ 

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [], 
  
      //Getters OK
      get getAppetizers(){
          return this.appetizers;
      },
      get getMains(){
          return this.mains;
      },    
      get getDesserts(){
          return this.desserts;
      },
  
      //Setters OK
      set setAppetizers(appetizersIn){
        this.appetizers.push(appetizersIn);
      },
      set setMains(mainsIn){
        this.mains.push(mainsIn);
      },    
      set setDesserts(dessertsIn){
        this.desserts.push(dessertsIn);
      },
    },
  
    get courses(){
      return{
        appetizers: this._courses.getAppetizers,
        mains: this._courses.getMains,
        desserts: this._courses.getDesserts,
      }
    }, 
  
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice, 
      };
  
      courseName = courseName.toLowerCase();
      switch(courseName){
        case 'appetizers':
          this._courses.setAppetizers = dish;
          break;
        case 'mains':
          this._courses.setMains = dish;
          break;
        case 'desserts':
          this._courses.setDesserts = dish;
          break;
        default: 
          console.log('I don\'t get that courseName');
      }
    }, 
  
    getRandomDishFromCourse: function(courseName){
        let dishes = this._courses[courseName];
        let randomDish = Math.floor(Math.random()*dishes.length);
  
        return dishes[randomDish];
    },

generateRandomMeal: function(){
  let appetizer = this.getRandomDishFromCourse('appetizers');
  let main = this.getRandomDishFromCourse('mains');
  let dessert = this.getRandomDishFromCourse('desserts');

  const totalPrice = appetizer.price + main.price + dessert.price;

  console.log(`HERE'S A NICE THREE COURSE MEAL:
-------------------------------------------------------
  Appetizer: ${appetizer.name} 
  Price: $ ${appetizer.price}  
  Main: ${main.name}           
  Price: $ ${main.price}
  Dessert: ${dessert.name} 
  Price: $ ${dessert.price}
                      
  TOTAL PRICE: $ ${totalPrice}
-----------------------------------------------------`);
    }
  };

menu.addDishToCourse('appetizers', 'Nachos', 1.25);
menu.addDishToCourse('mains', 'Hamburger', 5.25);
menu.addDishToCourse('desserts', 'Ice Cream', 3.25);

menu.addDishToCourse('appetizers', 'Chicken Wings', 2.25);
menu.addDishToCourse('mains', 'Ceasar Salad', 5.25);
menu.addDishToCourse('desserts', 'Chocolate lava cake', 2.50);

menu.generateRandomMeal();