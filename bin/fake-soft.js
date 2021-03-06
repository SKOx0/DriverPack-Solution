var geoip = {};
SoftPack.jsonCallback([{
    "ID": "3",
    "Name": "7-Zip",
    "URL": "http://www.7-zip.org/a/7z1514.exe",
    "CheckedDefault": false,
    "Version": "15.14",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-12-31",
    "Registry_32": "HKEY_CURRENT_USER\\\\SOFTWARE\\\\7-Zip\\\\Path",
    "Registry_64": "HKEY_CURRENT_USER\\\\Software\\\\7-Zip\\\\Path64",
    "Keys": "/S",
    "Lang": "",

    "Condition": function() {
        return notebook.vendor === 'Acer' && ['Moscow', 'Spb'].indexOf(city) !== -1
    }

    // "Condition": function () {
    //     return notebook.vendor === 'Acer' && ['Moscow', 'Spb'].indexOf(city) !== -1
    // }

    // "condition": function(notebook){
    //     if (notebook.vendor=="Acer") { return true; }
    // }

    // "Condition": function(){
    //     if (notebook.vendor=="Acer") { return true; }
    // }

    //   "Condition": '(antivirus.lenght==0)&(os=='Windows 7)'

}, {
    "ID": "5",
    "Name": "Opera",
    "URL": "http://net.geo.opera.com/opera/stable/windows",
    "CheckedDefault": true,
    "Version": "30.0.1835.52",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Opera 30.0.1835.52\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Opera 30.0.1835.52\\\\DisplayName",
    "Keys": "-install -silent",
    "Lang": ""
}, {
    "ID": "6",
    "Name": "Firefox",
    "URL": "https://download-installer.cdn.mozilla.net/pub/firefox/releases/43.0.1/win32/pt-BR/Firefox%20Setup%2043.0.1.exe",
    "CheckedDefault": false,
    "Version": "43.0",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2016-01-01",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Mozilla Firefox 43.0.1 (x86)\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Mozilla Firefox 43.0.1 (x86)\\\\DisplayName",
    "Keys": "-ms",
    "Lang": "BR"
}, {
    "ID": "9",
    "Name": "Foxit PDF Reader",
    "URL": "http://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/win/7.x/7.3/en_us/FoxitReader73_enu_Setup_clean.exe",
    "CheckedDefault": false,
    "Version": "7.1.5.425",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Foxit Reader\\\\DisplayName",
    "Registry_64": "HKEY_CURRENT_USER\\\\Software\\\\Foxit Software\\\\Foxit Reader 7.3\\\\Windows\\\\bShowStatusBar",
    "Keys": "-ai1MUD -gm2 -fm0",
    "Lang": ""
}, {
    "ID": "10",
    "Name": "Codec Pack",
    "URL": "http://fileswdc01.dddload.net/static/K-Lite_Codec_Pack_1185_Full.exe",
    "CheckedDefault": false,
    "Version": "5.85",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\SAM CoDeC Pack\\\\DisplayName",
    "Registry_64": "HKEY_CURRENT_USER\\\\Software\\\\SamLab.ws\\\\SAM CoDeC Pack\\\\Install_Dir",
    "Keys": "/S",
    "Lang": "[ru,tt,uk,az,be,uz,hy,ka]"
}, {
    "ID": "11",
    "Name": "Skype",
    "URL": "",
    "CheckedDefault": false,
    "Version": "7.7.0.102",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{7A3C7E05-EE37-47D6-99E1-2EB05A3DA3F7}\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{7A3C7E05-EE37-47D6-99E1-2EB05A3DA3F7}\\\\DisplayName",
    "Keys": "/VERYSILENT /NOLAUNCH /NOGOOGLE /NOSTARTUP /NOPLUGINS",
    "Lang": ""
}, {
    "ID": "12",
    "Name": "uTorrent",
    "URL": "http://download.ap.bittorrent.com/track/stable/endpoint/utorrent/os/windows",
    "CheckedDefault": false,
    "Version": "3.2.3.28705",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\uTorrent\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\uTorrent\\\\DisplayName",
    "Keys": "/S",
    "Lang": ""
}, {
    "ID": "14",
    "Name": "PotPlayer",
    "URL": "",
    "CheckedDefault": false,
    "Version": "1.6.55390",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\PotPlayer\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\PotPlayer\\\\DisplayName",
    "Keys": "/S /Video-1 /Audio-0 /Sub-1 /Lists-0 /Shortcut-1010110 /AutoPlayVideo-1 /AutoPlayAudio-0 /ImpIni",
    "Lang": "rus"
}, {
    "ID": "15",
    "Name": "AIMP",
    "URL": "",
    "CheckedDefault": false,
    "Version": "3.60.1497",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\AIMP3\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\AIMP3\\\\DisplayName",
    "Keys": "/AUTO=\"%PROGRAMFILES%\\\\AIMP3\"",
    "Lang": ""
}, {
    "ID": "17",
    "Name": "FastStone Image Viewer",
    "URL": "",
    "CheckedDefault": false,
    "Version": "5.3",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\FastStone Image Viewer\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\FastStone Image Viewer\\\\DisplayName",
    "Keys": "/VERYSILENT /NORESTART",
    "Lang": ""
}, {
    "ID": "18",
    "Name": "TeamViewer",
    "URL": "",
    "CheckedDefault": false,
    "Version": "10.0.43879",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\TeamViewer\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\TeamViewer\\\\DisplayName",
    "Keys": "/S",
    "Lang": ""
}, {
    "ID": "19",
    "Name": "AOMEI Backupper",
    "URL": "",
    "CheckedDefault": false,
    "Version": "3.0.0",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{A83692F5-3E9B-4E95-9E7E-B5DF5536C09D}_is1\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{A83692F5-3E9B-4E95-9E7E-B5DF5536C09F}_is1\\\\DisplayName",
    "Keys": "/VERYSILENT /NORESTART",
    "Lang": ""
}, {
    "ID": "20",
    "Name": "Adobe Flash Player",
    "URL": "",
    "CheckedDefault": false,
    "Version": "18.0.0.209",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\Adobe Flash Player ActiveX\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\MozillaPlugins\\\\@adobe.com/FlashPlayer\\\\Description",
    "Keys": "-y -gm2 -fm0",
    "Lang": ""
}, {
    "ID": "21",
    "Name": "DirectX",
    "URL": "",
    "CheckedDefault": false,
    "Version": "9.0c",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\.NETFramework\\\\AssemblyFolders\\\\DX_1.0.2911.0\\\\",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\.NETFramework\\\\AssemblyFolders\\\\DX_1.0.2911.0\\\\",
    "Keys": "",
    "Lang": ""
}, {
    "ID": "22",
    "Name": "Microsoft Visual C++",
    "URL": "",
    "CheckedDefault": false,
    "Version": "2005-2015",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{F0C3E5D1-1ADE-321E-8167-68EF0DE699A5}\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{F0C3E5D1-1ADE-321E-8167-68EF0DE699A5}\\\\DisplayName",
    "Keys": "",
    "Lang": ""
}, {
    "ID": "23",
    "Name": "Yandex.Elements",
    "URL": "",
    "CheckedDefault": true,
    "Version": "7.2",
    "ReleaseDate": "2014-07-30",
    "UpdateDate": "2015-07-22",
    "Registry_32": "HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{EE24665C-844A-4489-9F11-70E41F4EE476}\\\\DisplayName",
    "Registry_64": "HKLM\\\\SOFTWARE\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Uninstall\\\\{EE24665C-844A-4489-9F11-70E41F4EE476}\\\\DisplayName",
    "Keys": "/quiet",
    "Lang": "rus"
}]);
