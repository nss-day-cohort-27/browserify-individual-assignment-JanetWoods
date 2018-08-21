let addStBtn = require("./displayForm")
let addData = require("./addData")

function addItNow(state){
    document.getElementById("#addStateForm.addStBtn")
        .addEventListener("click", addData(state))
}

module.exports=addItNow
