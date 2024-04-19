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
    var taiKhoan = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = 
    document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
   
    var gioLam = document.getElementById("gioLam").value;

    if(chucVu == "0")
    {
        alert("Mời bạn chọn lại chức vụ");
        resetForm();
    }
    else 
    {
        var nv = new lopLaoDong(taiKhoan,ten,email,matKhau,ngayLam,chucVu,luongCB,gioLam);
        dsnv.push(nv);
        var dataJSON = JSON.stringify(dsnv);
        dataJSON = localStorage.setItem("DSNV",dataJSON);
        renderDSNV(dsnv);   
    }
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
    var index =  dsnv.findIndex(function(){
        for(var i = 0 ; i < dsnv.length ; i++){
            if(dsnv[i].taiKhoan == id)
            {
                index = dsnv[i];  
            }
        }
        return index;
   })
   
   document.getElementById("tknv1").value = dsnv[index].taiKhoan;
   document.getElementById("name1").value = dsnv[index].ten;
   document.getElementById("email1").value = dsnv[index].email;
   document.getElementById("password1").value = dsnv[index].matKhau;
   document.getElementById("datepicker1").value = dsnv[index].ngayLam;
   document.getElementById("chucvu1").value = dsnv[index].chucVu;
   document.getElementById("luongCB1").value  = dsnv[index].luongCB;
   document.getElementById("gioLam1").value = dsnv[index].gioLam;
   document.getElementById("tknv1").readOnly = true;

}

function capNhatNV(id){
    for(var i = 0 ; i <dsnv.length ; i++)
    {
        id = dsnv[i];
        
    }
    id.taiKhoan = document.getElementById("tknv1").value;
    id.ten = document.getElementById("name1").value;
    id.email = document.getElementById("email1").value;
    id.matKhau = document.getElementById("password1").value;
    id.ngayLam = document.getElementById("datepicker1").value;
    id.luongCB = document.getElementById("luongCB1").value;
    id.chucVu = document.getElementById("chucvu1").value;
    id.gioLam = document.getElementById("gioLam1").value;

//     var index =  dsnv.findIndex(function(){
//         for(var i = 0 ; i < dsnv.length ; i++){
//             if(dsnv[i].taiKhoan == id)
//             {
//                 index = dsnv[i];  
//             }
//         }
//         return index;
//    })
   var dataJSON = JSON.stringify(dsnv);
   dataJSON = localStorage.setItem("DSNV",dataJSON);
   renderDSNV(dsnv);
  
}