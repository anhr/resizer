/**
 * Common Javascript code. I use it in my different projects
 * Author: Andrej Hristoliubov
 * email: anhr@mail.ru
 * About me: https://googledrive.com/host/0B5hS0tFSGjBZfkhKS1VobnFDTkJKR0tVamxadmlvTmItQ2pxVWR0WDZPdHZxM2hzS1J3ejQ/AboutMe/
 * source: https://github.com/anhr/resizer
 * Licences: GPL, The MIT License (MIT)
 * Copyright: (c) 2015 Andrej Hristoliubov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Revision:
 *  2015-11-07, : 
 *       + Start.
 *
 */


function MessageElement(Message) {
    var element = document.getElementById('Message');
    if (element == null) {
        alert('ERROR: element Message == null. ' + Message);
        return;
    }
    if (element.innerHTML != Message)
    {
        //consoleLog('Message: ' + Message);
        element.innerHTML = Message + '<hr><div align="center"><input type="button" onclick="javascript: return MessageElement(\'\')" value="Close" style="margin-top:5px;" /></div>';
        if (Message == "")
            element.style.display = "none";
        else element.style.display = "block";
    }
}

function ErrorMessage(message, emailMe) {
    consoleError(message);

    //http://www.htmlhelp.com/reference/html40/entities/special.html
    var body;
    if (emailMe != false) {
        body = message;
        body = body.replace(/\n/g, "%0D%0A");
        body = body.replace(/ /g, "%20");
        body = body.replace(/"/g, "%22");
        body = body.replace(/&/g, "%26");
    }
    message = message.replace(/</g, '&lt;');
    message = message.replace(/>/g, '&gt;');

    message = message.replace(/\n/g, '<BR>');
    if (emailMe != false) {
        //http://www.rapidtables.com/web/html/mailto.htm
        if (typeof myEmail == 'undefined')
            myEmail = "anhr@mail.ru";
        message += "<BR><BR><a href=\"mailto:" + myEmail + "?subject=" + emailSubject + "&body=" + body + "\" >Email me about problem</a>"
    }
    MessageElement('<FONT style="color: red; background-color: white">ERROR: ' + message + '</FONT>');
}

function consoleLog(message) {
	try{
		console.log(message);//Do not works in WP
    } catch(e) {
    }
}

function consoleError(msg)
{
	try
	{
		console.error(msg);
    } catch(e) {
//		alert(msg);
    }
}

