import UserInfo from "../src/galactic-age";

describe('UserInfo', function() {

  it('should test for taking in users years old', function(){
    let userInfoTest = new UserInfo("45", "78.69");
    expect(userInfoTest.yearsOld).toEqual("45");
  });

  it('should test for taking in users life expectancy', function () {
    let userInfoTest = new UserInfo("45", "78.69");
    expect(userInfoTest.lifeExpectancy).toEqual("78.69");
  });

  it('should test for calculating Mercury years old', function () {
    let userInfoTest = new UserInfo("45");
    expect(userInfoTest.mercuryYearsOld("45").toFixed(1)).toEqual("10.8");
  });

  it('should test for calculating Mercury years left', function () {
    let userInfoTest = new UserInfo("45", "78.69");
    expect(userInfoTest.mercuryYearsLeft("10.8", "78.69").toFixed(1)).toEqual("8.1");
  });
});