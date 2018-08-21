let $ = require("jquery")
let displayForm = require("./displayForm")

function listenForAddReqClick(){
    document.getElementById("inputFormHere").addEventListener("click", displayForm())
    // $("#inputFormLinkHere").on("click", displayForm())
    console.log("Listner works, is the form opening? this is listenForAddReqClick in the listenForAddReg file")
}

module.exports=listenForAddReqClick
