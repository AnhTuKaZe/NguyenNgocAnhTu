/*************************************

Script: RevenueCat Universal Premium
Author: AnhTuKaZe
Version: 3.0
Updated: 2025-10-28

Supported Apps:
- Locket Gold
- Duolingo Plus  
- Calm Premium
- PicsArt Premium
- Lightroom Premium
- CapCut Pro
- Unfold Premium
- Over Premium
- Picsew Premium

*************************************/

const version = 'V3.0 - Universal Premium';
const expiryDate = "2099-12-31T23:59:59Z";
const purchaseDate = "2024-01-01T00:00:00Z";

// ========= App Detection Mapping ========= //
const appMappings = {
  // Locket Gold
  'Locket': {
    subscriptions: ['locket.premium.yearly', 'locket.premium.monthly'],
    entitlements: ['Gold', 'locket_gold'],
    productId: 'locket.premium.yearly'
  },
  
  // Duolingo Plus
  'Duolingo': {
    subscriptions: ['duolingo.premium.yearly', 'duo.premium'],
    entitlements: ['plus', 'premium'],
    productId: 'duolingo.premium.yearly'
  },
  
  // Calm Premium
  'Calm': {
    subscriptions: ['calm.premium.yearly', 'calm.lifetime'],
    entitlements: ['premium', 'all_access'],
    productId: 'calm.premium.yearly'
  },
  
  // PicsArt Premium
  'PicsArt': {
    subscriptions: ['picsart.premium.yearly', 'premium_yearly'],
    entitlements: ['premium', 'pro'],
    productId: 'picsart.premium.yearly'
  },
  
  // Lightroom Premium
  'Lightroom': {
    subscriptions: ['lightroom.premium.yearly', 'adobe.lr.premium'],
    entitlements: ['premium', 'all_premium_features'],
    productId: 'lightroom.premium.yearly'
  },
  
  // CapCut Pro
  'CapCut': {
    subscriptions: ['capcut.premium.yearly', 'pro_yearly'],
    entitlements: ['premium', 'pro'],
    productId: 'capcut.premium.yearly'
  },
  
  // Unfold Premium
  'Unfold': {
    subscriptions: ['unfold.premium.yearly'],
    entitlements: ['premium', 'unfold_premium'],
    productId: 'unfold.premium.yearly'
  },
  
  // Over Premium  
  'Over': {
    subscriptions: ['over.premium.yearly'],
    entitlements: ['premium', 'over_pro'],
    productId: 'over.premium.yearly'
  },
  
  // Picsew Premium
  'Picsew': {
    subscriptions: ['picsew.premium.yearly'],
    entitlements: ['premium', 'pro'],
    productId: 'picsew.premium.yearly'
  }
};

// ========= Parse Response ========= //
let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ Error parsing response:", e.message);
  obj = { subscriber: { entitlements: {}, subscriptions: {} } };
}

// Ensure structure exists
if (!obj.subscriber) obj.subscriber = {};
if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};

// ========= Detect App ========= //
const userAgent = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
let detectedApp = null;

for (const [appName, config] of Object.entries(appMappings)) {
  if (userAgent.includes(appName)) {
    detectedApp = { name: appName, config: config };
    console.log(`✅ Detected App: ${appName}`);
    break;
  }
}

// ========= Premium Subscription Template ========= //
const createSubscription = (productId) => ({
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: expiryDate,
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: purchaseDate,
  purchase_date: purchaseDate,
  store: "app_store",
  store_transaction_id: "999999999999999"
});

const createEntitlement = (productId) => ({
  grace_period_expires_date: null,
  purchase_date: purchaseDate,
  product_identifier: productId,
  expires_date: expiryDate
});

// ========= Apply Premium ========= //
if (detectedApp) {
  const { config } = detectedApp;
  
  // Add subscriptions
  config.subscriptions.forEach(subId => {
    obj.subscriber.subscriptions[subId] = createSubscription(config.productId);
  });
  
  // Add entitlements
  config.entitlements.forEach(entId => {
    obj.subscriber.entitlements[entId] = createEntitlement(config.productId);
  });
  
} else {
  // Default fallback - apply generic premium
  console.log("⚠️ Unknown app, applying generic premium");
  obj.subscriber.subscriptions["premium.yearly"] = createSubscription("premium.yearly");
  obj.subscriber.entitlements["premium"] = createEntitlement("premium.yearly");
}

// ========= Additional Premium Flags ========= //
obj.subscriber.original_app_user_id = "premium_user_" + Date.now();
obj.subscriber.management_url = null;
obj.subscriber.original_application_version = "999";
obj.subscriber.other_purchases = {};
obj.subscriber.non_subscriptions = {};

console.log(`🎉 Premium activated until ${expiryDate}`);

$done({ body: JSON.stringify(obj) });
