
dumpln("my-css");

function resister_stylesheet (name) {
  let (sheet = get_home_directory()) {
    sheet.append(".conkerorrc");
    sheet.append("stylesheets");
    sheet.append(name + ".css");
    register_user_stylesheet(make_uri(sheet));
    dumpln(name);
  }
}

// resister_stylesheet("volafile.io");
// resister_stylesheet("about-blank");
// resister_stylesheet("hacker-news");
// resister_stylesheet("wikipedia");
// resister_stylesheet("github.com");
 resister_stylesheet("atom-one-dark");

provide("my-css");
