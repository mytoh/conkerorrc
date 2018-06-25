
dumpln("my-funcs");

interactive("play-mpv",
            "Play url with mpv." ,
            function (I) {
                var url = I.window.buffers.current.document.location.href;
                I.window.minibuffer.message("mpv " + url);
                // shell_command needs conkeror-spawn-helper binary on PATH
                yield shell_command("mpv " + "'" + url + "'");

                // var data = "", error = "";
                // var result = yield shell_command(
                //     "convert rose: png:",
                //     $fds = [{ output: async_binary_string_writer("") },
                //             { input: async_binary_reader(function (s) data+=s||"") },
                //             { input: async_binary_reader(function (s) error+=s||"") }]);
                // if (result != 0 || error != "")
                //     throw new interactive_error("status "+result+", "+error);
                // var uri = "data:image/png;base64,"+btoa(data);
                // browser_object_follow(I.buffer, OPEN_NEW_BUFFER, load_spec({ uri: uri }));
            });


/* [[http://viewsourcecode.org/why/redhanded/bits/quickConkerorPrefs.html][RedHanded » Quick Conkeror Prefs]]*/
// toggle proxy
interactive("toggle-http-proxy", "Toggle Proxy", 
            function (I) {
                var proxytype = get_pref("network.proxy.type");
                /* set_pref("network.proxy.type", proxytype == 1 ? 0 : 1);
                 */
                if (proxytype == 1) {
                    session_pref('network.proxy.type', proxytype == 1 ? 0 : 1);
                    I.window.minibuffer.message("Disabled proxy");
                } else {
                    session_pref('network.proxy.type', proxytype == 1 ? 0 : 1);
                    I.window.minibuffer.message("Enabled proxy");
                }
            });
/* define_key(ctrlx_kmap, make_key("p", 0), "toggle-http-proxy");
 * */

provide("my-funcs");
