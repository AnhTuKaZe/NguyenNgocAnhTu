////////////////////////////////////////////////////////////////////////////////////////////////
// 🇬🇧 Update By: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Messenger Channel (Latest Updates): 
//  https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////////////////////////////////////////////////////////////////////
// 🇻🇳 Cập nhật bởi: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Kênh Messenger (Cập nhật mới nhất): 
//  https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////////////////////////////////////////////////////////////////////

const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let obj;

try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("Parse error:", e);
  obj = { subscriber: { entitlements: {}, subscriptions: {} } };
}

// Chỉ xử lý nếu là Locket app
if (ua && ua.includes("Locket")) {
  const purchaseDate = "2024-07-28T01:04:17Z";
  const expiresDate = "2099-12-31T23:59:59Z";
  
  // Subscription info
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

  // Apply unlock
  obj.subscriber.subscriptions["locket.premium.yearly"] = subscriptionInfo;
  obj.subscriber.entitlements["premium"] = entitlementInfo;
  
  // Backup entitlement với tên khác (đảm bảo unlock 100%)
  obj.subscriber.entitlements["Gold"] = entitlementInfo;
}

$done({ body: JSON.stringify(obj) });
