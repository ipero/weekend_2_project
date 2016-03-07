var i=0; //index number starts at 0
var kappa_cohort;
var timer;
const DISPLAY_TIME=10000;
$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        kappa_cohort=data.kappa;
        appendDom();
        timer = setInterval(nextPerson, DISPLAY_TIME);
      }
    });
    $('.prev').on('click', prevPerson);
    $('.next').on('click', nextPerson);
});

function appendDom(){
  $('.total-num').text(kappa_cohort.length);
  $('.index-num').children().html(i+1);

  $('.people-list').append('<div class="person"></div>');
  var  $el = $('.people-list').children().last();
  $el.append('<p>' + kappa_cohort[i].spirit_animal + ': </p>');
  $el.append('<p> ' + kappa_cohort[i].name + ', </p>');
  $el.append('<p>' + kappa_cohort[i].location + '</p>');
  $el.append('<p><em>'+kappa_cohort[i].shoutout + '</em></p>' );
}

function prevPerson(){
  i--;
  if( i == -1){
    i= kappa_cohort.length-1;
  }

  updatePerson();
  restartTimer();
}

function nextPerson(){
  i++;
  if(i==kappa_cohort.length){
    i = 0;
  }
  updatePerson();
  restartTimer();
}

function restartTimer(){
  clearInterval(timer);
  timer = setInterval(nextPerson, DISPLAY_TIME);
}

function updatePerson() {
  $('.person').fadeOut("slow",function(){
    $('.person').remove();
    $('.people-list').append('<div class="person"></div>');
    var  $el = $('.people-list').children().last();
    $el.append('<p>' + kappa_cohort[i].spirit_animal + ': </p>');
    $el.append('<p> ' + kappa_cohort[i].name + ', </p>');
    $el.append('<p>' + kappa_cohort[i].location + '</p>');
    $el.append('<p><em>' + kappa_cohort[i].shoutout + '</em></p>' );
    $el.closest('.person').hide().fadeIn(800);
    $('.index-num').children().html(i+1);
    }

  );
}
