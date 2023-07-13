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
      let eachday = $('#hour-9').clone().addClass('time-block').attr('id', 'hour-' + j);
      $('.maincontainer').append(eachday);
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

  var datasaved = null;
  var btn = $(".saveBtn");
  btn.on("click",function(e){
    e.preventDefault();
    var parentBlock = $(this).parent().attr('id'); 
    var info = $(this).siblings(".description").val(); 
    if(!info){
      alert("Not item input was found")
      return;
    }
    let storageitem = localStorage.getItem("schedule") ? JSON.parse(localStorage.getItem("schedule")) : [] //if exist it save it in the form of an object otherwise it doesnt
    var duplicatedinfo = storageitem.some(duEl => duEl.parentBlock === parentBlock); //it checks for duplicated items, if there exist a duplicated one it returns a false.
    
    if(!duplicatedinfo){
      storageitem.push({parentBlock,info})
      localStorage.setItem("schedule",JSON.stringify(storageitem))
    }
    console.log(storageitem)
    //i got kind of confuse in setting the for loop which is going to check if an element already exists on the storageitem
  });
  //console.log(storageitem) //for some reason storageitem doesnt exists outside the button


  setInterval(timeRefresh,1000);
});