dumpln("my-pref");

require("pref");

// refs
// [[https://gist.github.com/haasn/69e19fc2fe0e25f3cff5]]

/// User prefs
session_pref("browser.download.manager.closeWhenDone", true);
session_pref("extensions.checkCompatibility", false);
session_pref("browser.tabs.animate", false);
session_pref("browser.download.animateNotifications", false);
session_pref("gfx.xrender.enabled", false);
session_pref("dom.max_script_run_time", 0);
session_pref("dom.ipc.plugins.enabled", true);
// A value of true makes Mozilla put the word "Firefox" into your user-agent string, which will trick some websites' ua sniffing into thinking you are running firefox.
session_pref("general.useragent.compatMode.firefox", true);
// When true image documents will be automatically scaled to fit the viewport.
session_pref("browser.enable_automatic_image_resizing", true);
// A value of 3 forces scrollbars to be on the left. Further information.
session_pref("layout.scrollbar.side",3);
session_pref("layout.frame_rate.precise", true);
session_pref("privacy.trackingprotection.enabled", true);
// session_pref("javascript.options.mem.max", 51200);
session_pref("javascript.options.mem.high_water_mark", 30);
session_pref("browser.sessionhistory.max_entries", 10);

/// proxy
session_pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, 192.168.0.0/24")

/// squid
// session_pref('network.proxy.http',  "localhost");
// session_pref('network.proxy.http_port', 3128);
// session_pref('network.proxy.ssl',    "localhost");
// session_pref('network.proxy.ssl_port', 3128);
// session_pref('network.proxy.type', 1);

/// delegate
session_pref('network.proxy.http',  "proxy.koti");
session_pref('network.proxy.http_port', 3128);
session_pref('network.proxy.ssl',    "proxy.koti");
session_pref('network.proxy.ssl_port', 3128);
session_pref('network.proxy.type', 1);

/// relayd
// session_pref('network.proxy.http',  "127.0.0.1");
// session_pref('network.proxy.http_port', 8080);
// session_pref('network.proxy.ssl',    "127.0.0.1");
// session_pref('network.proxy.ssl_port', 8080);
// session_pref('network.proxy.type', 1);

/// disable proxy
// session_pref('network.proxy.type', 0);


// oopp
session_pref("dom.ipc.plugins.enabled", false);
session_pref("dom.ipc.plugins.enabled.libflashplayer.so", false);

// http
session_pref("network.http.spdy.enabled.http2draft", true);

// webm
// session_pref("media.mediasource.webm.enabled", true);
// session_pref("media.mediasource.ignore_codecs.", true);
// session_pref("media.mediasource.mp4.enabled", true);
// session_pref("media.fragmented.mp4.*", true);
// session_pref("media.mediasource.enabled", true);
// session_pref("media.fragmented-mp4.use-blank-decoder", false);
// session_pref("media.mediasource.whitelist", true);

// openh264
session_pref("media.gmp-gmpopenh264.enabled", false);

// [[https://gist.github.com/haasn/69e19fc2fe0e25f3cff5]]
/// WebSockets
//// These can be used for nefarious purposes and to bypass access restrictions.
session_pref("network.websocket.enabled", false);

// javascript
// These can be used for fingerprinting or data collection about the host system.
session_pref("dom.event.clipboardevents.enabled", false);
session_pref("dom.battery.enabled", false);
session_pref("browser.send_pings", false);
session_pref("webgl.disabled", true);

// pocket
session_pref("browser.pocket.enabled", false);

// WebRTC
session_pref("media.peerconnection.enabled", false);
session_pref("loop.enabled", false);

//DRM
session_pref("media.eme.enabled", false);
session_pref("media.gmp-eme-adobe.enabled", false);

// GeoLocation / Beacon
session_pref("browser.beacen.enabled", false);
session_pref("geo.enabled", false);
session_pref("geo.wifi.logging.enabled", false);
session_pref("geo.wifi.uri", "");

// Safe browsing
session_pref("browser.safebrowsing.enabled", false);
session_pref("browser.safebrowsing.downloads.enabled", false);
session_pref("browser.safebrowsing.malware.enabled", false);

// Social media integration
session_pref("social.directories", "");
session_pref("social.whitelist", "");
session_pref("social.manifest.facebook", "");
session_pref("social.remote-install.enabled", false);
session_pref("social.toast-notifications.enabled", false);

// Device tracking/statistics
session_pref("device.sensors.enabled", false);
session_pref("camera.control.face_detection.enabled", false);
session_pref("camera.control.autofocus_moving_callback.enabled", false);

// Tracking protection
session_pref("privacy.trackingprotection.enabled", true);

// DNT Header, DNT (“do not track”) header 
session_pref("privacy.donottrackheader.enabled", true);

// Stat tracking / telemetry
session_pref("datareporting.healthreport.service.enabled", false);
session_pref("datareporting.healthreport.uploadEnabled", false);
session_pref("toolkit.telemetry.enabled", false);

// Link pre-fetching
session_pref("network.http.speculative-parallel-limit", 0);

// font cache, workaround from emojione-color-font
// * [The Firefox internal font cache is not cleared when the fontconfig
//   changes][11]. Manually clear it in `about.config`, by setting
//   `gfx.font_rendering.fontconfig.fontlist.enabled` to `false`, restarting, and
//   setting it back to `true`. This may be encountered upgrading from v1.0-beta2
//   to v1.0-beta3.
session_pref("gfx.font_rendering.fontconfig.fontlist.enabled", true);


// Cryptography hardening
// session_pref("security.tls.unrestricted_rc4_fallback", false);
// session_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
// session_pref("security.tls.version.min", 1);
// session_pref("security.ssl.require_safe_negotiation", true);
// session_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// session_pref("security.ssl3.rsa_seed_sha", true);
// session_pref("security.OCSP.enabled", 1);
// session_pref("security.OCSP.require", true);

// security.ssl.require_safe_negotiation=true
// security.ssl.treat_unsafe_negotiation_as_broken=true


/// css features
session_pref("layout.css.grid.enabled", true);
session_pref("layout.css.font-loading-api.enabled", true);
session_pref("layout.css.unicode-range.enabled", true);


provide("my-pref");
