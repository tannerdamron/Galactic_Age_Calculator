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
    let userInfoTest = new UserInfo("45");
    expect(userInfoTest.mercuryYearsOld("45").toFixed(1)).toEqual("10.8");
  });

  it('should test for calculating Mercury years left', function () {
    let userInfoTest = new UserInfo("45", "78.69");
    expect(userInfoTest.mercuryYearsLeft("10.8", "78.69").toFixed(1)).toEqual("8.1");
  });

  it('should test for calculating Venus years old', function () {
    let userInfoTest = new UserInfo("45");
    expect(userInfoTest.venusYearsOld("45").toFixed(1)).toEqual("27.9");
  });

  it('should test for calculating Venus years left', function () {
    let userInfoTest = new UserInfo("45", "78.69");
    expect(userInfoTest.venusYearsLeft("27.9", "78.69").toFixed(1)).toEqual("20.9");
  });
});