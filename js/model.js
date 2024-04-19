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


