var specificDate = "2024-01-01T00:00:00Z"; // Định dạng ISO 8601

// ========= ID Mapping ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip', 'locket.premium.yearly'],
  'Locket': ['Gold', 'locket.premium.yearly']
};

// ========= Kiểm tra và Khởi tạo ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

var obj;
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ Error parsing response body:", e.message);
  obj = { subscriber: { entitlements: {}, subscriptions: {} } };
}

// ========= Tạo thông tin gói Locket Gold ========= //
var hasu = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: specificDate,
  purchase_date: specificDate,
  store: "app_store"
};

var hasu_entitlement = {
  grace_period_expires_date: null,
  purchase_date: specificDate,
  product_identifier: "locket.premium.yearly",
  expires_date: "2099-12-31T23:59:59Z"
};

// ========= Áp dụng Mapping ========= //
const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let [entitlementKey, subscriptionKey] = mapping[match];
  obj.subscriber.subscriptions[subscriptionKey] = hasu;
  obj.subscriber.entitlements[entitlementKey] = hasu_entitlement;
} else {
  obj.subscriber.subscriptions["locket.premium.yearly"] = hasu;
  obj.subscriber.entitlements["Locket"] = hasu_entitlement;
}

$done({ body: JSON.stringify(obj) });
