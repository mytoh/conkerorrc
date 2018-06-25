
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

// google search by image
define_webjump("gI", "https://encrypted.google.com/searchbyimage?safe=off&hl=en&site=search&image_url=%s");

// github
define_webjump("gh","https://github.com/%s");

// iqdb
define_webjump("iqdb", "https://iqdb.org/?url=%s");

// youtube
define_webjump("youtube", "http://www.youtube.com/results?aq=f&oq=&search_query=%s");
      
// gitlab
define_webjump("gitlab", "https://gitlab.com/search?search=%s");

// cpan
define_webjump("cpan", "https://metacpan.org/search?q=%s");

// hooktube
define_webjump("hooktube", "https://hooktube.com/results?search_query=%s");

// yandex image searc
define_webjump("yandex", "https://yandex.com/images/search?source=collections&undefined&url=%s&rpt=imageview");
define_webjump("yi", "https://yandex.com/images/search?source=collections&undefined&url=%s&rpt=imageview");

provide("my-webjumps");
