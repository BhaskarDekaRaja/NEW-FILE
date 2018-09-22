class Emp
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
		console.log("-------------------");
	}
}
let e1 = new Emp("Raju",21,15000,"Clerk");
let e2 = new Emp("Poornima",31,25000,"Programmer");
let e3 = new Emp("Mohan",41,65000,"Manager");
e1.display();
e2.display();
e3.display();