(function(window) {
  function initChatWidget(config) {
    // Your widget logic
    console.log("Chat widget initialized", config);
  }

  // Expose the function to the global window object
  window.initChatWidget = initChatWidget;
})(window);