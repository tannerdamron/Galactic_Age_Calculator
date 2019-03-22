import UserInfo from "../src/galactic-age";

describe('UserInfo', function() {

  it('should test for taking in users year born', function(){
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.birthYear).toEqual("1974");
  });

  it('should test for taking in users month born', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.birthMonth).toEqual("03");
  });

  it('should test for taking in users day born', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.birthDay).toEqual("20");
  });

  it('should test for taking in users lifes expectancy', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.lifeExpectancy).toEqual("78.69");
  });

  it('should test for getting users age based off of birthdate and current date', function() {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.getUserAge()).toEqual(45);
  })

  it('should test for calculating Mercury years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.mercuryYearsOld("45").toFixed(1)).toEqual("10.8");
  });

  it('should test for calculating Mercury years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.mercuryYearsLeft("10.8", "78.69").toFixed(1)).toEqual("8.1");
  });

  it('should test for calculating past Mercury life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect(`You have lived ` + Math.abs((userInfoTest.mercuryYearsLeft("28.56", "78.69"))).toFixed(1) + ` Mercury years past Mercury life expectancy`).toEqual(`You have lived 9.7 Mercury years past Mercury life expectancy`);
  });

  it('should test for calculating Venus years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.venusYearsOld("45").toFixed(1)).toEqual("27.9");
  });

  it('should test for calculating Venus years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.venusYearsLeft("27.9", "78.69").toFixed(1)).toEqual("20.9");
  });

  it('should test for calculating past Venus life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect(`You have lived ` + Math.abs((userInfoTest.venusYearsLeft("73.78", "78.69"))).toFixed(1) + ` Venus years past Venus life expectancy`).toEqual(`You have lived 25.0 Venus years past Venus life expectancy`);
  });

  it('should test for calculating Mars years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.marsYearsOld("45").toFixed(1)).toEqual("84.6");
  });

  it('should test for calculating Mars years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.marsYearsLeft("84.6", "78.69").toFixed(1)).toEqual("63.3");
  });

  it('should test for calculating past Mars life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect(`You have lived ` + Math.abs((userInfoTest.marsYearsLeft("223.72", "78.69"))).toFixed(1) + ` Mars years past Mars life expectancy`).toEqual(`You have lived 75.8 Mars years past Mars life expectancy`);
  });

  it('should test for calculating Jupiter years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.jupiterYearsOld("45").toFixed(1)).toEqual("533.7");
  });

  it('should test for calculating Jupiter years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.jupiterYearsLeft("533.76", "78.69").toFixed(1)).toEqual("399.5");
  });

  it('should test for calculating past Jupiter life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect(`You have lived ` + Math.abs((userInfoTest.jupiterYearsLeft("223.72", "78.69"))).toFixed(1) + ` Jupiter years past Jupiter life expectancy`).toEqual(`You have lived 709.5 Jupiter years past Jupiter life expectancy`);
  });
});