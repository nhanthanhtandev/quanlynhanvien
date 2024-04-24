function kiemTraRong(value, idErr) {
    if (value.length == 0) {
      // không hợp lệ
      document.getElementById(idErr).style.display = "block";
      document.getElementById(idErr).innerText = "Nội dung này không được bỏ trống";
      return false;
    }
    document.getElementById(idErr).innerText = "";
    return true;
    
  }

function kiemTraMinMax(value, idErr, min, max) {
    if (min <= value.length && value.length <= max) {
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerText = `Nôi dung phải tù ${min} đến ${max}`;
    return false;
}
function kiemTraEmail(email) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isEmail = regex.test(email);
    if (isEmail) {
      document.getElementById("tbEmail").innerText = "";
      return true;
    }
    document.getElementById("tbEmail").style.display = "block";
    document.getElementById("tbEmail").innerText = "Email không đúng định dạng";
    return false;
}

function kiemTraLuong(luong){
    if( 1000000 < luong < 20000000){
        document.getElementById("tbLuongCB").innerText = "";
        return true;
    }
    document.getElementById("tbLuongCB").style.display = "block";
    document.getElementById("tbLuongCB").innerText = `Tiền phải từ 1000000 đến 20000000`;
    return false;

}

function kiemTraGioLam(gioLam){
  if( 80 < gioLam < 200){
    document.getElementById("tbGiolam").innerText = "";
    return true;
  }
  document.getElementById("tbGiolam").style.display = "block";
  document.getElementById("tbGiolam").innerText = `Số giờ làm trong tháng  từ 80 đến 200 giờ`;
  return false;
}
  