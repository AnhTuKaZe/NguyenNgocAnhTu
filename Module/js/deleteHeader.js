// ========================================
// RevenueCat ETag Header Remover - Optimized
// ⚡ Performance: Ultra Fast
// 🔐 Remove caching headers for Locket
// ========================================

(function() {
  'use strict';
  
  // Get request headers (Direct reference - fastest)
  const headers = $request.headers;
  
  // Remove ETag headers (Both cases - optimized)
  delete headers["X-RevenueCat-ETag"];
  delete headers["x-revenuecat-etag"];
  
  // Return modified headers (Fastest return)
  $done({ headers: headers });
  
})();
