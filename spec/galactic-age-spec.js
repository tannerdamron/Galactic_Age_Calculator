import UserInfo from "../src/galactic-age";

describe('UserInfo', function () {

  it('should test for taking in users year born', function () {
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

  it('should test for getting users age based off of birthdate and current date', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.getUserAge()).toEqual(45);
  });

  it('should test for calculating Mercury years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.mercuryYearsOld(45)).toEqual("10.8");
  });

  it('should test for calculating Mercury years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.mercuryYearsLeft(10.8, 78.69)).toEqual("You have 8.1 Mercury years left on Mercury");
  });

  it('should test for calculating past Mercury life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect((userInfoTest.mercuryYearsLeft(28.56, 78.69))).toEqual(`You have lived 9.7 Mercury years past Mercury's average life expectancy`);
  });

  it('should test for calculating Venus years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.venusYearsOld(45)).toEqual("27.9");
  });

  it('should test for calculating Venus years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.venusYearsLeft(27.9, 78.69)).toEqual("You have 20.9 Venus years left on Venus");
  });

  it('should test for calculating past Venus life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect((userInfoTest.venusYearsLeft(73.78, 78.69))).toEqual(`You have lived 25 Venus years past Venus' average life expectancy`);
  });

  it('should test for calculating Mars years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.marsYearsOld(45)).toEqual("84.6");
  });

  it('should test for calculating Mars years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.marsYearsLeft(84.6, 78.69)).toEqual("You have 63.3 Mars years left on Mars");
  });

  it('should test for calculating past Mars life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect((userInfoTest.marsYearsLeft(223.72, 78.69))).toEqual(`You have lived 75.8 Mars years past Mars' average life expectancy`);
  });

  it('should test for calculating Jupiter years old', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.jupiterYearsOld(45)).toEqual("533.7");
  });

  it('should test for calculating Jupiter years left', function () {
    let userInfoTest = new UserInfo("1974", "03", "20", "78.69");
    expect(userInfoTest.jupiterYearsLeft(533.76, 78.69)).toEqual("You have 399.5 Jupiter years left on Jupiter");
  });

  it('should test for calculating past Jupiter life\'s expectancy', function () {
    let userInfoTest = new UserInfo("1900", "03", "20", "78.69");
    expect((userInfoTest.jupiterYearsLeft(1411.34, 78.69))).toEqual(`You have lived 478.1 Jupiter years past Jupiter's average life expectancy`);
  });
});