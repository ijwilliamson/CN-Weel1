//Objects - Activity 3

// Simple class for drinks
class Drink {
    constructor (drinkType, smallPrice, regularPrice, largePrice) {
        this.drinkType = drinkType;
        this.smallPrice = smallPrice;
        this.regularPrice = regularPrice,
        this.largePrice = largePrice}
    }
    
// Simple class for foods
class Food {
    constructor (foodType, vegetarian, vegan, price) {
        this.foodType = foodType;
        this.vegetarian = vegetarian;
        this.vegan = vegan;
        this.price = price;
    }
}
let shop = {
    Branch: "Rossendale",
    Drinks: [
        new Drink("Coffee", 1.50,2.50,3.50),
        new Drink("Tea", 1.25,1.99,2.50),
        new Drink("Hot Chocolate", 1.50,2.20,3.20),
        new Drink("Water", 0.75)
    ],
    Food: [
        new Food("Beans on Toast",true,true,4.99),
        new Food("Scrambled Eggs on Toast", true, false, 4.99),
        new Food("Chilli",false,false,5.50),
        new Food("Ham Sandwich", false,false,3.20),
        new Food("Tuna Sandwich",true,false,3.20),
        new Food("Salad Sandwich",true,true,3.00)
    ],

    drinksOrdered(drinkName) {
          
        selectedDrinks = [];
        totalPrice = 0;
        drinkName.split(",").forEach(drinkItem => {
           let tempDrink = this.Drinks.find((Element) => Element.drinkType == drinkItem);
           if (typeof(tempDrink) == "undefined")
                {
                    console.log(`We do not sell ${drinkItem} `)
                }
                else
                {
                    selectedDrinks.push(tempDrink);
                    totalPrice += tempDrink.smallPrice;
                };

        });

        console.table(selectedDrinks)
        console.log(`Your drinks costs £${totalPrice}`);
        return totalPrice;

    
    },

    foodOrdered(FoodName) {
        
        selectedFoods = [];
        totalPrice = 0;
        FoodName.split(",").forEach(foodItem => {
           let tempFood = this.Food.find((Element) => Element.foodType == foodItem);
           if (typeof(tempFood) == "undefined")
                {
                    console.log(`We do not sell ${foodItem} `)
                }
                else
                {
                    selectedFoods.push(tempFood);
                    totalPrice += tempFood.price;
                };

        });

        console.table(selectedFoods)
        console.log(`Your food costs £${totalPrice}`);
        return totalPrice;
    },

    placeOrder(drinks, food) {
        console.log("Thank you for your order \n \n")
        console.log(`Total Price = £${(this.foodOrdered(food)+this.drinksOrdered(drinks)).toFixed(2)}`);
    }
}



console.clear()
shop.placeOrder(
    "Coffee,Coffee,Tea,Water,Water,Coke",
    "Cheese,Chilli,Ham Sandwich,Beans on Toast",
);




