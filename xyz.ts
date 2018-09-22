abstract class Emp
{
    name;
    age;
    salary;
    desig;
    constructor(name,age,salary,desig)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.desig = desig;
    }
    display()
    {
        console.log("Name:"+this.name);
        console.log("Age:"+this.age);
        console.log("Salary:"+this.salary);
        console.log("Designation:"+this.desig);
    }
}
export class Manager extends Emp
{
    id;
    address;
    constructor(id,name,age,salary,desig,address)
    {
        super(name,age,salary,desig);
        this.id = id;
        this.address = address;
    }
    displayAll()
    {
        super.display();
        console.log('ID:'+this.id);
        console.log('Address:'+this.address);
    }
}
let e1 = new Manager(11,"Raj",22,20000,"Tester","Koramangala");
e1.displayAll();