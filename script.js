$(document).ready(function() {

    function timeRefresh() {
      let day = new Date();
      let time = [day.getHours(), day.getMinutes(), day.getSeconds()];
      $("#currentHour").text("Current time hour: " + time[0] + " hour(s) " + time[1] + " minutes and " + time[2] + " seconds.");
    }

  $("#currentDay").text(dayjs().format("dddd D MMMM YYYY."));

  var hours = $('.hour');
  function cloneElement() {
    var i = 10;
    var k = 9
    for (var j=10;j<19;j++){
      $('#hour-9').clone().addClass('time-block').appendTo('.maincontainer').attr('id', 'hour-' + j);
      hours.text(dayjs().hour(j).format("h A"))
    }
    $('#hour-9').hide();
  }
    
  cloneElement();

  $('.time-block').each(function(){
    var timeline_block = parseInt($(this).attr('id').split("-")[1]);
    var currentHour = dayjs().hour();
    if(currentHour > timeline_block-1){
    $(this).addClass('past')
    }else if(currentHour < timeline_block-1){
    $(this).addClass('future')
    }else{
    $(this).addClass('present')
    }
  });

  var btn = $(".saveBtn");
  btn.on("click",function(e){
    e.preventDefault();
    var parentBlock = $(this).parent().attr('id'); 
    var info = $(this).siblings(".description").val(); 
    if(!info){
      alert("Not item input was found")
      return;
    }
    localStorage.setItem(parentBlock,info)
  });

  $('.time-block').each(function(){
    var eachinfo = $(this).attr('id')
    var storedData = localStorage.getItem(eachinfo)
    $(this).find('.description').append(storedData)
  });

  setInterval(timeRefresh,1000);
});