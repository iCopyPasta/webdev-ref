function printMyName(name) {
    console.log(name);
  }
  
  printMyName("Pablo");
  
  const printMyNameConst = (name) => {
    console.log(name);
  }
  
  // only for one argument
  const printMyNameConstShort = name => {
    console.log(name);
  }
  
  // empty pair for no args
  const printMyNameConst2 = () => {
    console.log("No Args");
  }
  
  // 2+ args
  const printMyNameConst3 = (name, age) => {
    console.log(name, age);
  }
  
  // for tail returns
  const multipple = (number) => {
    return number * 2;
    
  }
  
  // tail return, w/ omissions
  const multipleShort = number => number * 2;