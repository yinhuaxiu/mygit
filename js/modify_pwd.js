function modifyCheck(){
	var myname=document.getElementById("oldPwd").value;    //获取用户名文本框的值
	var myDivname=document.getElementById("error_box1");         //定义用户名文本框的提示
	var mypassword=document.getElementById("newPwd").value;   //获取密码文本框的值
	var mydivpassword=document.getElementById("error_box2");      //获取密码文本框的提示
	var mypassword1=document.getElementById("conPwd").value;   //获取密码文本框的值
	var mydivpassword1=document.getElementById("error_box3");      //获取密码文本框的提示
	
	checkOldPwd();
	checkNewPwd();
	checkConPwd();
}
function checkOldPwd()  //检查原密码
{
	var myname=document.getElementById("oldPwd").value;    //获取用户名文本框的值
	var myDivname=document.getElementById("error_box1");         //定义用户名文本框的提示
   
    if(myname=="")
    {
        myDivname.innerHTML="密码不能为空";
        return false;
    }else if(myname.length<6){
    myDivname.innerHTML="密码至少为6位";
    return false;
  }
}
 
function checkNewPwd()     //新密码
{
  var mypassword=document.getElementById("newPwd").value;   //获取密码文本框的值
  var mydivpassword=document.getElementById("error_box2");      //获取密码文本框的提示
  if(mypassword=="")
  {
    mydivpassword.innerHTML="密码不能为空";
    return false;
  }else if(mypassword.length<6){
    mydivpassword.innerHTML="密码至少为6位";
    return false;
  }else if(myname.value==mypassword.value){
	mydivpassword.innerHTML="旧密码和新密码相同";
	return false;
  }
}

function checkConPwd()     //检查确认密码
{
  var mypassword1=document.getElementById("conPwd").value;   //获取密码文本框的值
  var mydivpassword1=document.getElementById("error_box3");      //获取密码文本框的提示
  if(mypassword1=="")
  {
    mydivpassword1.innerHTML="密码不能为空";
    return false;
  }else if(mypassword1.length<6){
    mydivpassword1.innerHTML="密码至少为6位";
    return false;
  }else if(mypassword.value!=mypassword1.value){
	mydivpassword1.innerHTML="两次输入的密码不一致";
  }
}
