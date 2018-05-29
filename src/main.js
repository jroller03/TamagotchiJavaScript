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

    if( !pet.isItDead() ) {
      $("#name").text(pet.name);
      $("#type").text(pet.type);
      $("#happy").text(pet.getHappyMeter());
      $("#hungry").text(pet.getHungryMeter());
      $("#discipline").text(pet.getDesciplineMeter());
    } else {
      $(".main").hide();
      $(".scold").hide();
      $(".play").hide();
      $(".feed").hide();
      $(".sleep").hide();
      $("dead").show();
    }
  },1000);

  $("#sleep").on("click",function() {

    $(".main").hide();
    $(".scold").hide();
    $(".play").hide();
    $(".feed").hide();
    $("dead").hide();
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
    $(".sleep").hide();
    $("dead").hide();
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

    $(".play").hide();
    $(".sleep").hide();
    $("dead").hide();
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
    $("dead").hide();
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
