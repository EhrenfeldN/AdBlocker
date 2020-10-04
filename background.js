chrome.webRequest.onBeforeRequest.addListener(
	function(details){return { cancel: true }},
	{ urls: [
		"*://*.code.whitehatjr.com/*",
			"*://*.mgmotor.co.in/*",
			"*://*.zedo.com/*",
			"*://*.google.com/pagead/*",
			"*://*.google.com/aclk*",
			"*://*.google.co.in/pagead/*",
			"*://*.youtube.com/pagead/*",
			"*://*.youtube.com/api/stats/ads*",
			"*://*.codr.toppr.com/*",
			"*://*.wizklub.com/*",
			"*://*.lb.usemaxserver.de/*",
			"*://*.tracking.klickthru.com/*",
			"*://*.zmedia.com/*",
			"*://*.mktoresp.com/*",
			"*://*.kameleoon.eu/*",
			"*://*.reporo.net/*",
			"*://*.tlnk.io/*",
			"*://*.2o7.net/*",
			"*://*.wcomhost.com/*",
			"*://*.doubleclick.net/*",
			"*://*.fls.doubleclick.net/*",
			"*://*.voluumtrk.com/*",
			"*://*.mentalist.kameleoon.com/*",
			"*://*.ouasflpydty21tf.bapb.gdn/*",
			"*://*.bapi.adsafeprotected.com/*",
			"*://*.inq.com/*",
			"*://*.eu-api.swrve.com/*",
			"*://*.eu-content.swrve.com/*",
			"*://*.log.optimizely.com/*",
			"*://*.mpstat.us/*",
			"*://*.touchcommerce.com/*",
			"*://*.engine.mobileapptracking.com/*",
			"*://*.v.fwmrm.net/*",
			"*://*.cnzz.com/*",
			"*://*.addthis.com/*",
			"*://*.api.xiaoying.co/*",
			"*://*.scorecardresearch.com/*",
			"*://*.*.scorecardresearch.com/*",
			"*://*.zv1.november-lax.com/*"
		]
	},
	["blocking"]
);
//append the list in line 3 to block more sites
//eg:-
// "*://*.xyz.com/*"
