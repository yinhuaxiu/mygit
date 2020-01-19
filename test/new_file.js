function check(form){
    var accountName = $("#accountName"),password = $("#password");
    var accountName = accountName.val(),password = password.val();
    if(!accountName || accountName == ""){
        showMsg("用户名不能为空");
        form.accountName.focus ();
        return false;
    }
    if(!password || password == ""){
        showMsg("密码不能为空");
        form.password.focus ();
        return false;
    }

}

//错误信息提醒
function showMsg(msg){
    $("#CheckMsg").text(msg);
	$("#CheckMsg").text(msg1);
}


