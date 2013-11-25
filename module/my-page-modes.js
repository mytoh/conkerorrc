
dumpln("my-page-modes");

/// modules
require("gmail");
require("github");
require("twitter");
require("duckduckgo");
require("facebook");
require("gmane");
require("google-calendar");
require("google-maps");
require("stackexchange");
require("wikipedia");
require("xkcd");
require("youtube-player");
require("youtube");
require("reddit");


function my_add_page_modes_path () {
  var home = get_home_directory().path;
  var page_modes = ".conkerorrc" + "/" + "module" + "/" + "page-modes";
  var path = 'file://' + home + "/" + page_modes;
  load_paths.unshift(path);
}
my_add_page_modes_path();


require("tumblr");


provide("my-page-modes");