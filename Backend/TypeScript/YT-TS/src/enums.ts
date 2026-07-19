// enum restrict user to software given set of values, it is a way to define a set of named constants. It can be used to represent a collection of related values that can be numeric or string values. Enums are useful when we want to represent a fixed set of options or choices in our code.

// Numeric Enums : In numeric enums, each member has a numeric value associated with it. By default, the first member is assigned the value 0, and the subsequent members are assigned incremented values. We can also explicitly assign values to the members if needed.

enum CupSize {
    SMALL, // 0
    MEDIUM, // 1
    LARGE // 2
}

const size = CupSize.MEDIUM; // here size is assigned the value of CupSize.MEDIUM, which is 1. We can use this enum to represent different cup sizes in our code.

// sometimes people use incremented values for enums, but it is not a good practice as it can lead to confusion and errors. It is better to use explicit values for enums, especially when the values have specific meanings or are used in calculations.
enum StatusCode {
    PENDING = 100,
    SERVED, // 101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}
function makeChai(type: ChaiType) {
    console.log(`Making ${type} chai...`);
}

makeChai(ChaiType.GINGER) ;
// makeChai("masala") ; // this will give an error, as "masala" is not a valid value of ChaiType enum. We can only use the values defined in the enum, which are ChaiType.MASALA and ChaiType.GINGER. This helps to restrict the user to the given set of values and avoid errors in our code.


enum RandomEnum {
    ID = 1,
    NAME = "John",
}
// this is not good practice to mix numeric and string values in an enum, as it can lead to confusion and errors. It is better to use either all numeric values or all string values in an enum.


const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.MEDIUM; // here s is assigned the value of Sugars.MEDIUM, which is 2. We can use this const enum to represent different sugar levels in our code. The const enum will be inlined at compile time, so it will not generate any extra code in the output JavaScript file. This can help to reduce the size of the output file and improve performance.