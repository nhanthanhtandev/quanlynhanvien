
var khen="";
var tongLuong= 0;
function lopLaoDong(taiKhoan,ten,email,matKhau,ngayLam,chucVu,luongCB,gioLam){
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tinhLuong = function(){
        if(this.chucVu == "Sếp"){
            tongLuong = (this.luongCB * 1) * 3;
        }
        else if(this.chucVu == "Trưởng phòng"){
            tongLuong = (this.luongCB * 1) * 2;
        }
        else if(this.chucVu == "Nhân viên"){
            tongLuong = (this.luongCB * 1) * 1;
        }
        return tongLuong;
    }
    this.loaiNhanVien = function(){
        if( this.gioLam >= 192)
        {
            khen = "Nhân viên xuất sắc";
            
        }
        else if( this.gioLam >=176){
            khen = "Nhân viên giỏi";
            
        }
        else if( this.gioLam >=160){
            khen = "Nhân viên khá";
            
        }
        else{
            khen = "Nhân viên trung bình";
            
        }
        return khen;
    }
}
function layThongTinTuForm(){
    var taiKhoan = document.getElementById("tknv1").value;
    var ten = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var matKhau = document.getElementById("password1").value;
    var ngayLam = document.getElementById("datepicker1").value;
    var luongCB = document.getElementById("luongCB1").value;
    var chucVu = document.getElementById("chucvu1").value;
    var gioLam = document.getElementById("gioLam1").value;
    var nv = new lopLaoDong(taiKhoan,ten,email,matKhau,ngayLam,chucVu,luongCB,gioLam);
    return nv;
}

function layThongTinTuForm1(){
    var taiKhoan = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = 
    document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var nv = new lopLaoDong(taiKhoan,ten,email,matKhau,ngayLam,chucVu,luongCB,gioLam);
    return nv;
}
