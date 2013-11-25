
dumpln("my-webjumps");


//// web jumps
//
// blekko
define_webjump("blekko", "http://blekko.com/ws/%s", $alternative = "http://blekko.com/");
// delicious
define_delicious_webjumps("heinahattu");

provide("my-webjumps");