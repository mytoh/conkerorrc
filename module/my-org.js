
dumpln("my-org");

function org_store_link (url, title, window) {
    var cmd_str = 'emacsclient org-protocol://store-link://'+url + '/' + title;
    if (window != null) {
        window.minibuffer.message('Issuing ' + cmd_str);
    }
    shell_command_blind(cmd_str);
}

interactive("org-store-link", "Stores [[url][title]] as org link and copies url to emacs kill ring",
            function (I) {
                org_store_link(encodeURIComponent(I.buffer.display_uri_string),
                               encodeURIComponent(I.buffer.document.title), I.window);
            });

/// For org-capture (or org-remember — just exchange capture with remember), use the following:
function org_capture (url, title, selection, window) {
    var cmd_str = 'emacsclient \"org-protocol://capture://'+url+'/'+title+'/'+selection+'\"';
    if (window != null) {
        window.minibuffer.message('Issuing ' + cmd_str);
    }
    shell_command_blind(cmd_str);
}

interactive("org-capture", "Clip url, title, and selection to capture via org-protocol",
            function (I) {
                org_capture(encodeURIComponent(I.buffer.display_uri_string), encodeURIComponent(I.buffer.document.title), encodeURIComponent(I.buffer.top_frame.getSelection()), I.window);
            });

// Now, you should be able to invoke the commands from within conkeror with M-x org-store-link and M-x org-capture (or remember).
// Or, if you'd like your familiar emacs keybindings, you can add the following to your .conkerorrc:

// define_key(content_buffer_normal_keymap, "C-c o r", "org-capture");
// define_key(content_buffer_normal_keymap, "C-c o l", "org-store-link");

provide("my-org");
