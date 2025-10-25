////////////////////////////////
//  Locket Gold Unlock Script //
//    Stable & Simple V3.1    //
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

// Parse response với try-catch (QUAN TRỌNG: tránh crash nếu API lỗi)
var obj;
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ JSON parse error:", e.message);
  $done({});
}

// Ensure subscriber structure exists (QUAN TRỌNG: tránh null error)
if (!obj.subscriber) obj.subscriber = {};
if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};

// Get User-Agent
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";

// Unlock nếu là Locket app
if (ua.includes("Locket")) {
  var purchaseDate = "2024-07-28T01:04:17Z";
  var expiresDate = "2099-12-31T23:59:59Z";
  
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
  
  var entitlementInfo = {
    grace_period_expires_date: null,
    purchase_date: purchaseDate,
    product_identifier: "locket.premium.yearly",
    expires_date: expiresDate
  };
  
  obj.subscriber.subscriptions["locket.premium.yearly"] = subscriptionInfo;
  obj.subscriber.entitlements["premium"] = entitlementInfo;
  obj.subscriber.entitlements["Gold"] = entitlementInfo;
  
  console.log("✅ Locket Gold unlocked");
}

$done({ body: JSON.stringify(obj) });
