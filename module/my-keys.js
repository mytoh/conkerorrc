
dumpln("my-keys");

require("global-overlay-keymap");

// keymap
define_key_alias("C-m", "return");
define_key_alias("C-i", "tab");
define_key_alias("C-[", "escape");

// mini buffer
define_key(minibuffer_keymap, "C-h", "cmd_deleteCharBackward");

provide("my-keys");