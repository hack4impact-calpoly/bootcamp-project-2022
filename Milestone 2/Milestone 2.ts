// This is the data we'll be working with!

interface Volunteer {
  name: string;
  age: number;
  email: string;
  position: "volunteer" | "staff";
  city: string;
  state: string;
}

const userData: Volunteer[] = [
  {
    name: "Joe",
    age: 30,
    email: "joe@email.com",
    position: "volunteer",
    city: "LA",
    state: "CA",
  },
  {
    name: "Jenny",
    age: 24,
    email: "jenny@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Jeff",
    age: 40,
    email: "jeff@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
  {
    name: "Julie",
    age: 34,
    email: "julie@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Lucy",
    age: 21,
    email: "lucy@email.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
  {
    name: "Lee",
    age: 27,
    email: "lee@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Leander",
    age: 29,
    email: "leander@email.com",
    position: "staff",
    city: "SB",
    state: "CA",
  },
  {
    name: "Luna",
    age: 66,
    email: "luna@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
];

// Questions Start Here

// Question 1: Lambda Functions
/* Define a new lambda function that finds the average age of the people in the data. 
  Hint: user data is stored in the userData object above. 
*/
type GetNumber = (data: Volunteer[]) => number;
// let findAverage:GetNumber;// Define lambda function here
let findAverage: GetNumber= (data: Volunteer[])=>{

    let total=0;
    for (let i=0; i<data.length; i++){
      total+=data[i].age;
    }
    return total/data.length;
    
} ;

//console.log(findAverage(userData));

// Question 2: Data Handling
// Please AVOID USING FOR LOOPS for questions 2 through 4
/* Use data handling function(s) to find the first index of someone from San Francisco (SF).
  Return -1 if no one is from San Francisco.
  Hint: Use a lambda function as a value
*/
let findIndexAns: GetNumber = (data: Volunteer[])=>{

    return data.findIndex(x => x.city == "SF") ;    // instead of using for loop, can use findIndex method
};
 // Code here

//console.log(findIndexAns(userData));

// Question 3: Filtering data
/* Use data handling function(s) to find all of the people from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[], minAge: number) => Volunteer[];
let findCAOverN: GetVolunteers= (data: Volunteer[], minAge: number)=>{

  return data.filter(item=> item.state==="CA" && item.age > minAge);  // return where state is CA and age is above threshold

}; // Code here

//console.log(findCAOverN(userData, 25));

// Question 4: Searching Data
/* Use data handling function(s) to find the first person from Santa Barbara (SB)
 */
type GetVolunteer = (data: Volunteer[]) => Volunteer | undefined;
let findSBStaff: GetVolunteer=(data: Volunteer[])=>{

  return data.find(item=> item.city==="SB");

}; // Code here

//console.log(findSBStaff(userData));

// Question 5: Spread Operator Part 1
let kyle: Volunteer = {
  name: "Kyle",
  age: 18,
  email: "kyle@email.com",
  position: "volunteer",
  city: "SD",
  state: "CA",
};

/* Lets make a clone of Kyle above using the spread operator and assign it to kyleClone
 */
type CopyVolunteer = (vol: Volunteer) => Volunteer;
let copyVolunteer: CopyVolunteer= (vol: Volunteer)=>{
  
    return {...vol};
  
}// Code here

// let kyleClone: Volunteer = copyVolunteer(kyle);
//console.log(kyleClone);

// Question 6: Spread Operator Part 2
/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
type UpdateVolunteer = (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => Volunteer;
let updateVolunteer: UpdateVolunteer= (
  vol: Volunteer,
  updates: Partial<Volunteer>
) => {

    return {...vol, ...updates};

} // Code here
// let updatedLocation = { city: "Seattle", state: "WA" };
// let kyleNew = updateVolunteer(kyleClone, updatedLocation);
//console.log(kyleNew);

// Question 7: Object Destructuring
/* Now that we have our updated kyle, lets use object destructuring to get his name, age, and city
 */

type GetVolunteerInfo = (vol: Volunteer) => String;
let getVolunteerInfo: GetVolunteerInfo = (vol) => {
  // let name, age, city; // Code here
  let name=vol.name;
  let age=vol.age;
  let city=vol.city;

  return `${name} is ${age} years old and lives in ${city}`;
};

// let kyleInfo = getVolunteerInfo(kyleNew);
//console.log(kyleInfo);

// Question 8: Putting it All Together!
/* Use all the skills we've covered today to get the *first* person from 
/* San Luis Obispo (SLO) over the age of 40, and return an updated
/* version of them with their position set to staff. If no one meets
/* these criteria, return undefined
 */

let daBigTest: GetVolunteer =(data:Volunteer[]) => {
  
    let volidx= data.findIndex(item => item.city==="SLO" && item.age> 40);
    if (volidx !== -1){
      let updateposition: Partial<Volunteer>= {position: "staff"};
      let newitem: Volunteer={...data[volidx], ...updateposition};
      return newitem;
    }
    else{
      return undefined
    }
  
}// Code here

//console.log(daBigTest(userData));

export {
  Volunteer,
  findAverage,
  findIndexAns,
  findCAOverN,
  findSBStaff,
  copyVolunteer,
  updateVolunteer,
  getVolunteerInfo,
  daBigTest,
};