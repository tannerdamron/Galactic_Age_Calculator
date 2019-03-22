export default class UserInfo {
  constructor(yearsOld, lifeExpectancy) {
    this.yearsOld = yearsOld;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .24;
    return this.yearsOld;
  }

  mercuryYearsLeft(mercuryYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * .24) - mercuryYearsOld;
    return this.lifeExpectancy;
  }
}