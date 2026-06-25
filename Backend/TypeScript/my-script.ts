// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(1,2)) ;

// In memory DB using TS for Learn TS
type UserId = string;
interface User {
    id : UserId,
    fname : string ,
    lname? : string | undefined, // ? lagane se optional ho jata hai agar ise use nahi karenge toh agar humara string | undefined hai toh bhi hume key pass karni hi padegi
    email: string,
    contact: {
        mobile: string,
    },
    address : {
        street: number,
        pin: number,
        country: string
    }
}

class InMemoryDB{
    private _db: Map<UserId,User> 

    constructor(){
        this._db = new Map();
    }

    public insertUser(data: User) : UserId{
        if(this._db.has(data.id)){
            throw new Error(`User with id ${data.id} already exists`);
        }
        this._db.set(data.id, data);
        return data.id;
    }

    public updateUser(id: UserId, updateData: Omit<User, 'id'>): boolean{
        if(!this._db.has(id)){
            throw new Error(`User with id ${id} does not exist`);
        }
        this._db.set(id, {...updateData, id});
        return true;
    }
}

const myDB = new InMemoryDB();
myDB.insertUser({
    id: "1",
    fname: "John",
    email: "john.doe@example.com",
    contact: {
        mobile: "1234567890"
    },
    address: {
        street: 123,
        pin: 123456,
        country: "USA"
    }
});

myDB.updateUser("1", {
    fname: "John",
    email: "john.doe.updated@example.com",
    contact: {
        mobile: "0987654321"
    },
    address: {
        street: 456,
        pin: 654321,
        country: "Canada"
    }
});