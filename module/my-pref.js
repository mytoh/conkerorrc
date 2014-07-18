dumpln("my-pref");

/// User prefs
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("extensions.checkCompatibility", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.download.animateNotifications", false);
user_pref("gfx.xrender.enabled", false);
user_pref("dom.max_script_run_time", 0);
user_pref("dom.ipc.plugins.enabled", true);
// A value of true makes Mozilla put the word "Firefox" into your user-agent string, which will trick some websites' ua sniffing into thinking you are running firefox.
user_pref("general.useragent.compatMode.firefox", true);
// When true image documents will be automatically scaled to fit the viewport.
user_pref("browser.enable_automatic_image_resizing", true);
// A value of 3 forces scrollbars to be on the left. Further information.
user_pref("layout.scrollbar.side",3);

/// squid
// user_pref('network.proxy.http',  "192.168.1.22");
// user_pref('network.proxy.http_port', 3128);
// user_pref('network.proxy.ssl',    "192.168.1.22");
// user_pref('network.proxy.ssl_port', 3128);
// user_pref('network.proxy.type', 1);

/// relayd
// user_pref('network.proxy.http',  "127.0.0.1");
// user_pref('network.proxy.http_port', 8080);
// user_pref('network.proxy.ssl',    "127.0.0.1");
// user_pref('network.proxy.ssl_port', 8080);
// user_pref('network.proxy.type', 1);


// oopp
user_pref("dom.ipc.plugins.enabled", false);
user_pref("dom.ipc.plugins.enabled.libflashplayer.so", false);

// unset proxy
user_pref('network.proxy.type', 0);

provide("my-pref");
