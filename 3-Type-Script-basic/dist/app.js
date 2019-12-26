"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`This line is  + ${this.name} - id: ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInormation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const accounting = new ITDepartment('d1', ['Accounting']);
accounting.addEmployee('Maciej');
accounting.addEmployee('Olimpia');
accounting.printEmployeeInormation();
//# sourceMappingURL=app.js.map