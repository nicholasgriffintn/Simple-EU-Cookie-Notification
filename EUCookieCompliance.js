var dropCookie = true;              
var cookieDuration = 365;
var cookieName = 'EUCookieCompliance';
var cookieValue = 'on';

function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<div class="cookie-wrapper" style=" max-width: 1200px; margin: 0 auto; width: 100%; border: 1px solid #ddd;"> <div class="cookie-inner-wrapper" style="width:100%; float:left; border: 1px solid #ddd; position:relative;">  <div class="cookie-message" style="width:90%;float: left;border-right: none;"> <p style="border: none!important;max-width: 100%!Important; float: left!important;">Our website uses cookies. By continuing we assume your permission to deploy cookies, you can find out more on our <a href="https://technutty.co.uk/cookies-information-page/" rel="nofollow" title="Cookies Information Page">cookies information page.    </a></p></div><div class="cookie-close" style="width: 10%;float: left;text-align: center;padding: 7px; position: absolute; right: 0px; top: 0px;"><a class="close-cookie-banner" style="font-size: 14px;font-weight: 800; href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></div></div></div>';
    // bodytag.appendChild(div);
    bodytag.insertBefore(div,bodytag.firstChild);
    document.getElementsByTagName('body')[0].className+=' cookiebanner';
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration);
}
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    if(window.dropCookie) {
        document.cookie = name+"="+value+expires+"; path=/";
    }
}

function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv();
    }
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
