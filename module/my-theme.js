
// http://conkeror.org/Appearance
session_pref("browser.display.background_color",  "#383C4A");


// css selectors look ↓ (not working?)
// chrome://browser/content/browser.xul  
// http://pastebin.com/raw/z4hmAWy2

// theme_load("default");
 // theme_load("gesso");
 // theme_load("mono");
theme_unload("default");
theme_load_paths.unshift("~/.conkerorrc/style/");
 theme_load("monoral");

// function theme_zenburn () {
// theme_load_paths.unshift(" ~/.emacs.d/vendor/github.com/ivoarch/");
// theme_unload("default");
// theme_load("conkeror-theme-zenburn");
// }
// theme_zenburn();


// https://github.com/uemurax/japanese-theme
// function set_my_theme () {
//     var path = get_home_directory();
//     path.append(".themes");
//     path.append("Japanese");
//     path.append("conkeror");
//     path.append("japanese-theme.js");
//     load(path);
// }
// set_my_theme();
