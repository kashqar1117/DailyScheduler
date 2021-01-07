
var currentTime;

var timeSlots = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']


var planner = JSON.parse(localStorage.getItem('planner')) || [];

setInterval(function () {


  var now = moment()
  currentTime = now.format('H');
  $('#currentDay').text(now.format('MMMM Do YYYY, h:mm:ss a'))

  generateTimeSlots()
}, 1000);



// //timzoneClicked

function generateTimeSlots() {
  $('.container').empty()
  for (var i = 0; i < timeSlots.length; i++) {

    //question about timslor varaible
    var timeslot = timeSlots[i]
    var timeZone = $('<div>')
    var txtarea = $('<textarea>').text(planner[timeslot])
    var svBtn = $('<button>')
    timeZone.text(timeslot)
    txtarea.text()
    svBtn.text('save')
    timeZone.addClass('hour col-lg-3')
    txtarea.addClass('textarea col-lg-8')
    svBtn.addClass('saveBtn')


    var tempTime = parseInt(timeslot.split(':00')[0])
    // console.log(timeslot.split(':00'))

    if (timeslot.split(':00')[1] == "pm" && timeslot.split(':00')[0] != '12') {
      tempTime = tempTime + 12;


    }

    if (currentTime > tempTime) {
      txtarea.addClass('past')

    } 
    else if (currentTime < tempTime) {
      txtarea.addClass('future')

    } 
    else {
      txtarea.addClass('present')
    }



    $('.container').append(timeZone, txtarea, svBtn)


  }


}



$('.saveBtn').on('click', function () {
  var text = $(this).prev().val();

  //questions witht the this thing
  var hour = $(this).prev().prev().text()

  //how does this set a key thing work
  planner[hour] = text

  localStorage.setItem('planner', JSON.stringify(planner))

})











