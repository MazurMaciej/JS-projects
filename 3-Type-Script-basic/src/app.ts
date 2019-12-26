class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const accounting = new ITDepartment('d1',['Accounting']);

accounting.addEmployee('Maciej');
accounting.addEmployee('Olimpia');
accounting.printEmployeeInormation();
// accounting.describe()

// const accountingCopy = { name: 'DUMMY' ,describe: accounting.describe}

// accountingCopy.describe();