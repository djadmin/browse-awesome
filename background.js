(function () {
	'use strict';
	// Awesome Browser Shortcuts
	chrome.commands.onCommand.addListener(function (command) {
		var tabQuery = {active: true, currentWindow: true};
		if (command === 'toggle-pin') {
			// Get current tab in the active window
			chrome.tabs.query(tabQuery, function(tabs) {
				var currentTab = tabs[0];
				chrome.tabs.update(currentTab.id, {'pinned': !currentTab.pinned});
			});
		}
		else if (command === 'move-tab-left') {
			chrome.tabs.query(tabQuery, function (tabs) {
				var currentTab = tabs[0];
				chrome.tabs.move(currentTab.id, {'index': currentTab.index - 1});
			});
		}
		else if (command === 'move-tab-right') {
			chrome.tabs.query(tabQuery, function (tabs) {
				var currentTab = tabs[0];
				chrome.tabs.move(currentTab.id, {'index': currentTab.index + 1});
			});
		}
	});
})();