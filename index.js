const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newList = {...employee}
    newList[key] = value
    return newList
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['streetAddress'] = '12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}