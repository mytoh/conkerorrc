
dumpln("my-webjumps");


//// web jumps
//
// blekko
define_webjump("blekko", "http://blekko.com/ws/%s", $alternative = "http://blekko.com/");
// delicious
define_delicious_webjumps("heinahattu");

// github
define_webjump("github", "http://github.com/search?q=%s&type=Everything");

// duckduckgo with google
define_webjump("d", "https://www.duckduckgo.com/?q=!g+%s");

// google images
define_webjump("gi", "https://www.google.com/search?tbm=isch&q=%s");

provide("my-webjumps");
