export default class UserInfo {
  constructor(birthYear, birthMonth, birthDay, lifeExpectancy) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.lifeExpectancy = lifeExpectancy;
  }

  splitUserBirthday(userBirthday) {
    let birthdaySplit = userBirthday.split("-");
    return birthdaySplit;
  }

  getUserAge() {
    let userBirthday = new Date(this.birthYear, this.birthMonth, this.birthDay);
    let currentDate = new Date();
    let userAge = (currentDate - userBirthday);
    userAge = Math.round(((userAge - (userAge % 1000)) / 1000) / 3.154e+7);
    return userAge;
  }

  mercuryYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .24;
    return this.yearsOld;
  }

  mercuryYearsLeft(mercuryYearsOld, lifeExpectancy) {
    let pastLifeExpectancy = Math.abs(this.lifeExpectancy).toFixed(1);
    this.lifeExpectancy = (lifeExpectancy * .24) - mercuryYearsOld;
    if (pastLifeExpectancy < 0 ) {
      return `You haved lived ${pastLifeExpectancy} Mercury years past Mercury life expectancy`;
    }
    return this.lifeExpectancy;
  }

  venusYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .62;
    return this.yearsOld;
  }

  venusYearsLeft(venusYearsOld, lifeExpectancy) {
    let pastLifeExpectancy = Math.abs(this.lifeExpectancy).toFixed(1);
    this.lifeExpectancy = (lifeExpectancy * .62) - venusYearsOld;
    if (pastLifeExpectancy < 0) {
      return `You haved lived ${pastLifeExpectancy} Mercury years past Mercury life expectancy`;
    }
    return this.lifeExpectancy;
  }

  marsYearsOld(yearsOld) {
    this.yearsOld = yearsOld * 1.88;
    return this.yearsOld;
  }

  marsYearsLeft(marsYearsOld, lifeExpectancy) {
    let pastLifeExpectancy = Math.abs(this.lifeExpectancy).toFixed(1);
    this.lifeExpectancy = (lifeExpectancy * 1.88) - marsYearsOld;
    if (pastLifeExpectancy < 0) {
      return `You haved lived ${pastLifeExpectancy} Mercury years past Mercury life expectancy`;
    }
    return this.lifeExpectancy;
  }

  jupiterYearsOld(yearsOld) {
    this.yearsOld = yearsOld * 11.86;
    return this.yearsOld;
  }

  jupiterYearsLeft(jupiterYearsOld, lifeExpectancy) {
    let pastLifeExpectancy = Math.abs(this.lifeExpectancy).toFixed(1);
    this.lifeExpectancy = (lifeExpectancy * 11.86) - jupiterYearsOld;
    if (pastLifeExpectancy < 0) {
      return `You haved lived ${pastLifeExpectancy} Mercury years past Mercury life expectancy`;
    }
    return this.lifeExpectancy;
  }
}