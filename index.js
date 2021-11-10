const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};
