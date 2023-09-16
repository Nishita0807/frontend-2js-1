const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
const moreData = [
  { name: "Nishita Rani", age: 21, profession: "mern stack developer" },
  { name: "Ganesh kumar", age: 21, profession: "full stack developer" },
];
// 1. Print Developers
function printDeveloper() {
  data.forEach(person => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  // Create a new data object
  const newData = { name, age, profession };

  // Add the new data object to the array
  data.push(newData);

  // Print the updated array
  console.log("Updated data array:", data);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter((person) => person.profession !== "admin");
  data.length = 0; // Clear the original data array
  data.push(...filteredData); // Push the filtered data back into the original array
  console.log("After removeAdmin:", data);
}

// 4. Concatenate Array
function concatenateArray() {
  const concatenatedArray = data.concat(moreData); // Concatenate the two arrays
  console.log(concatenatedArray); // Log the concatenated array
}

// 5. Average Age
function averageAge() {
  let sumOfAges = 0;

  for (let i = 0; i < data.length; i++) {
    sumOfAges += data[i].age;
  }

  // Step 2: Divide the sum by the number of people
  const numberOfPeople = data.length;
  const average = sumOfAges / numberOfPeople;

  // Step 3: Log the average age
  console.log("Average age:",average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);

  if (isAbove25) {
    console.log("At least one person is older than 25.");
  } else {
    console.log("No one is older than 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const distinctProfessions = [];

  // Iterate through the data array
  for (const person of data) {
    const profession = person.profession;

    // Check if the profession is not already in the distinct professions array
    if (!distinctProfessions.includes(profession)) {
      distinctProfessions.push(profession);
    }
  }

  // Log the distinct professions
  console.log(distinctProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  // Print the sorted array
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map((person) => {
    if (person.name === "john") {
      return { ...person, profession: "manager" };
    } else {
      return person;
    }
  });
  console.log(updatedData);
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;

  for (const person of data) {
    if (person.profession === "developer") {
      developerCount++;
    } else if (person.profession === "admin") {
      adminCount++;
    }
  }

  console.log("total developer count",developerCount);
  console.log("total admin count",adminCount);
}
