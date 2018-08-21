function postData(newState) {

    // return "this is a return string"
    // let state = document.getElementById("state").value
    // let town =  document.getElementById("town").value
    return fetch("http://localhost:8088/states",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newState)
    })
    .then(response => response.json())
}

module.exports = postData
