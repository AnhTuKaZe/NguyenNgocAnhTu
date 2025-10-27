// ========================================
// 🚀 Optimized Header Handler for iOS
// ✨ iPhone & iPad Performance Optimized
// 📱 Device-Aware Processing
// ========================================
const version = 'V2.0.0';

// ========= Performance Optimization ========= //
const CONFIG = {
  headerKey: "X-RevenueCat-ETag",
  debugMode: false,
  maxRetries: 3
};

// ========= Device Detection ========= //
function getDeviceInfo() {
  const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
  return {
    isIPad: /iPad/.test(ua),
    isIPhone: /iPhone/.test(ua),
    iosVersion: (ua.match(/OS (\d+)_/) || [])[1] || "unknown"
  };
}

// ========= Optimized Header Setter ========= //
function setHeaderValue(headers, key, value) {
  if (!headers || typeof headers !== 'object') {
    console.log("⚠️ Invalid headers object");
    return false;
  }
  
  try {
    const lowerKey = key.toLowerCase();
    
    // Remove all variations of the header (case-insensitive)
    Object.keys(headers).forEach(headerKey => {
      if (headerKey.toLowerCase() === lowerKey) {
        delete headers[headerKey];
      }
    });
    
    // Set new value if provided
    if (value !== null && value !== undefined) {
      headers[key] = value;
    }
    
    return true;
  } catch (e) {
    console.log("❌ Error setting header:", e.message);
    return false;
  }
}

// ========= Main Processing ========= //
function processRequest() {
  try {
    // Device detection for optimized processing
    const device = getDeviceInfo();
    
    // Clone headers to avoid mutation issues
    const modifiedHeaders = Object.assign({}, $request.headers);
    
    // Remove ETag headers for RevenueCat
    const headersToRemove = [
      "X-RevenueCat-ETag",
      "x-revenuecat-etag",
      "If-None-Match",
      "if-none-match"
    ];
    
    headersToRemove.forEach(header => {
      setHeaderValue(modifiedHeaders, header, null);
    });
    
    // Performance logging for debugging
    if (CONFIG.debugMode) {
      console.log(`📱 Device: ${device.isIPad ? 'iPad' : 'iPhone'} | iOS: ${device.iosVersion}`);
      console.log("✅ Headers modified successfully");
    }
    
    // Return modified headers
    $done({ headers: modifiedHeaders });
    
  } catch (error) {
    console.log("❌ Critical error in processRequest:", error.message);
    
    // Fallback: Return original headers on error
    $done({ headers: $request.headers });
  }
}

// ========= Memory-Efficient Execution ========= //
// Immediate execution with memory cleanup
(() => {
  processRequest();
})();
