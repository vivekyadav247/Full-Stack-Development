class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour; // this.flavour assigns the value of the flavour parameter to the flavour property of the instance. The this keyword refers to the current instance of the class.
        this.price = price;
    }
}
// The Chai class has two properties, flavour and price, which are set through the constructor. The constructor takes two parameters, flavour and price, and assigns them to the respective properties of the instance. This class can be used to create instances of different types of chai with their respective flavours and prices.

const masalaChai = new Chai("masala", 20);
// Here we are creating an instance of the Chai class with flavour "masala" and price 20. The constructor is called with these values and the properties of the instance are set accordingly. We can create more instances of the Chai class with different flavours and prices as needed.

// const greenChai = new Chai() ; 
// It give error and it is good becuase it reduce our mistakes and we can only create chai with flavour and price. It is good practice to have a constructor that takes parameters to ensure that the instances of the class are created with the necessary properties set. This helps to avoid errors and ensures that the instances are in a valid state when they are created.




// Access Modifiers : Access modifiers are keywords that determine the visibility and accessibility of class members (properties and methods). In TypeScript, there are three access modifiers: public, private, and protected. By default, class members are public if no access modifier is specified.

class Tea{
    public flavour : string = "Masala"; 
    // public access modifier allows the flavour property to be accessed from anywhere, both inside and outside the class.

    private secretIngredient : string = "Cardamom"; 
    // private access modifier restricts the secretIngredient property to be accessed only within the Tea class. It cannot be accessed from outside the class or by subclasses.

    reveal(){
        return `The secret ingredient is ${this.secretIngredient}`; // this method can access the private property secretIngredient and return its value. It can be called from outside the class to reveal the secret ingredient.
    }


    protected shopName : string = "Chaiwala";
    // protected access modifier allows the shopName property to be accessed within the Tea class and its subclasses when you inherit from it, but not from outside the class hierarchy. This means that subclasses can access the shopName property, but external code cannot.

}




class Cup {
    readonly capacity: number = 250; // readonly access modifier allows the capacity property to be set only during initialization (in the constructor) and prevents it from being modified afterwards. This ensures that the capacity of the cup remains constant once it is set.

    constructor(capacity: number) {
        this.capacity = capacity; // this.capacity assigns the value of the capacity parameter to the capacity property of the instance. The this keyword refers to the current instance of the class.
    }
}




class ModernChai {
    private _sugar = 2 ; // _ use good practice to indicate private property

    get sugar() {
        return this._sugar; // getter method allows us to access the private property _sugar from outside the class. It returns the value of _sugar when called.
    }

    set sugar(value: number) {
        if(value < 0) {
            throw new Error("Sugar level cannot be negative"); // setter method allows us to set the value of the private property _sugar from outside the class. It takes a value parameter and checks if it is negative. If it is, it throws an error. Otherwise, it sets the value of _sugar to the provided value.
        }
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 3;
console.log(c.sugar); // Output: 3




// static members : Static members are properties or methods that belong to the class itself rather than to instances of the class. They can be accessed directly on the class without creating an instance. Static members are shared among all instances of the class.

class EkChai {
    static shopName : string = "Chaiwala"; // static property belongs to the class itself and can be accessed using the class name. It is shared among all instances of the class.

    constructor(public flavour: string){}
}

console.log(EkChai.shopName); // Output: Chaiwala



// abstract class : An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for other classes and can contain abstract methods (methods without implementation) that must be implemented by subclasses. Abstract classes are used to define common behavior and structure for related classes.

abstract class Beverage {
    abstract prepare(): void; // abstract method must be implemented by subclasses
}

class MyChai extends Beverage {
    prepare(): void {
        console.log("Preparing my chai...");
    }
}





class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat();
    }
}
// Here this is an composition of class , we can use instead of inheritance, we can use composition to create a ChaiMaker class that has a Heater instance as a dependency. The ChaiMaker class takes a Heater instance as a parameter in its constructor and uses it to heat the chai when the make method is called. This allows for better flexibility and separation of concerns, as we can easily swap out the Heater implementation if needed without changing the ChaiMaker class.