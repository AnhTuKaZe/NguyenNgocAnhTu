////////////////////////////////
//   RevenueCat ETag Remover  //
// Production Optimized V3.0.0 //
////////////////////////////////
// 🇬🇧 Update By: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Messenger Channel (Latest Updates): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////
// 🇻🇳 Cập nhật bởi: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Kênh Messenger (Cập nhật mới nhất): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////

// ============================================
// CONFIGURATION
// ============================================
var CONFIG = {
  VERSION: "3.0.0",
  DEBUG: false // Set true để bật debug logging
};

// ============================================
// VALIDATE REQUEST
// ============================================
if (!$request || !$request.headers) {
  if (CONFIG.DEBUG) console.log("[deleteHeader v" + CONFIG.VERSION + "] ❌ Invalid request");
  $done({});
}

// ============================================
// HEADER REMOVAL FUNCTION
// ============================================
/**
 * Remove ETag header với tất cả các variants
 * @param {Object} headers - Request headers object
 * @param {String} key - Header key cần remove
 */
function removeHeader(headers, key) {
  var variants = [
    key,                          // Original case
    key.toLowerCase(),            // lowercase
    key.toUpperCase(),            // UPPERCASE
    "If-None-Match",              // Related header
    "if-none-match"               // lowercase variant
  ];
  
  for (var i = 0; i < variants.length; i++) {
    if (headers[variants[i]]) {
      delete headers[variants[i]];
    }
  }
  
  return headers;
}

// ============================================
// APPLY HEADER REMOVAL
// ============================================
var modifiedHeaders = $request.headers;

try {
  // Remove ETag headers
  removeHeader(modifiedHeaders, "X-RevenueCat-ETag");
  removeHeader(modifiedHeaders, "X-Platform-Version");
  
  // Set bypass headers (optional, for extra cache bypass)
  modifiedHeaders["Cache-Control"] = "no-cache";
  modifiedHeaders["Pragma"] = "no-cache";
  
  if (CONFIG.DEBUG) {
    console.log("[deleteHeader v" + CONFIG.VERSION + "] ✅ Headers cleaned successfully");
  }
  
} catch (e) {
  console.log("[deleteHeader v" + CONFIG.VERSION + "] ❌ Error:", e.message);
  // Continue anyway
}

// ============================================
// RETURN MODIFIED HEADERS
// ============================================
$done({ headers: modifiedHeaders });
