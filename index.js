/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Function to create an employee record
function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create multiple employee records from an array
  function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(createEmployeeRecord);
  }
  
  // Function to create a time-in event for an employee
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    });
    return this;
  }
  
  // Function to create a time-out event for an employee
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
    return this;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // Convert hours into decimal format
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // Function to calculate all wages for an employee
  function allWagesFor() {
    const allDates = this.timeInEvents.map(event => event.date);
    return allDates.reduce((totalWages, date) => {
      return totalWages + wagesEarnedOnDate.call(this, date);
    }, 0);
  }
  
  // Function to find an employee by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // Function to calculate total payroll for all employees
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => {
      return totalPayroll + allWagesFor.call(employeeRecord);
    }, 0);
  }
  