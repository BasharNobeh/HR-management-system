var unique = 1000;


function netSalary(salaryy) {
  return salaryy - salaryy * 0.075;
}

function Employee(employeeName, department, level, image) {
  this.id = 0;
  this.employeeName = employeeName;
  this.department = department;
  this.employeeSalary = 0;
  this.level = level;
  this.image = image;
}

Employee.prototype.render = function (wrapperId) {
const wrapper = document.getElementById(wrapperId);
  const container = document.createElement("div");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");
  container.className = "container2";
  paragraph.className = "text2";
  image.style.height = "200px";
  image.style.width = "250px";
  image.src = this.image;
  paragraph.innerHTML = `Name :${
    this.employeeName
  }-ID :${this.id}<br>Department:${this.department}- Level:${
    this.level
  }<br>  ${parseInt(
    this.employeeSalary - this.employeeSalary * 0.075)}`
  container.appendChild(image);
  container.appendChild(paragraph);
  
  wrapper.appendChild(container);
  
};

Employee.prototype.generate = function () {
  var temp = this.level;
  this.id = ++unique;
  if (temp === "Senior") {
    this.employeeSalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
  }
  if (this.level == "Mid-Senior") {
    this.employeeSalary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
  }
  if (this.level == "Junior") {
    this.employeeSalary = Math.floor(Math.random() * (1000 - 500)) + 500;
  }
};

const employee1 = new Employee(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "images/Ghazi.jpg"
);

employee1.generate();
employee1.render("seniors");
const employee2 = new employee(
  "Lana Ali",
  "Finance",
  "Senior",
  "images/Lana.jpg"
);
employee2.generate();
employee2.render("seniors");
const employee4 = new employee(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "images/Safi.jpg"
);
employee4.generate();
employee4.render("midSeniors");

const employee3 = new employee(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "images/Tamara.jpg"
);
employee3.generate();
employee3.render("seniors");
const employee6 = new employee(
  "Rana Saleh",
  "Development",
  "Junior",
  "images/Rana.jpg"
);
employee6.generate();
employee6.render("juniors");
const employee7 = new employee(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "images/Hadi.jpg"
);
employee7.generate();
employee7.render("midSeniors");
const employee5 = new employee(
  "Omar Zaid",
  "Development",
  "Senior",
  "images/Omar.jpg"
);
employee5.generate();
employee5.render("seniors");
