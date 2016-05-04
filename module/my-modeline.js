
dumpln("my-modeline");

require("mode-line-buttons");


// To enable favicons in the read_buffer completions list:
read_buffer_show_icons = true;

/// modeline

// loading count
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);

// add buttons
mode_line_add_buttons(standard_mode_line_buttons, true);

// download
add_hook("mode_line_hook", mode_line_adder(downloads_status_widget));

// favicon
add_hook("mode_line_hook", mode_line_adder(buffer_icon_widget), true);

// To enable window buffer count in the mode-line:
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);

provide("my-modeline");
