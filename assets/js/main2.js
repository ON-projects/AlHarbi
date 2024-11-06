/**
 * copyrights 
 */

var myModal = document.getElementById ('myModal')
var myInput = document.getElementById ('myInput')
myModal.addEventListener ('shown.bs.modal', function() {
    myInput.focus()
})


function newDate()
{ 
    return new Date().getFullYear();
}
