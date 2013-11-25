
dumpln("my-webjumps");

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

//// web jumps
//
// blekko
define_webjump("blekko", "http://blekko.com/ws/%s", $alternative = "http://blekko.com/");
// delicious
define_delicious_webjumps("heinahattu");

provide("my-webjumps");