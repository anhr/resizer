rem run as administrator


cd /D "D:\My documents\MyProjects\trunk\WebFeatures\WebFeatures\GoogleSite\resizer"
set jsFolderDest=C:\inetpub\wwwroot\GoogleSite\resizer\

xcopy index.htm %jsFolderDest%index.htm /Y
xcopy Common.js %jsFolderDest%Common.js /Y

pause

