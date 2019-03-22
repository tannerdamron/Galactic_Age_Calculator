export default class UserInfo {
  constructor(birthYear, birthMonth, birthDay, lifeExpectancy) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.lifeExpectancy = lifeExpectancy;
  }

  getUserAge() {
    let userBirthday = new Date(this.birthYear, this.birthMonth, this.birthDay);
    let currentDate = new Date();
    let userAge = (currentDate - userBirthday);
    userAge = Math.round(((userAge - (userAge % 1000)) / 1000) / 3.154e+7);
    console.log(userBirthday);
    console.log(currentDate);
    console.log(userAge);
    return userAge;
  }

  mercuryYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .24;
    return this.yearsOld;
  }

  mercuryYearsLeft(mercuryYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * .24) - mercuryYearsOld;
    return this.lifeExpectancy;
  }

  venusYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .62;
    return this.yearsOld;
  }

  venusYearsLeft(venusYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * .62) - venusYearsOld;
    return this.lifeExpectancy;
  }
}