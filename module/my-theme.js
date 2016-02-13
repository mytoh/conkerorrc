
// theme_load("default");

// https://github.com/uemurax/japanese-theme
function set_my_theme () {
    var path = get_home_directory();
    path.append(".themes");
    path.append("Japanese");
    path.append("conkeror");
    path.append("japanese-theme.js");
    load(path);
}
set_my_theme();
