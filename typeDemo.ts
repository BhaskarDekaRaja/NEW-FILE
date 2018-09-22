class Emp
{
    name;
    age;
    name1:string;
    age1:number;
    constructor(name,age,name1,age1)
    {
        this.name = name;
        this.age = age;
        this.name1 = name1;
        this.age1 = age1;
    }
    display()
    {
        console.log("Name : "+this.name);
        console.log("Age : "+this.age);
        console.log("Name1 : "+this.name1);
        console.log("Age1 : "+this.age1);
    }
}
let e1 = new Emp(true,"Rajeev","Rajeev",22);
e1.display();