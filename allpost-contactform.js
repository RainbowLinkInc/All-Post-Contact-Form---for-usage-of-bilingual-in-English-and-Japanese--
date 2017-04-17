/*******************************************************************************
               "All Post Contact Form"'s JS File 
    - for usage of bilingual in English and Japanese -
                  - 英語と日本語の二ヶ国語利用 - 
                   Created by RainbowLink Inc.
           
                ###    Modified by You!   ###
                ###    Modify this file!  ### 
           
        * Check some inputted informations ( required items ) *
        
#--------------- How to Modify this File ------------------------------- 
https://www.Rainbow-Link.com/rainbowlink_inc_s_catalogue.htm?&item_no=RLF16&medialink_id=gh  
-----------------------------------------------------------------------#
#--------------------- このファイルの編集方法------------------------------- 
https://jp.Rainbow-Link.com/rainbowlink_inc_s_catalogue.htm?&item_no=RLF16ja&medialink_id=gh  
-----------------------------------------------------------------------#
******************************************************************************/

/* English  * Check some inputted informations ( required items )  */
function checkForm() {
    
    var x1 = document.forms["rl_apcf"]["NAME"].value;
    var x2 = document.forms["rl_apcf"]["E-mail"].value;
    var x3 = document.forms["rl_apcf"]["Message"].value;
    
   
     if (x1 == "") {
		alert("Would you input your Name?");
        return false;
    } 
    
     if (x2 == "") {
       alert("Would you input your E-mail address?");
        return false;
    }
    
     if (x3 == "") {
		alert("Would you input your Message?");
        return false;
    }
}  



/* Japanese * お問い合わせの必須項目チェック */
function checkFormJa() {    
  
    var x1 = document.forms["rl_apcf"]["お名前"].value;
    var x2 = document.forms["rl_apcf"]["メールアドレス"].value;
    var x3 = document.forms["rl_apcf"]["メッセージ"].value;
    
   
     if (x1 == "") {
		alert("お名前をご入力ください。");
        return false;
    } 
    
     if (x2 == "") {
       alert("メールアドレスをご入力ください。");
        return false;
    }
    
     if (x3 == "") {
		alert("メッセージをご入力ください。");
        return false;
    }
    
}
	