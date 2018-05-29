import { Tamagotchi } from './tamagotchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  let pet = new Tamagotchi("Pablo","duck");
  pet.setHunger();
  pet.setHappy();
  pet.setDiscipline();
  pet.setAge();
  setInterval(() => {
    $("#name").text(pet.name);
    $("#type").text(pet.type);
    $("#happy").text(pet.getHappyMeter());
    $("#hungry").text(pet.getHungryMeter());
    $("#discipline").text(pet.getDesciplineMeter());
  },1000);

  $("#sleep").on("click",function() {

    $(".main").hide();
    $(".scold").hide();
    $(".play").hide();
    $(".feed").hide();
    $(".sleep").show();
     pet.setSleep();
    setInterval(() => {
      $("#name").text(pet.name);
      $("#type").text(pet.type);
      $("#happy").text(pet.getHappyMeter());
      $("#hungry").text(pet.getHungryMeter());
      $("#discipline").text(pet.getDesciplineMeter());
    }, 1000);



  });

  $("#feed").on("click",function() {
    $(".main").hide();
    $(".scold").hide();
    $(".play").hide();
    $("sleep").hide();
    $(".feed").show();

    pet.feedThem();
    $("#name").text(pet.name);
    $("#type").text(pet.type);
    $("#happy").text(pet.getHappyMeter());
    $("#hungry").text(pet.getHungryMeter());
    $("#discipline").text(pet.getDesciplineMeter());
  });

  $("#scold").on("click",function() {
    $(".main").hide();
    $(".sleep").hide();
    $(".play").hide();
    $(".feed").hide();
    $(".scold").show();
    pet.scoldPet();
    $("#name").text(pet.name);
    $("#type").text(pet.type);
    $("#happy").text(pet.getHappyMeter());
    $("#hungry").text(pet.getHungryMeter());
    $("#discipline").text(pet.getDesciplineMeter());
  });

  $("#play").on("click",function() {
    $(".main").hide();
    $(".sleep").hide();
    $(".feed").hide();
    $(".scold").hide();
    $(".play").show();
    pet.petThem();
    $("#name").text(pet.name);
    $("#type").text(pet.type);
    $("#happy").text(pet.getHappyMeter());
    $("#hungry").text(pet.getHungryMeter());
    $("#discipline").text(pet.getDesciplineMeter());
  });




});
