dumpln("init.js");

// put contrib to load path
load_paths.unshift("chrome://conkeror-contrib/content/");

function my_add_module_path() {
    var home = get_home_directory().path;
    var module = ".conkerorrc" + "/" + "module";
    var path = 'file://' + home + "/" + module;
    load_paths.unshift(path);
}
my_add_module_path();


require("my-funcs");
require("my-settings");
require("my-modeline");
require("my-webjumps");
require("my-page-modes");
require("my-keys");
require("my-proxy");
require("my-css");
require("my-pref");
require("my-org");
require("my-selection-search");
// require("color-theme");
require("my-font");
require("my-theme");
require("my-ublock");
