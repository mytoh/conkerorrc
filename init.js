// -*- mode: js3 -*-

dumpln("init.js");

// put contrib to load path
load_paths.unshift("chrome://conkeror-contrib/content/");

function my_add_module_path () {
  var home = get_home_directory().path;
  var module = ".conkerorrc" + "/" + "module";
  var path = 'file://' + home + "/" + module;
  load_paths.unshift(path);
}
my_add_module_path();


require("my-settings");
require("my-modeline");
require("my-webjumps");
require("my-keys");
