(function () {
	'use strict';
	// Awesome Browser Shortcuts
	chrome.commands.onCommand.addListener(function (command) {
		if (command === 'toggle-pin') {
			// Get current tab in the active window
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var currentTab = tabs[0];
				chrome.tabs.update(currentTab.id, {'pinned': !currentTab.pinned});
			});
		}
	});
})();