////////////////////////////////////////////////////////////////
// 🇬🇧 Update By: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Messenger Channel (Latest Updates): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
/////////////////////////////////////////////////////////////////
// 🇻🇳 Cập nhật bởi: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Kênh Messenger (Cập nhật mới nhất): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
/////////////////////////////////////////////////////////////////

// Kiểm tra request headers
if (!$response || !$response.body) {
  $done({});
}

const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
let obj;

// Parse response body với error handling
try {
  obj = JSON.parse($response.body);
  
  // Đảm bảo cấu trúc subscriber tồn tại
  if (!obj.subscriber) {
    obj.subscriber = {};
  }
  if (!obj.subscriber.entitlements) {
    obj.subscriber.entitlements = {};
  }
  if (!obj.subscriber.subscriptions) {
    obj.subscriber.subscriptions = {};
  }
} catch (e) {
  console.log("❌ Parse error:", e.message);
  $done({});
}

// Chỉ xử lý nếu là Locket app
if (ua.includes("Locket")) {
  const purchaseDate = "2024-07-28T01:04:17Z";
  const expiresDate = "2099-12-31T23:59:59Z";
  
  // Subscription info - Đầy đủ theo RevenueCat API
  const subscriptionInfo = {
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
  const entitlementInfo = {
    grace_period_expires_date: null,
    purchase_date: purchaseDate,
    product_identifier: "locket.premium.yearly",
    expires_date: expiresDate
  };

  // Apply unlock - Thêm cả 2 key để đảm bảo 100%
  obj.subscriber.subscriptions["locket.premium.yearly"] = subscriptionInfo;
  obj.subscriber.entitlements["premium"] = entitlementInfo;
  obj.subscriber.entitlements["Gold"] = entitlementInfo;
  
  console.log("✅ Locket Gold Unlocked Successfully!");
}

$done({ body: JSON.stringify(obj) });
