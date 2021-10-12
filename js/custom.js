//   ================== switch & case =====================

function fn1(){
    var mark = document.getElementById("one").value;
    switch(true){
      case (mark >= 80 && mark <= 100):
        document.getElementById("msg").innerHTML = "got an A+";
      break;
      case (mark >= 70 && mark <= 79):
        document.getElementById("msg").innerHTML = "got an A";
      break;
      case (mark >= 60 && mark <= 69):
        document.getElementById("msg").innerHTML = "got an A-";
      break;
      case (mark >= 50 && mark <= 59):
        document.getElementById("msg").innerHTML = "got a B";
      break;
      case (mark >= 40 && mark <= 49):
        document.getElementById("msg").innerHTML = "got a C";
      break;
      case (mark >= 33 && mark <= 39):
        document.getElementById("msg").innerHTML = "got a D";
      break;
      case (mark >= 0 && mark <= 32):
        document.getElementById("msg").innerHTML = "got an F";
        break;
      default:
        document.getElementById("msg").innerHTML = "please enter your correct mark";
            
    }
}



