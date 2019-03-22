import UserInfo from "../src/galactic-age";

describe('UserInfo', function() {

  it('should test for taking in users years old', function(){
    let userInfoTest = new UserInfo(45, 78.69);
    expect(userInfoTest.yearsOld).toEqual(45);
  });
});