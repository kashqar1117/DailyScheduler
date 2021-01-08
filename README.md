Daily Planner !

This is very tricky code that I had to while to write. I decided to append all timeslots to the dom from my JQUERY code. It intoduced me to alot of methods that I wouldn't have learned otherwise.

![.Picture od Daily Planner]()

Fist, I had to incorperate Moment.JS to include the time and then had to make it dynamic using the a set interval function

![.Set Interval Function]()


Then it was time to create all the timeslots and append it to the browser. I did this with the generate timeslots function.

![.Generate Time Slots Function]()


The homework also called for the colors to change based on time. Red is present , green is future, and grey is past. There was some tricky challenges including this. Like how in mid day 'am' switches to 'pm' or how the color has to be updated every second. This was corrected with the updateSlot function and setInterval function

![.Update Slot Function](/Users/kristinaal-ashqar/Pictures/Photos Library.photoslibrary/originals/0/02DBF9BB-6C7E-4290-B197-476411136DA3.jpeg)

![.Set Interval Function]()


Finally it was time to save things into local storage using the event listener I made with $('.saveBtn')

![.Save Button Event Listener]()

This is the trickiest code I have written so far but the most I have learned in one homework assigemnt yet.