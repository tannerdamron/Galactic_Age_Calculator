export default class UserInfo {
  constructor(yearsOld, lifeExpectancy) {
    this.yearsOld = yearsOld;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryLogic(yearsOld, lifeExpectancy) {
    this.yearsOld = yearsOld * .24;
    this.lifeExpectancy = (lifeExpectancy * .24) - yearsOld;
    return this;
  }
}