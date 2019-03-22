import UserInfo from "../src/galactic-age"
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function () {
  $("#galacticForm").submit(function(event){
    event.preventDefault();
    let userInfo = new UserInfo();
    let userBirth = $("#userBirthdayInput").val();
    let userBirthSplit = userInfo.splitUserBirthday(userBirth);
    let userInputtedLifeExpectancy = $("#lifeExpectancyInput").val();
    const userBirthYear = parseInt(userBirthSplit[0]);
    const userBirthMonth = parseInt(userBirthSplit[1]);
    const userBirthDay = parseInt(userBirthSplit[2]);
    userInfo = new UserInfo(userBirthYear, userBirthMonth, userBirthDay, userInputtedLifeExpectancy);
    let userEarthAge = userInfo.getUserAge();
    let userMercuryAge = userInfo.mercuryYearsOld(userEarthAge);
    let userMercuryYearsLeft = userInfo.mercuryYearsLeft(userMercuryAge, userInputtedLifeExpectancy);
    let userVenusAge = userInfo.venusYearsOld(userEarthAge);
    let userVenusYearsLeft = userInfo.venusYearsLeft(userVenusAge, userInputtedLifeExpectancy);
    console.log(userMercuryAge);
    console.log(userMercuryYearsLeft);
    console.log(userVenusAge);
    console.log(userVenusYearsLeft);
  });
});