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
  VERSION: "4.0.0",
  PRODUCT_ID: "locket.premium.yearly",
  PURCHASE_DATE: "2024-07-28T01:04:17Z",
  EXPIRES_DATE: "2099-12-31T23:59:59Z",
  DEBUG: false // Set true để bật debug logging
};

// ============================================
// PERFORMANCE: Early exit nếu không phải Locket
// ============================================
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
if (!ua || ua.indexOf("Locket") === -1) {
  // Không phải Locket app, skip processing (FAST!)
  if (CONFIG.DEBUG) console.log("[Locket v" + CONFIG.VERSION + "] Not Locket app, bypass");
  $done({});
}

// ============================================
// PARSE RESPONSE WITH ERROR HANDLING
// ============================================
var obj;
try {
  obj = JSON.parse($response.body);
  if (CONFIG.DEBUG) console.log("[Locket v" + CONFIG.VERSION + "] Response parsed successfully");
} catch (e) {
  console.log("[Locket v" + CONFIG.VERSION + "] ❌ JSON parse error:", e.message);
  console.log("[Locket v" + CONFIG.VERSION + "] Response body:", $response.body);
  $done({});
}

// ============================================
// VALIDATE & CREATE SUBSCRIBER STRUCTURE
// ============================================
if (!obj || typeof obj !== 'object') {
  console.log("[Locket v" + CONFIG.VERSION + "] ❌ Invalid response object");
  $done({});
}

// Ensure subscriber structure exists
if (!obj.subscriber) {
  if (CONFIG.DEBUG) console.log("[Locket v" + CONFIG.VERSION + "] Creating subscriber object");
  obj.subscriber = {
    original_app_user_id: "$RCAnonymousID:" + Date.now(),
    original_application_version: "1.0",
    first_seen: new Date().toISOString(),
    last_seen: new Date().toISOString(),
    management_url: null,
    non_subscriptions: {},
    other_purchases: {},
    subscriptions: {},
    entitlements: {}
  };
} else {
  // Ensure nested objects exist
  if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
  if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
}

// ============================================
// BUILD SUBSCRIPTION & ENTITLEMENT INFO
// ============================================
var subscriptionInfo = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: CONFIG.EXPIRES_DATE,
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: CONFIG.PURCHASE_DATE,
  purchase_date: CONFIG.PURCHASE_DATE,
  store: "app_store",
  // Additional fields for compatibility
  auto_resume_date: null,
  refunded_at: null,
  store_transaction_id: "990000" + Date.now(),
  original_store_transaction_id: "990000" + Date.now()
};

var entitlementInfo = {
  grace_period_expires_date: null,
  purchase_date: CONFIG.PURCHASE_DATE,
  product_identifier: CONFIG.PRODUCT_ID,
  expires_date: CONFIG.EXPIRES_DATE
};

// ============================================
// APPLY UNLOCK (WITH ERROR HANDLING)
// ============================================
try {
  // Apply subscription
  obj.subscriber.subscriptions[CONFIG.PRODUCT_ID] = subscriptionInfo;
  
  // Apply entitlements (multiple keys for compatibility)
  obj.subscriber.entitlements["premium"] = entitlementInfo;
  obj.subscriber.entitlements["Gold"] = entitlementInfo;
  obj.subscriber.entitlements["pro"] = entitlementInfo; // Backup key
  
  // Update last seen
  obj.subscriber.last_seen = new Date().toISOString();
  
  if (CONFIG.DEBUG) {
    console.log("[Locket v" + CONFIG.VERSION + "] ✅ Subscription applied:", CONFIG.PRODUCT_ID);
    console.log("[Locket v" + CONFIG.VERSION + "] ✅ Entitlements applied: premium, Gold, pro");
  }
  
  console.log("[Locket v" + CONFIG.VERSION + "] 🎉 Locket Gold unlocked successfully!");
  
} catch (e) {
  console.log("[Locket v" + CONFIG.VERSION + "] ❌ Error applying unlock:", e.message);
  // Vẫn tiếp tục xử lý, không crash
}

// ============================================
// RETURN MODIFIED RESPONSE
// ============================================
try {
  var modifiedBody = JSON.stringify(obj);
  $done({ body: modifiedBody });
} catch (e) {
  console.log("[Locket v" + CONFIG.VERSION + "] ❌ Error stringifying response:", e.message);
  // Fallback: return original response
  $done({});
}
