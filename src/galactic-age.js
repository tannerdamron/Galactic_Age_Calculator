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
    return (this.yearsOld).toFixed(1);
  }

  mercuryYearsLeft(mercuryYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * .24) - mercuryYearsOld;
    if (this.lifeExpectancy < 0) {
      let pastLifeExpectancy = Math.abs((this.lifeExpectancy).toFixed(1));
      return `You have lived ${pastLifeExpectancy} Mercury years past Mercury's average life expectancy`;
    }
    return "You have " + Math.abs((this.lifeExpectancy).toFixed(1)) + " Mercury years left on Mercury";
  }

  venusYearsOld(yearsOld) {
    this.yearsOld = yearsOld * .62;
    return (this.yearsOld).toFixed(1);
  }

  venusYearsLeft(venusYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * .62) - venusYearsOld;
    if (this.lifeExpectancy < 0) {
      let pastLifeExpectancy = Math.abs((this.lifeExpectancy).toFixed(1));
      return `You have lived ${pastLifeExpectancy} Venus years past Venus' average life expectancy`;
    }
    return "You have " + (Math.abs((this.lifeExpectancy).toFixed(1))) + " Venus years left on Venus";
  }

  marsYearsOld(yearsOld) {
    this.yearsOld = yearsOld * 1.88;
    return (this.yearsOld).toFixed(1);
  }

  marsYearsLeft(marsYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * 1.88) - marsYearsOld;
    if (this.lifeExpectancy < 0) {
      let pastLifeExpectancy = Math.abs((this.lifeExpectancy).toFixed(1));
      return `You have lived ${pastLifeExpectancy} Mars years past Mars' average life expectancy`;
    }
    return "You have " + Math.abs((this.lifeExpectancy).toFixed(1)) + " Mars years left on Mars";
  }

  jupiterYearsOld(yearsOld) {
    this.yearsOld = yearsOld * 11.86;
    return (this.yearsOld).toFixed(1);
  }

  jupiterYearsLeft(jupiterYearsOld, lifeExpectancy) {
    this.lifeExpectancy = (lifeExpectancy * 11.86) - jupiterYearsOld;
    if (this.lifeExpectancy < 0) {
      let pastLifeExpectancy = Math.abs((this.lifeExpectancy).toFixed(1));
      return `You have lived ${pastLifeExpectancy} Jupiter years past Jupiter's average life expectancy`;
    }
    return "You have " + Math.abs((this.lifeExpectancy).toFixed(1)) + " Jupiter years left on Jupiter";
  }
}