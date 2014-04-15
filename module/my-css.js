
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

resister_stylesheet("volafile.io");
// resister_stylesheet("github.com");

provide("my-css");
