import UserInfo from "../src/galactic-age";
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

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
    let userMarsAge = userInfo.marsYearsOld(userEarthAge);
    let userMarsYearsLeft = userInfo.marsYearsLeft(userMarsAge, userInputtedLifeExpectancy);
    let userJupiterAge = userInfo.jupiterYearsOld(userEarthAge);
    let userJupiterYearsLeft = userInfo.jupiterYearsLeft(userJupiterAge, userInputtedLifeExpectancy);
    $("#mercuryAge").text(`You are ${userMercuryAge} years old on Mercury`);
    $("#mercuryYearsLeft").text(userMercuryYearsLeft);
    $("#venusAge").text(`You are ${userVenusAge} years old on Venus`);
    $("#venusYearsLeft").text(userVenusYearsLeft);
    $("#marsAge").text(`You are ${userMarsAge} years old on Mars`);
    $("#marsYearsLeft").text(userMarsYearsLeft);
    $("#jupiterAge").text(`You are ${userJupiterAge} years old on Jupiter`);
    $("#jupiterYearsLeft").text(userJupiterYearsLeft);
  });
});