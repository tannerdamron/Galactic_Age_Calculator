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
    console.log(userEarthAge);
  });
});