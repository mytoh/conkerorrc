
dumpln("my-keys");

require("global-overlay-keymap");

// keymap
define_key_alias("C-m", "return");
define_key_alias("C-i", "tab");
define_key_alias("C-[", "escape");

provide("my-keys");