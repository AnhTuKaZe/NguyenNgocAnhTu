// ========================================= //
// 🦉 Duolingo Plus Unlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Unlimited hearts, No ads, All features
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '🦉 Duolingo Plus';

// ========= Configuration ========= //
const CONFIG = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiryDate: "2099-12-31T23:59:59Z",
  productId: "duolingo.premium.yearly",
  debug: false
};

// ========= Helper Functions ========= //
function log(message, level = 'INFO') {
  if (CONFIG.debug || level === 'ERROR') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${SCRIPT_NAME}] [${level}] ${message}`);
  }
}

function safeParseJSON(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    log(`Failed to parse JSON: ${e.message}`, 'ERROR');
    return { subscriber: { entitlements: {}, subscriptions: {} } };
  }
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var obj = safeParseJSON($response.body);

// Khởi tạo structure nếu chưa tồn tại
if (!obj.subscriber) {
  obj.subscriber = {};
}
if (!obj.subscriber.entitlements) {
  obj.subscriber.entitlements = {};
}
if (!obj.subscriber.subscriptions) {
  obj.subscriber.subscriptions = {};
}

// ========= Tạo thông tin gói Premium ========= //
var premiumSubscription = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: CONFIG.expiryDate,
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: CONFIG.purchaseDate,
  purchase_date: CONFIG.purchaseDate,
  store: "app_store"
};

var premiumEntitlement = {
  grace_period_expires_date: null,
  purchase_date: CONFIG.purchaseDate,
  product_identifier: CONFIG.productId,
  expires_date: CONFIG.expiryDate
};

// Áp dụng premium
obj.subscriber.subscriptions["premium"] = premiumSubscription;
obj.subscriber.entitlements["Premium"] = premiumEntitlement;
obj.subscriber.entitlements["Unlimited Hearts"] = premiumEntitlement;
obj.subscriber.entitlements["No Ads"] = premiumEntitlement;

log('✅ Applied Duolingo Plus premium features');
log('🎉 Successfully unlocked all features');

$done({ body: JSON.stringify(obj) });
