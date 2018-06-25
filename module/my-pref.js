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
session_pref("layout.scrollbar.side", 3);
session_pref("layout.frame_rate.precise", true);
session_pref("privacy.trackingprotection.enabled", true);
// session_pref("javascript.options.mem.max", 51200);
session_pref("javascript.options.mem.high_water_mark", 30);
session_pref("browser.sessionhistory.max_entries", 20);
session_pref("browser.sessionstore.interval", 30000);
// The maximum number of 'back button' session history entries to store in sessionstore.js.
// Default: 10 (-1 = no limit / 0 = only the currently active entry will be saved)
session_pref("browser.sessionstore.max_serialize_back", 3);
// The maximum number of 'forward button' session history entries to store in sessionstore.js.
// Default: -1 (-1 = no limit / 0 = only the currently active entry will be saved)
session_pref("browser.sessionstore.max_serialize_forward", 2);
// The maximum number of closed tabs that get saved.
// Default: 10
session_pref("browser.sessionstore.max_tabs_undo", 2);
// default: 30000
session_pref("browser.sessionstore.interval", 30000000);

/// proxy
session_pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1, 192.168.3.0/24");

/// squid
// session_pref('network.proxy.http',  "localhost");
// session_pref('network.proxy.http_port', 3128);
// session_pref('network.proxy.ssl',    "localhost");
// session_pref('network.proxy.ssl_port', 3128);
// session_pref('network.proxy.type', 1);

/// delegate
session_pref('network.proxy.http', "proxy.koti");
session_pref('network.proxy.http_port', 3128);
// session_pref('network.proxy.ssl', "proxy.koti");
session_pref('network.proxy.ssl_port', 0);
/* session_pref('network.proxy.gopher', "proxy.koti");
 * session_pref('network.proxy.gopher_port', 3128); */
session_pref('network.proxy.type', 1);

/// relayd
// session_pref('network.proxy.http',  "127.0.0.1");
// session_pref('network.proxy.http_port', 8080);
// session_pref('network.proxy.ssl',    "127.0.0.1");
// session_pref('network.proxy.ssl_port', 8080);
// session_pref('network.proxy.type', 1);

/// disable proxy
/* session_pref('network.proxy.type', 0);
 *  */

// oopp
session_pref("dom.ipc.plugins.enabled", false);
session_pref("dom.ipc.plugins.enabled.libflashplayer.so", false);

// http
session_pref("network.http.spdy.enabled.http2draft", false);

// http2 spdy
// http://zapanet.info/blog/item/3188
session_pref("network.http.spdy.enabled.http2", false);

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
session_pref("security.OCSP.require", false);

// security.ssl.require_safe_negotiation=true
// security.ssl.treat_unsafe_negotiation_as_broken=true


/// css features
session_pref("layout.css.grid.enabled", true);
session_pref("layout.css.font-loading-api.enabled", true);
session_pref("layout.css.unicode-range.enabled", true);


/// disable addon ceck
session_pref("xpinstall.whitelist.required", false);

/// disable crash report
session_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
session_pref("dom.ipc.plugins.reportCrashURL", false);

session_pref("reader.parse-on-load.enabled", false);

session_pref("layout.textarea.spellcheckDefault", false);

/* disable middle mouse auto scrolling */
session_pref("general.autoScroll", false);

/* cache, default value 215040 */
session_pref("browser.cache.disk.capacity", 215040 / 3 );

provide("my-pref");


/* 
 * https://boards.4chan.org/g/thread/59349945
 * user_pref("beacon.enabled", false);
 * user_pref("browser.download.useDownloadDir", false);
 * user_pref("browser.laterrun.enabled", false);
 * user_pref("browser.newtabpage.enabled", false);
 * user_pref("browser.privatebrowsing.autostart", true);
 * user_pref("browser.safebrowsing.malware.enabled", false);
 * user_pref("browser.safebrowsing.phishing.enabled", false);
 * user_pref("browser.startup.homepage", "about:blank");
 * user_pref("browser.tabs.crashReporting.sendReport", false);
 * user_pref("datareporting.healthreport.uploadEnabled", false);
 * user_pref("datareporting.policy.dataSubmissionEnabled", false);
 * user_pref("device.sensors.enabled", false);
 * user_pref("dom.battery.enabled", false);
 * user_pref("dom.event.clipboardevents.enabled", false);
 * user_pref("dom.event.contextmenu.enabled", false);
 * user_pref("dom.ipc.plugins.reportCrashURL", false);
 * user_pref("experiments.enabled", false);
 * user_pref("extensions.pocket.enabled", false);
 * user_pref("general.appname.override", "Netscape");
 * user_pref("general.appversion.override", "5.0 (Windows)");
 * user_pref("general.buildID.override", "20100101");
 * user_pref("general.oscpu.override", "Windows NT 6.3");
 * user_pref("general.platform.override", "Win32");
 * user_pref("general.productSub.override", "20100101");
 * user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.3;rv:45.0) Gecko/20100101 Firefox/45.0");
 * user_pref("general.useragent.vendor", "");
 * user_pref("general.useragent.vendorSub", "");
 * user_pref("geo.enabled", false);
 * user_pref("media.navigator.enabled", false);
 * user_pref("media.peerconnection.enabled", false);
 * user_pref("network.cookie.cookieBehavior", 1);
 * user_pref("network.dns.disablePrefetch", true);
 * user_pref("network.http.referer.spoofSource", true);
 * user_pref("network.predictor.enabled", false);
 * user_pref("network.user_prefetch-next", false);
 * user_pref("network.proxy.socks_remote_dns", true);
 * user_pref("social.remote-install.enabled", false);
 * user_pref("social.whitelist", "");*/

/* -------------------------------------------------------
 * */
/* 
 * user_pref("browser.newtabpage.storageVersion", 1);
 * user_pref("browser.open.lastDir", "/fig/wall");
 * user_pref("browser.pagethumbnails.storage_version", 3);
 * user_pref("browser.places.smartBookmarksVersion", 8);
 * user_pref("browser.reader.detectedFirstArticle", true);
 * user_pref("browser.rights.3.shown", true);
 * user_pref("browser.safebrowsing.provider.google.lastupdatetime", "1489250185578");
 * user_pref("browser.safebrowsing.provider.google.nextupdatetime", "1489252099578");
 * user_pref("browser.safebrowsing.provider.mozilla.lastupdatetime", "1489252512174");
 * user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "1489256112174");
 * user_pref("browser.search.countryCode", "ID");
 * user_pref("browser.search.region", "ID");
 * user_pref("browser.search.update", false);
 * user_pref("browser.sessionstore.upgradeBackup.latestBuildID", "20160607155532");
 * user_pref("browser.shell.checkDefaultBrowser", false);
 * user_pref("browser.showQuitWarning", true);
 * user_pref("browser.slowStartup.averageTime", 13034);
 * user_pref("browser.slowStartup.samples", 1);
 * user_pref("browser.startup.homepage", "about:newtab");
 * user_pref("browser.startup.homepage_override.buildID", "20160607155532");
 * user_pref("browser.startup.homepage_override.mstone", "45.2.0");
 * user_pref("browser.syncPromoViewsLeftMap", "{\"addons\":4,\"bookmarks\":0,\"passwords\":0}");
 * user_pref("browser.toolbarbuttons.introduced.pocket-button", true);*/
