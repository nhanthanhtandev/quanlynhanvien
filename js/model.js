function renderDSNV(nvArr){
   var contentHTML = "";
   for( var i = 0 ; i < nvArr.length ; i++){
       var nvLaoDong = nvArr[i];
       var kqHienThi = `<tr>
       <td>${nvLaoDong.taiKhoan}</td>
       <td>${nvLaoDong.ten}</td>
       <td>${nvLaoDong.email}</td>
       <td>${nvLaoDong.ngayLam}</td>
       <td>${nvLaoDong.chucVu}</td>
       <td>${nvLaoDong.tinhLuong()}</td>
       <td>${nvLaoDong.loaiNhanVien()}</td>
       <td><button class="btn btn-danger" onclick="xoanvLaoDong('${nvLaoDong.taiKhoan}')">Xóa</button></td>
       <td><button data-toggle="modal"
       data-target="#myModal1"  class="btn btn-danger" onclick="suanvLaoDong('${nvLaoDong.taiKhoan}')">Sửa</button></td>
       </tr>`;
       contentHTML += kqHienThi;
   }
   document.getElementById("tableDanhSach").innerHTML= contentHTML;
}


function timDSNV(index){
    let contentHTML = "";
    index.map(value =>{
        
            var kqHienThi = `<tr>
            <td>${value.taiKhoan}</td>
            <td>${value.ten}</td>
            <td>${value.email}</td>
            <td>${value.ngayLam}</td>
            <td>${value.chucVu}</td>
            <td>${value.tinhLuong()}</td>
            <td>${value.loaiNhanVien()}</td>
            </tr>`
            contentHTML += kqHienThi;
        
        
    })
    document.getElementById("tableDanhSach").innerHTML= contentHTML;
    
    
 }