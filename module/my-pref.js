dumpln("my-pref");

/// User prefs
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("extensions.checkCompatibility", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.download.animateNotifications", false);
user_pref("gfx.xrender.enabled", false);

provide("my-pref");
