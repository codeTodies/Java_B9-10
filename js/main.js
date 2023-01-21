
function Member(tknv,name,email,password,ngaylam,luongCB,chucvu,giolam)
{
  this.tknv = tknv;
  this.name = name;
  this.email=email;
  this.password = password;
  this.ngaylam = ngaylam
  this.luongCB =luongCB;
  this.chucvu = chucvu;
  this.giolam = giolam;
}

Member.prototype.sumProfit=function()
{
   
  if(this.chucvu=="Sếp")
  {
    return (this.luongCB*3)
  }
  if(this.chucvu=="Trưởng phòng")
  {
    return (this.luongCB*2)
  }
  if(this.chucvu=="Nhân viên")
  {
    return (this.luongCB*1)
  }
}
Member.prototype.rank=function()
{
    if(this.giolam>=192)
    {
        return "Nhân viên xuất sắc"
    }
    if(this.giolam>=176)
    {
        return "Nhân viên giỏi"
    }
    if(this.giolam>=160)
    {
        return "Nhân viên khá"
    }
    if(this.giolam<160)
    {
        return "Nhân viên trung bình"
    }
}


 let memberList=[];
function createMem()
{
    let tknv=document.querySelector("#tknv").value;
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let ngaylam=document.querySelector("#datepicker").value;
    let luongCB=+document.querySelector("#luongCB").value;
    let chucvu=document.querySelector("#chucvu").value;
    let giolam=+document.querySelector("#gioLam").value;
    let valid=valiDate();
    if(valid==true)
    {
    let member=new Member(tknv,name,email,password,ngaylam,luongCB,chucvu,giolam);
    memberList.push(member);
    renderTable(memberList)
    resetForm();
    console.log(chucvu);
    }
}

function renderTable(memberList)
{
    let html=memberList.reduce((output,member)=>{
        return (output+ `
        <tr>
        <td>${member.tknv}</td>
        <td>${member.name}</td>
        <td>${member.email}</td>
        <td>${member.ngaylam}</td>
        <td>${member.chucvu}</td>
        <td>${member.sumProfit()}</td>
        <td>${member.rank()}</td>
        <td><button class="btn btn-primary" onclick="selectToUpdateMem('${member.tknv}')">Chỉnh sửa</button>
     <button class="btn btn-danger" onclick="deleteMember('${member.tknv}')">Xóa</button></td>
        </tr>
        `)
    },"")
    document.querySelector("#tableDanhSach").innerHTML=html;
}

function resetForm()
{
    document.querySelector("#tknv").value="";
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#password").value="";
    document.querySelector("#datepicker").value="";
    document.querySelector("#luongCB").value="";
    document.querySelector("#chucvu").value="";
    document.querySelector("#gioLam").value="";
    document.querySelector("#tknv").disabled=false;
    document.querySelector("#btnThemNV").disabled=false;
   let mauSac= document.getElementsByClassName("demo");
   for(let i=+0; i<mauSac.length;i++)
   {
    mauSac[i].getElementsByClassName.color="white";
   }
}


function fillRank()
  {
    let search=document.querySelector("#searchName").value;
    let newList=memberList.filter((member)=>{
    search=search.toLowerCase();
    let chucvu=member.chucvu;
    chucvu=chucvu.toLowerCase();
    return chucvu.indexOf(search) !=-1;
    })
    renderTable(newList);
  }


function deleteMember(memAccount)
{
  memberList=memberList.filter((member)=>{
    return member.tknv!=memAccount;
  });
  renderTable(memberList);
}

function selectToUpdateMem(memAccount)
{
  let selectedMem=memberList.find((member)=>{
    return member.tknv==memAccount;
  })
   document.querySelector("#tknv").value=selectedMem.tknv;
    document.querySelector("#name").value=selectedMem.name;
    document.querySelector("#email").value=selectedMem.email;
    document.querySelector("#password").value=selectedMem.password;
    document.querySelector("#datepicker").value=selectedMem.datepicker;
    document.querySelector("#luongCB").value=selectedMem.luongCB;
    document.querySelector("#chucvu").value=selectedMem.chucvu;
    document.querySelector("#gioLam").value=selectedMem.giolam;
    document.querySelector("#tknv").disabled=true;
    document.querySelector("#btnThemNV").disabled=true;
    alert("Vui lòng bấm vào nút thêm nhân viên để tiến hành chỉnh sửa")
}
function Update(){{
    let tknv=document.querySelector("#tknv").value;
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let ngaylam=document.querySelector("#datepicker").value;
    let luongCB=+document.querySelector("#luongCB").value;
    let chucvu=document.querySelector("#chucvu").value;
    let giolam=+document.querySelector("#gioLam").value;
    let valid=valiDate();
    if(valid==true)
    {
    let member=new Member(tknv,name,email,password,ngaylam,luongCB,chucvu,giolam)
    let index=memberList.findIndex((member)=>{{
      return member.tknv==tknv;
    }})
    memberList[index]=member;
    renderTable(memberList)
    resetForm()}
  }};

  
  function valiDate()
  {
    let tknv=document.querySelector("#tknv").value;
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let ngaylam=document.querySelector("#datepicker").value;
    let luongCB=+document.querySelector("#luongCB").value;
    let chucvu=document.querySelector("#chucvu").value;
    let giolam=+document.querySelector("#gioLam").value;
    let string=tknv.split("");
    if(string.length<4 || string.length>6)
    {
      document.querySelector("#tbTKNV").innerHTML="Tài khoản phải có từ 4-6 kí tự và không để trống";
      return false;
    }
    
    if(!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)))
    {
       document.querySelector("#tbTen").innerHTML="Tên nhân viên phải là chữ, không để trống, không viết dấu";
       return false;
    }
     if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
    document.querySelector("#tbEmail").innerHTML="Định dạng email không hợp lệ";
    return false;
  }
  let str2=password.split("");
  if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/.test(password)))
  {
     document.querySelector("#tbMatKhau").innerHTML="Mật khẩu phải dài từ 6-10 kí tự, chứa it nhất 1 kí tự số, 1 kí tự in hoa và 1 kí tự đặc biệt "
    return false;
  }
  if(!(/^([0-2][0-9]|(3)[0-1])([\/])(((0)[0-9])|((1)[0-2]))([\/])([0-9]{4})$/.test(ngaylam)))
  {
    document.querySelector("#tbNgay").innerHTML="không để trống, định dạng dd/mm/yyyy"
    return false;
  }

  if((luongCB<1000000)||(luongCB>20000000))
  {
    document.querySelector("#tbLuongCB").innerHTML="Số tiền nhập vào không hợp lệ"
    return false;
  }
  if((chucvu=="")||(chucvu=="Chọn chức vụ"))
  {
    document.querySelector("#tbChucVu").innerHTML="Vui lòng chọn chức vụ"
    return false;
  }
 if((giolam<80)||(giolam>200))
 {
  document.querySelector("#tbGiolam").innerHTML="Số giờ làm không hợp lệ"
  return false;
 }
   return true; 
  }