function loginCheck(){
	checkname();
	checkpassword();
}
function checkname()  //检查用户名
{
    var myname=document.getElementById("account").value;    //获取用户名文本框的值
    var myDivname=document.getElementById("account_error");         //定义用户名文本框的提示
    if(myname=="")
    {
        myDivname.innerHTML="用户名不能为空";
        return false;
    }
}
 
function checkpassword()     //检查密码
{
  var mypassword=document.getElementById("password").value;   //获取密码文本框的值
  var mydivpassword=document.getElementById("password_error");      //获取密码文本框的提示
  if(mypassword=="")
  {
    mydivpassword.innerHTML="密码不能为空";
    return false;
  }else if(mypassword.length<6){
    mydivpassword.innerHTML="密码至少为6位";
    return false;
  }
}
