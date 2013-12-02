
dumpln("my-webjumps");


//// web jumps
//
// blekko
define_webjump("blekko", "http://blekko.com/ws/%s", $alternative = "http://blekko.com/");
// delicious
define_delicious_webjumps("heinahattu");

// github
define_webjump("github", "http://github.com/search?q=%s&type=Everything");

provide("my-webjumps");