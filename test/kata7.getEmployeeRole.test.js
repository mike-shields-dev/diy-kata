const getEmployeeRole = require("../src/kata7.getEmployeeRole");

describe("getEmployeeRole", () => {
  test("returns the employee's role in the company", () => {
    const employees = [
      {
        name: "Satti",
        role: "Developer"
      },
      {
        name: "Jenny",
        role: "Sales Associate"
      },
      {
        name: "Javid",
        role: "Human Recommended Reading Assistant"
      }
    ];

    const employeeNames = employees.map(employee => employee.name);
    const employeeRoles = employees.map(employee => employee.role);

    expect(
      employeeNames.map(employeeName =>
        getEmployeeRole(employeeName, employees)
      )
    ).toStrictEqual(employeeRoles);
  });
});
