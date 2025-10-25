////////////////////////////////
//  Locket Gold Unlock Script //
//   Ultra Optimized V2.1.0   //
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

const obj = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

if (ua && ua.includes("Locket")) {
  const info = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "2099-12-31T23:59:59Z",
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2024-07-28T01:04:17Z",
    purchase_date: "2024-07-28T01:04:17Z",
    store: "app_store",
    product_identifier: "locket.premium.yearly"
  };
  
  obj.subscriber.subscriptions["locket.premium.yearly"] = info;
  obj.subscriber.entitlements.premium = obj.subscriber.entitlements.Gold = info;
}

$done({ body: JSON.stringify(obj) });
