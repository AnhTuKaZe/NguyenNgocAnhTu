// Locket Gold Unlock - Optimized
// Original by Ohoang7

const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let obj;

try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = { subscriber: { entitlements: {}, subscriptions: {} } };
}

if (ua && ua.includes("Locket")) {
  const info = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "2099-12-31T23:59:59Z",
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2024-07-28T01:04:18Z",
    purchase_date: "2024-07-28T01:04:17Z",
    store: "app_store"
  };

  obj.subscriber.subscriptions["locket.premium.yearly"] = info;
  obj.subscriber.entitlements["premium"] = {
    grace_period_expires_date: null,
    purchase_date: "2024-07-28T01:04:17Z",
    product_identifier: "locket.premium.yearly",
    expires_date: "2099-12-31T23:59:59Z"
  };
}

$done({ body: JSON.stringify(obj) });
