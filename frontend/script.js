let xhr = null;
let sendBt = document.getElementById("send-btn")

    getXmlHttpRequestObject = function () {
        if (!xhr) {
            xhr = new XMLHttpRequest()
        }
        return xhr
    }

    function sendDataCallback() {
        if (xhr.readyState == 4 && xhr.status == 201) {
            let response = JSON.parse(xhr.responseText);
            if (response["acces"] === "true"){
                window.location = "https://google.com"
            }
            else{
                alert(response["error"])
            }
        }
    }

    function checkLogin(){
        xhr = getXmlHttpRequestObject()
        xhr.onreadystatechange = sendDataCallback
        xhr.open("POST", "http://localhost:6969/check_login", true)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(JSON.stringify({"login": document.getElementById("login-input").value, "password": document.getElementById("passwd-log-input").value}))
    }

sendBt.onclick = checkLogin
