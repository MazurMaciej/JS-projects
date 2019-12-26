class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`This line is  + ${this.name} - id: ${this.id}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInormation() {
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

const accounting = new Department('d1','Accounting');

accounting.addEmployee('Maciej');
accounting.addEmployee('Olimpia');
accounting.printEmployeeInormation();
// accounting.describe()

// const accountingCopy = { name: 'DUMMY' ,describe: accounting.describe}

// accountingCopy.describe();