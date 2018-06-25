dumpln("my-css");

function register_stylesheet(name) {
    let (sheet = get_home_directory()) {
        sheet.append(".conkerorrc");
        sheet.append("stylesheets");
        sheet.append(name + ".css");
        register_user_stylesheet(make_uri(sheet));
        dumpln(name);
    }
}


function register_site_stylesheet(site, name) {
    let (sheet = get_home_directory()) {
        sheet.append(".conkerorrc");
        sheet.append("stylesheets");
        sheet.append(site);
        sheet.append(name + ".css");
        register_user_stylesheet(make_uri(sheet));
        dumpln(name);
    }
}

// register_stylesheet("volafile.io");
// register_stylesheet("about-blank");
// register_stylesheet("hacker-news");
// register_stylesheet("wikipedia");
// register_stylesheet("github.com");
register_stylesheet("dark");
register_stylesheet("pocket-web-dark");
register_site_stylesheet("kittens_game", "index");
/* register_site_stylesheet("kittens_game", "default");*/
/* register_site_stylesheet("kittens_game", "theme_dark");
 * */
provide("my-css");
