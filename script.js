//variables
var currentTime;

var timeSlots = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']

var planner = JSON.parse(localStorage.getItem('planner')) || {};

generateTimeSlots()

// set interval for dynamic time
setInterval(function () {

  var now = moment()
  currentTime = now.format('H');
  $('#currentDay').text(now.format('MMMM Do YYYY, h:mm:ss a'))

}, 100);

setInterval(function () {

  updateSlot()

}, 100);

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
    txtarea.attr('timeslot' , timeslot)
    svBtn.addClass('saveBtn')
    $('.container').append(timeZone, txtarea, svBtn)

  }

}

//updating slots
function updateSlot() {

    $('.textarea').each(function(){

      var timeslot = $(this).attr('timeslot')
     


      var tempTime = parseInt(timeslot.split(':00')[0])
      // console.log(timeslot.split(':00'))
      
      if (timeslot.split(':00')[1] == "pm" && timeslot.split(':00')[0] != '12') {
        tempTime = tempTime + 12;
            
      }
              
      if (currentTime > tempTime) {
        $(this).removeClass('present', 'future')
        $(this).addClass('past')
        
      } else if (currentTime < tempTime) {
        $(this).removeClass('past' , 'present')
        $(this).addClass('future')
        
      } else {
        $(this).removeClass('future', 'past')
        $(this).addClass('present')
      }
      
    })

}

$('.saveBtn').on('click', function () {
  var text = $(this).prev().val();

  //questions witht the this thing
  var hour = $(this).prev().prev().text()

  //how does this set a key thing work
  planner[hour] = text


  localStorage.setItem('planner', JSON.stringify(planner))

})
