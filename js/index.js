var dsnv = [];
var kqLay = localStorage.getItem("DSNV");
if(kqLay != null){
    var dataRaw = JSON.parse(kqLay);
    for(var i = 0 ; i < dataRaw.length; i++){
        var data = dataRaw[i];
        var nguoiLaoDong = new lopLaoDong(
            data.taiKhoan,
            data.ten,
            data.email,
            data.ngayLam,
            data.chucVu,
            data.luongCB,
            data.gioLam,
            
        );  
    }
    renderDSNV(nguoiLaoDong);
}
function themNV(){
    var nvcanthem = layThongTinTuForm1();
    var isValid = kiemTraRong(nvcanthem.taiKhoan, "tbTKNV");

    isValid =
    kiemTraRong(nvcanthem.taiKhoan, "tbTKNV") && kiemTraMinMax(nvcanthem.taiKhoan, "tbTKNV", 4, 6) && isValid;

    isValid =
    kiemTraRong(nvcanthem.ten, "tbTen") &&
    kiemTraMinMax(nvcanthem.ten, "tbTen", 8, 20) &&
    isValid;

    isValid = kiemTraRong(nvcanthem.email, "tbEmail") && kiemTraEmail(nvcanthem.email) && isValid;

    isValid = kiemTraRong(nvcanthem.luongCB,"tbLuongCB") && kiemTraLuong(nvcanthem.luongCB)&& kiemTraGioLam(nvcanthem.gioLam,"tbGiolam") && isValid;
    isValid =
    isValid &
    kiemTraRong(nvcanthem.matKhau, "tbMatKhau") &
    kiemTraRong(nvcanthem.ngayLam, "tbNgay") &
    kiemTraRong(nvcanthem.chucVu,"tbChucVu") &
    kiemTraRong(nvcanthem.gioLam, "tbGiolam") &
    kiemTraLuong(nvcanthem.gioLam);

    if(isValid){
        if(nvcanthem.chucVu == "0")
        {
            alert("Mời bạn chọn lại chức vụ");
            resetForm();
        }
        else{
           
            dsnv.push(nvcanthem);
            var dataJSON = JSON.stringify(dsnv);
            dataJSON = localStorage.setItem("DSNV",dataJSON);
            renderDSNV(dsnv);
            resetForm();   
        }
    }

}
function resetForm(){
    document.getElementById("formQLNV").reset();
}
function resetForm1(){
    document.getElementById("myModal1").value = "";
}
function xoanvLaoDong(id){
    for(var i = 0 ; i < dsnv.length ; i++)
    {
        var datanv = dsnv[i];
        if(datanv.id == dsnv.taiKhoan){
            dsnv.splice(dsnv.taiKhoan,1);
        }   
    }
    renderDSNV(dsnv);
}



function suanvLaoDong(id){
   
    var index = dsnv.findIndex(function (item) {
        return item.taiKhoan == id;
    });
    
    var nvcan = dsnv[index];
    
   document.getElementById("tknv1").value = nvcan.taiKhoan;
   document.getElementById("name1").value = nvcan.ten;
   document.getElementById("email1").value = nvcan.email;
   document.getElementById("password1").value = nvcan.matKhau;
   document.getElementById("datepicker1").value = nvcan.ngayLam;
   document.getElementById("chucvu1").value = nvcan.chucVu;
   document.getElementById("luongCB1").value  = nvcan.luongCB;
   document.getElementById("gioLam1").value = nvcan.gioLam;
   document.getElementById("tknv1").readOnly = true;

}

function capNhatNV(id){
    var nv = layThongTinTuForm();
    var index = dsnv.findIndex(function (item) {
        return item.taiKhoan == nv.taiKhoan;
    });
    dsnv[index] = nv;
    var dataJSON = JSON.stringify(dsnv);
    dataJSON = localStorage.setItem("DSNV",dataJSON);
    renderDSNV(dsnv);
  
}
var nvtimkiem=[];
function searchNV(loaiNV){
    loaiNV = document.getElementById("searchName").value;
    for(var i = 0 ; i < dsnv.length ; i++){
        if(loaiNV == dsnv[i].loaiNhanVien()){
            var index =  dsnv.filter(function(item){
                
                if(loaiNV == item.loaiNhanVien())
                {
                    index = dsnv[i].taiKhoan; 
                    
                }
            
                
                return index;
            })
            searchDSNV(index);
           
            
        }
    }
    
}