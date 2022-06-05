const getEmployeeRole = (employeeName, employees) => {
  const foundEmployee = employees.find(
    employee => employee.name === employeeName
  );
  return foundEmployee.role;
};

module.exports = getEmployeeRole;
