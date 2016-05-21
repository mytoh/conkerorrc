
dumpln("tumblr");

require("content-buffer");

define_keymap("tumblr_keymap", $display_name = "tumblr");


// Navigation
define_key(tumblr_keymap, "j", null, $fallthrough);
define_key(tumblr_keymap, "k", null, $fallthrough);
define_key(tumblr_keymap, "l", null, $fallthrough);
define_key(tumblr_keymap, "n", null, $fallthrough);
define_key(tumblr_keymap, "r", null, $fallthrough);
define_key(tumblr_keymap, "M-r", null, $fallthrough);
define_key(tumblr_keymap, "M-e", null, $fallthrough);
define_key(tumblr_keymap, "M-c", null, $fallthrough);
define_key(tumblr_keymap, "M-tab", null, $fallthrough);
define_key(tumblr_keymap, "?", null, $fallthrough);
define_key(tumblr_keymap, "space", null, $fallthrough);
define_key(tumblr_keymap, "u", escape );

// next page
function tumblr_next_page (I) {
    var doc = I.buffer.document;
    var next = doc.getElementById("next_page_link");
if (next) {
        I.minibuffer.message(next);
            dom_node_click(next, 1, 1);

} else {
        I.minibuffer.message("can't find next page");
}

}

interactive("tumblr_next_page",
    "Open next page",
    tumblr_next_page);
define_key(tumblr_keymap, ">", "tumblr_next_page");

define_keymaps_page_mode("tumblr-mode",
    build_url_regexp($domain = "tumblr",
                     $allow_www = true),
    { normal: tumblr_keymap },
    $display_name = "Tumblr");

page_mode_activate(tumblr_mode);

provide("tumblr");
