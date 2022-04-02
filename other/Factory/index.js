function Developer(name) {
    this.name = name;
    this.type = 'Developer';
}

function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}

function WhoTries(name) {
    this.name = name;
    this.type = 'WhoTries';
}

function EmployeeFactory() {
    /* this.create = function () {} */
    this.create = (name, type) => {
        switch (name, type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
            case 3:
                return new WhoTries(name);
                break;
        }
    }
}

function say() {
    console.log('Hi, I am ' + this.name + ' and I am a ' + this.type)
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('John', 2));
employees.push(employeeFactory.create('Taylor', 1));
employees.push(employeeFactory.create('Jamie', 1));
employees.push(employeeFactory.create('Tim', 2));
employees.push(employeeFactory.create('Zaiko', 3));

employees.forEach( emp => {
    say.call(emp);
}); 