
dumpln("my-settings");

// extensions
require("new-tabs");
require("favicon");
require("clicks-in-new-buffer");
require("adblockplus");


//// homepage
let (home = get_home_directory()) {
    home.append(".org");
    home.append("etusivu");
    home.append("etusivu.html");
    homepage = home.path;
   dumpln(homepage);
}


// default directory for downloads and shell commands.
cwd = get_home_directory();
cwd.append("huone");
cwd.append("lataukset");

// remember last download directory
// {
//    let _save_path = my_download_path;

//    function update_save_path (info) {
//        _save_path = info.target_file.parent.path;
//    }

//    add_hook("download_added_hook", update_save_path);

//    suggest_save_path_from_file_name = function (filename, buffer) {
//        let file = make_file(_save_path);
//        file.append(filename);
//        return file.path;
//    }
// }


// load urls from the command line in new buffers instead
// of new windows.
url_remoting_fn = load_url_in_new_buffer;

// new-tabs
tab_bar_show_icon = true;
tab_bar_flex_tabs = true;

// load download buffers in the background in the current
// window, instead of in new windows.
download_buffer_automatic_open_target = OPEN_NEW_BUFFER_BACKGROUND;


// auto completion in mini buffer
minibuffer_auto_complete_default = true;
url_completion_use_history = true;
url_completion_use_bookmarks = true;

// favicon in minibuffer
read_buffer_show_icons = true;

// use alpaha for hints
hint_digits="aoeuidhtnspyfgcrl";


// recenter search
isearch_scroll_center_vertically = true;


// To invoke an alert, enter at a M-: prompt:
//  get_recent_conkeror_window().alert("hello world");

// let xkcd-mode put the funny alt text into the page.
xkcd_add_title = true;


/// click-in-new-buffer
// You can control whether buffers are created in the foreground or background (foreground is default).
// Set to either OPEN_NEW_BUFFER or OPEN_NEW_BUFFER_BACKGROUND
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND; // Now buffers open in background.

// You can control the mouse button which triggers buffer creation (middle is default).
// Set to 0 = left mouse, 1 = middle mouse, 2 = right mouse
clicks_in_new_buffer_button = 1; //  Now middle mouse follows links in new buffers.



// display profile name in title window
function my_title_format (window) {
    return '{'+get_current_profile()+'} '+window.buffers.current.description;
}

title_format_fn = my_title_format;

// key-kill
require("key-kill");
//key_kill_mode.test.push(build_url_regexp($domain = "github"));
key_kill_mode.test.push(/\/\/.*slashdot\.org\//);

// block focus change
require("block-content-focus-change");

// useragent
set_user_agent("Mozilla/5.0 (Windows NT 6.3; rv:38.0) Gecko/20100101 Firefox/38.0");

provide("my-settings");
