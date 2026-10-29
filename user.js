/*** [STARTUP & SESSION] ***/
user_pref("browser.startup.page", 3); // On startup: restore previous session (windows and tabs)


/*** [UI & APPEARANCE] ***/
user_pref("findbar.highlightAll", true); // In Find bar, highlight all matches (not just the current one)
user_pref("browser.ctrlTab.sortByRecentlyUsed", true); // Ctrl+Tab cycles tabs in most-recently-used order
user_pref("browser.startup.homepage", "about:home"); // Homepage URL (Firefox Home)


/*** [TABS & GROUPS] ***/
user_pref("browser.tabs.groups.smart.enabled", false); // Disable AI-suggested ("smart") tab grouping


/*** [NEW TAB PAGE & SPONSORED CONTENT] ***/
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // No preset default shortcut sites on the new tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Hide sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Disable Pocket-style "Recommended stories"
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Hide sponsored stories/cards
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // Hide the sponsored-content checkboxes in new tab settings
user_pref("browser.newtabpage.activity-stream.widgets.enabled", false); // Disable new tab widgets (weather, lists, timer, etc.)
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Disable the Shortcuts (top sites) row


/*** [ADDRESS BAR & SEARCH] ***/
user_pref("browser.urlbar.quicksuggest.enabled", false); // Disable Firefox Suggest (sponsored/contextual suggestions in address bar)
user_pref("browser.urlbar.trending.featureGate", false); // Disable trending search suggestions in address bar


/*** [PRIVACY & TRACKING PROTECTION] ***/
user_pref("browser.contentblocking.category", "strict"); // Enhanced Tracking Protection set to Strict
user_pref("privacy.globalprivacycontrol.enabled", true); // Send Global Privacy Control signal ("don't sell/share my data")
// user_pref("privacy.userContext.ui.enabled", true); // Enable Container Tabs UI
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true); // Keep baseline exceptions that fix major site breakage
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false); // Disable convenience exceptions (stricter, may break some embeds/logins)


/*** [SECURITY] ***/
user_pref("dom.security.https_only_mode", true); // HTTPS-Only Mode in all windows
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true); // Show helpful suggestions on the HTTPS-Only error page
user_pref("pdfjs.enableScripting", false); // Disable JavaScript inside PDFs in the built-in viewer
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // Don't send download info to Google to check unknown files (local list checks still work)
user_pref("permissions.default.desktop-notification", 2); // Block website notification requests by default (2 = block)


/*** [PASSWORDS & FORMS] ***/
// user_pref("browser.formfill.enable", false); // Default is true; Don't remember search and form history
// user_pref("signon.formlessCapture.enabled", false); // Don't capture credentials from pages without a proper <form>
// user_pref("signon.rememberSignons", false); // Don't offer to save logins/passwords (e.g. you use an external manager)


/*** [NETWORK & DNS] ***/
user_pref("network.trr.mode", 2); // DNS-over-HTTPS first, fall back to system DNS if it fails


/*** [AI & MACHINE LEARNING] ***/
user_pref("browser.ai.control.default", "blocked"); // Global AI Controls: block all AI features by default
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked"); // Block AI key points in link previews
user_pref("browser.ai.control.pdfjsAltText", "blocked"); // Block AI-generated alt text for images in PDFs
user_pref("browser.ai.control.sidebarChatbot", "blocked"); // Block the AI chatbot in the sidebar
user_pref("browser.ai.control.smartTabGroups", "blocked"); // Block AI tab-group suggestions
user_pref("browser.ai.control.translations", "available"); // Exception: keep on-device page translation available
user_pref("browser.ml.enable", false); // Turn off the local ML/inference engine
user_pref("browser.ml.chat.enabled", false); // Disable the AI chatbot feature
user_pref("browser.ml.chat.menu", false); // Remove "Ask chatbot" from the context menu
user_pref("browser.ml.linkPreview.enabled", false); // Disable link previews (Alt+Shift hover)


/*** [TELEMETRY & DATA COLLECTION] ***/
user_pref("app.shield.optoutstudies.enabled", false); // Opt out of Mozilla "Studies"
user_pref("app.normandy.enabled", false); // Disable Normandy (remote experiments/pref rollouts)


/*** [EXTENSIONS & ADD-ONS RECOMMENDATIONS] ***/
// user_pref("extensions.getAddons.showPane", false); // Hide the "Recommendations" pane in the Add-ons Manager
// user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // Hide recommended add-ons in about:addons
user_pref("browser.discovery.enabled", false); // Disable personalized extension recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // No "Contextual Feature Recommendation" popups for add-ons
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // No contextual popups recommending Firefox features
user_pref("browser.preferences.moreFromMozilla", false); // Hide the "More from Mozilla" section in Settings
