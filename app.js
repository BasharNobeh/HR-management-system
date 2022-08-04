

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