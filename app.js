<<<<<<< HEAD
var unique = 1000;



function netSalary(salaryy){
    return salaryy- (salaryy *0.075);
}

function employee(employeeName, department, level) {
    this.id = 0;
    this.employeeName = employeeName;
    this.department = department;
    this.employeeSalary = 0;
    this.level = level;
    this.image = null;
    
   

}
employee.prototype.render = function () {  
    document.write(`<p> Employee name: ${this.employeeName} <br> Department:  ${this.department} <br> Employee salary: ${parseInt(this.employeeSalary-(this.employeeSalary *0.075))} <br> </p><br>`);
}
employee.prototype.generate = function(){
    var temp = this.level;
    this.id = ++unique;
    if(temp === "Senior"){
        this.employeeSalary =(Math.floor(Math.random() * (2000 - 1500)) + 1500);
    }
    if(this.level == "Mid-Senior"){
        this.employeeSalary =(Math.floor(Math.random() * (1500 - 1000)) + 1000);

    }
    if(this.level == "Junior"){
         this.employeeSalary = (Math.floor(Math.random() * (1000 - 500)) + 500);

    }
}

const employee1 = new employee("Ghazi Samer", "Administration", "Senior")
employee1.generate()
employee1.render()
const employee2 = new employee("Lana Ali", "Finance", "Senior")
employee2.generate()
employee2.render()
const employee3 = new employee("Tamara Ayoub", "Marketing", "Mid-Senior")
employee3.generate()
employee3.render()
const employee4 = new employee("Safi Walid", "Administration", "Senior")
employee4.generate()
employee4.render()
const employee5 = new employee("Omar Zaid", "Development", "Junior")
employee5.generate()
employee5.render()
const employee6 = new employee("Rana Saleh", "Development", "Mid-Senior")
employee6.generate()
employee6.render()
const employee7 = new employee("Hadi Ahmad", "Finance", "Mid-Senior")
employee7.generate()
employee7.render()



 




=======


var uniqueID = 999












// Employees Objects //

// Employee 01 

const firstEmployee = {
    employeeId: ++uniqueID,
    fullName: "Ghazi Samer",
    department: "Administration",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }     
}

// Employee 02 

const SecondEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Lana Ali",
    department: "Finance",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Employee 03 

const thirdEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Employee 04 

const fourthEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Safi Walid",
    department: "Administration",
    level: 'Mid-Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Employee 05

const fifthEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Omar Zaid",
    department: "Development",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Employee 06

const sixthEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Rana Saleh",
    department: "Development",
    level: 'Junior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Employee 07

const seventhEmployee = {
    employeeId: ++uniqueID, 
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: 'Mid-Senior',
    imageUrl: "www.google.com",
    salary: 0,
    generateRandomSalary(employeeLevel) {
        let min = 0;
        let max = 0;
        if (employeeLevel == "Junior") {
            min = 500;
            max = 1000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Mid-Senior") {
            min = 1000;
            max = 1500;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
        } else if (employeeLevel == "Senior") {
            min = 1500;
            max = 2000;
            let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
            return randomSalary;
            
        }
        
        return randomSalary-(randomSalary*0.075);
    }, generateIDNumber(){
        return id++;
    }
}

// Outputting employees objects //

function outputtingEmployeesObjects(object){
    let name = "Employee name: " + object.fullName;
    let salary = "Employee Salary: " + object.generateRandomSalary(object.level);
    console.log(name);
    console.log(salary);
}

outputtingEmployeesObjects(firstEmployee);
outputtingEmployeesObjects(SecondEmployee);
outputtingEmployeesObjects(thirdEmployee);
outputtingEmployeesObjects(fourthEmployee);
outputtingEmployeesObjects(fifthEmployee);
outputtingEmployeesObjects(sixthEmployee);
outputtingEmployeesObjects(seventhEmployee);
>>>>>>> main
