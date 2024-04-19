
var khen="";
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
        if(chucVu = "Sếp"){
            return (this.luongCB * 1) *3;
        }
        else if(chucVu = "Trưởng phòng"){
            return   (this.luongCB * 1) * 2;
        }
        else if (chucVu = "Nhân viên")
        {
            return   (this.luongCB * 1) * 1;
        }
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