// console.log("Hello Javascript!");

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// function validate(frmUser) {
//   var returnValue = true;
//   var firstname = frmUser.firstName.value;
//   var lastname = frmUser.lastName.value;
//   var email = frmUser.email.value;

//   if (firstname.length < 6) {
//     returnValue = false;
//     alert(
//       "Your first name must be at least\n6 characters long.\nPlease try again."
//     );
//     frmUser.firstName.focus();
//   }

//   if (lastname.length < 6) {
//     returnValue = false;
//     alert(
//       "Your last name must be at least\n6 characters long.\nPlease try again."
//     );
//     frmUser.lastName.focus();
//   }

//   return returnValue;
// }

function myFunction() {
  let x = 0;

  //单选第一题
  {
    if (document.getElementById("s1").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("s2").checked) {
      // songs_value=document.getElementById('s1').value;
      x++;
    } else if (document.getElementById("s3").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("s4").checked) {
      // songs_value=document.getElementById('s1').value;
    }
  }

  //单选第二题
  {
    if (document.getElementById("nfruit1").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("nfruit2").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("nfruit3").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("nfruit4").checked) {
      x++;
      // songs_value=document.getElementById('s1').value;
    }
  }

  //单选第三题
  {
    if (document.getElementById("nfood1").checked) {
      // songs_value=document.getElementById('s1').value;
      x++;
    } else if (document.getElementById("nfood2").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("nfood3").checked) {
      // songs_value=document.getElementById('s1').value;
    } else if (document.getElementById("nfood4").checked) {
      // songs_value=document.getElementById('s1').value;
    }
  }

  //多选第一题
  {
    var c1 = document.getElementById("npark1").checked;
    var c2 = document.getElementById("npark2").checked;
    var c3 = document.getElementById("npark3").checked;
    var c4 = document.getElementById("npark4").checked;

    if (c1 && c2 && c3 && c4 != true) {
      x++;
    }
  }

  //多选第二题
  {
    var d1 = document.getElementById("nplane1").checked;
    var d2 = document.getElementById("nplane2").checked;
    var d3 = document.getElementById("nplane3").checked;
    var d4 = document.getElementById("nplane4").checked;

    if (d1 && d2 && d3 && d4 != true) {
      x++;
    }
  }

  //多选第三题
  {
    var e1 = document.getElementById("nnumber1").checked;
    var e2 = document.getElementById("nnumber2").checked;
    var e3 = document.getElementById("nnumber3").checked;
    var e4 = document.getElementById("nnumber4").checked;

    if (e1 != true && e2 && e3 != true && e4 != true) {
      x++;
    }
  }

  //简答第一题
  {
    var catNumber = document.getElementById("jcat").value;
    if (catNumber == 7) {
      x++;
    }
  }

  //简答第二题
  {
    var character = document.getElementById("janime").value;
    if (character == "Anya") {
      x++;
    }
  }

  //简答第二题
  {
    var character = document.getElementById("jdog").value;
    if (character == 4) {
      x++;
    }
  }

  alert("score=" + x + "/9");

  if (x < 5) {
    alert("看来我们的友情如此淡薄,请多多关心我们吧！😶‍🌫️");
  } else if (x >= 6 && x <= 8) {
    alert("你还是比较有心的存在,但没有9分还是归类在没有心😊");
  } else if (x == 9) {
    alert("你以为我会夸奖你吗,这都是基操好吗!\nbtw 恭喜😍😍💕");
  }

  document.getElementById("score").value = x;
}
