let $ = require("jquery")
let postData = require("./addData")

let state = "montana"


function displayForm() {
    $("#inputFormHere").append(theAddStform())
    // theAddStForm()
}
function theAddStform() {
    return `
<form id="addStateForm">
<h3>Enter any missing states here</h3>
<fieldset class="adding">

<label for ="town">State</label>
<input required type="text" id="town" placeholder="town"/>

<label for ="state">State</label>
<input required type="text" id="state" placeholder="state"/>

</fieldset>

<button id="addStBtn" input type="submit" value="send POST">Add State</button>
</form>
`
}

////////////////
let newState ={
    state: $("#state").val(),
    town: $("#town").val()
}
$("#addStateForm").on("submit", postData(newState));


module.exports = displayForm