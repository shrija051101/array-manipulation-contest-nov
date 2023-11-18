let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(person=>{
        if (person.profession==="developer"){
            console.log(person.name)
        }
    });
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = parseInt(prompt("Enter age:"));
    let profession = prompt("Enter profession:");
    let newPerson = { name, age, profession };
    data.push(newPerson);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data1 = [
        { name: "joseph", age: 30, profession: "tester" },
        { name: "mitchell", age: 22, profession: "designer" },
      ];
    
      let result = data.concat(data1);
      console.log(result);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = data.reduce((sum, person) => sum + person.age, 0);
    let average = totalAge / data.length;
    console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let isAbove25 = data.some(person => person.age > 25);
    console.log(isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let professionsSet = new Set(data.map(person => person.profession));
    let uniqueProfessionsArray = [...professionsSet];
    console.log(uniqueProfessionsArray);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a - b);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let john = data.find(person => person.name === "john");
    if (john) {
    john.profession = "CEO";
   }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = data.filter(person => person.profession === "developer").length;
    let adminCount = data.filter(person => person.profession === "admin").length;
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
  }