
dumpln("my-settings");

require("new-tabs");
require("favicon");
require("clicks-in-new-buffer");

// extensions
require("adblockplus");


theme_load("default");

// default directory for downloads and shell commands.
cwd = get_home_directory();
cwd.append("huone");
cwd.append("lataukset");


// load urls from the command line in new buffers instead
// of new windows.
url_remoting_fn = load_url_in_new_buffer;

// new-tabs
tab_bar_show_icon = true;

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


/// User prefs
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("extensions.checkCompatibility", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.download.animateNotifications", false);


provide("my-settings");
