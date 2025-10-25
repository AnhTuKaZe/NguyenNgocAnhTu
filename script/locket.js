////////////////////////////////
//  Locket Gold Unlock Script //
//  Production Stable V3.0.0  //
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

// Version control
var VERSION = "3.0.0";
var PRODUCT_ID = "locket.premium.yearly";

// Safety check: Đảm bảo response tồn tại
if (!$response) {
  console.log("❌ [Locket v" + VERSION + "] No response object");
  $done({});
}

if (!$response.body) {
  console.log("❌ [Locket v" + VERSION + "] No response body");
  $done({});
}

// Parse response body với error handling
var obj;
try {
  obj = JSON.parse($response.body);
  console.log("✅ [Locket v" + VERSION + "] Response parsed successfully");
} catch (e) {
  console.log("❌ [Locket v" + VERSION + "] JSON Parse error:", e.message);
  $done({});
}

// Ensure subscriber structure exists (tạo nếu chưa có)
if (!obj.subscriber) {
  console.log("⚠️ [Locket v" + VERSION + "] Creating subscriber object");
  obj.subscriber = {};
}

if (!obj.subscriber.subscriptions) {
  console.log("⚠️ [Locket v" + VERSION + "] Creating subscriptions object");
  obj.subscriber.subscriptions = {};
}

if (!obj.subscriber.entitlements) {
  console.log("⚠️ [Locket v" + VERSION + "] Creating entitlements object");
  obj.subscriber.entitlements = {};
}

// Get User-Agent with fallback
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";

// Check if this is Locket app
if (ua.includes("Locket")) {
  console.log("✅ [Locket v" + VERSION + "] Locket app detected");
  
  // Date configuration
  var purchaseDate = "2024-07-28T01:04:17Z";
  var expiresDate = "2099-12-31T23:59:59Z";
  
  // Subscription info - Full RevenueCat format
  var subscriptionInfo = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: expiresDate,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: purchaseDate,
    purchase_date: purchaseDate,
    store: "app_store"
  };
  
  // Entitlement info
  var entitlementInfo = {
    grace_period_expires_date: null,
    purchase_date: purchaseDate,
    product_identifier: PRODUCT_ID,
    expires_date: expiresDate
  };
  
  try {
    // Apply subscription
    obj.subscriber.subscriptions[PRODUCT_ID] = subscriptionInfo;
    console.log("✅ [Locket v" + VERSION + "] Subscription applied:", PRODUCT_ID);
    
    // Apply entitlements (cả 2 key để đảm bảo 100%)
    obj.subscriber.entitlements["premium"] = entitlementInfo;
    obj.subscriber.entitlements["Gold"] = entitlementInfo;
    console.log("✅ [Locket v" + VERSION + "] Entitlements applied: premium, Gold");
    
    console.log("🎉 [Locket v" + VERSION + "] Locket Gold unlocked successfully!");
  } catch (e) {
    console.log("❌ [Locket v" + VERSION + "] Error applying unlock:", e.message);
  }
} else {
  console.log("ℹ️ [Locket v" + VERSION + "] Not Locket app, skipping unlock");
}

// Return modified response
try {
  var modifiedBody = JSON.stringify(obj);
  $done({ body: modifiedBody });
} catch (e) {
  console.log("❌ [Locket v" + VERSION + "] Error stringifying response:", e.message);
  $done({});
}
