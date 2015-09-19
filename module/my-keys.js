
dumpln("my-keys");

require("global-overlay-keymap");

// keymap
define_key_alias("C-m", "return");
define_key_alias("C-i", "tab");
define_key_alias("C-[", "escape");
define_key(default_global_keymap,"H", "home");
define_key(default_global_keymap,"Q", "kill-current-buffer");
define_key(default_global_keymap,"q", "escape");
define_key(default_global_keymap, "k", "cmd_scrollLineUp");
define_key(default_global_keymap, "j", "cmd_scrollLineDown");
define_key(default_global_keymap, "C-u", "cmd_scrollPageUp");
define_key(default_global_keymap, "C-d", "cmd_scrollPageDown");
define_key(default_global_keymap, "C-j", "buffer-next");
define_key(default_global_keymap, "C-k", "buffer-previous");
define_key(default_base_keymap, "M-u", "universal-argument");


//// http://emacs-fu.blogspot.jp/2010/12/conkeror-web-browsing-emacs-way.html
// copy url with C-c u
interactive("copy-url",
        "Copy the current buffer's URL to the clipboard",
        function(I) {
            var text = I.window.buffers.current.document.location.href;
            writeToClipboard(text);
            I.window.minibuffer.message("copied: " + text);
        }
);
define_key(default_global_keymap, "C-c u", "copy-url");

// reload conkerorrc with C-c r
interactive("reload-config", "reload conkerorrc",
       function(I) {
          load_rc();
          I.window.minibuffer.message("config reloaded");
       }
);
define_key(default_global_keymap, "C-c r", "reload-config");

// mini buffer
define_key(minibuffer_keymap, "C-h", "cmd_deleteCharBackward");

provide("my-keys");
