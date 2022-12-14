// Write your solution in this file!
let employee = {
  name: "William Lawson",
  streetAddress: "1342 Pandhi Stret"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let updatedEmployee = {...employee, [key]: value};
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let {[key]: deleted, ...updatedEmployee} = employee;
  return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}