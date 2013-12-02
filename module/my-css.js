
dumpln("my-css");

function resister_stylesheet (name) {
    let (sheet = get_home_directory()) {
    sheet.append(".conkerorrc");
    sheet.append("stylesheets");
    sheet.append(name);
      register_user_stylesheet(make_uri(sheet));
      dumpln(name);
}
}

provide("my-css");
