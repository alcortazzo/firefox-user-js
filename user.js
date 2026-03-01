/*** [STARTUP & SESSION] ***/
user_pref("browser.startup.page", 3);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);


/*** [UI & APPEARANCE] ***/
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("sidebar.revamp.round-content-area", true);
user_pref("sidebar.expandOnHover", true);
user_pref("sidebar.animation.duration-ms", 100);
user_pref("sidebar.animation.expand-on-hover.duration-ms", 100);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// user_pref("widget.windows.mica", true);


/*** [TABS & GROUPS] ***/
user_pref("browser.tabs.groups.enabled", true);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.profiles.enabled", true);


/*** [FULL-SCREEN] ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);


/*** [NEW TAB PAGE & SPONSORED CONTENT] ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);


/*** [ADDRESS BAR & SEARCH] ***/
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.trending.featureGate", false);


/*** [DOWNLOADS] ***/
user_pref("browser.download.useDownloadDir", false);


/*** [PRIVACY & TRACKING PROTECTION] ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// user_pref("permissions.default.geo", 2);


/*** [SECURITY] ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
user_pref("pdfjs.enableScripting", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("permissions.default.desktop-notification", 2);


/*** [PASSWORDS & FORMS] ***/
user_pref("browser.formfill.enable", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.rememberSignons", false);


/*** [NETWORK & DNS] ***/
user_pref("network.trr.mode", 3);


/*** [AI & MACHINE LEARNING] ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
user_pref("browser.ai.control.pdfjsAltText", "blocked");
user_pref("browser.ai.control.sidebarChatbot", "blocked");
user_pref("browser.ai.control.smartTabGroups", "blocked");
user_pref("browser.ai.control.translations", "available");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.linkPreview.enabled", false);


/*** [TELEMETRY & DATA COLLECTION] ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);


/*** [EXTENSIONS & ADD-ONS RECOMMENDATIONS] ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);


/*** [PERFORMANCE & RENDERING] ***/
// user_pref("gfx.webrender.layer-compositor", true);
// user_pref("layers.gpu-process.enabled", true);
