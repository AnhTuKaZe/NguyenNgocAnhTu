// ========================================= //
// 🔐 RevenueCat Universal Premium Unlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Supports: Locket, Duolingo, Calm, and more
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '🔐 RevenueCat Universal';

// ========= Configuration ========= //
const GLOBAL_CONFIG = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiryDate: "2099-12-31T23:59:59Z",
  debug: false
};

// ========= App-Specific Configurations ========= //
const APP_CONFIGS = {
  // Locket Gold
  'Locket': {
    productId: 'locket.premium.yearly',
    entitlementId: 'Gold',
    keywords: ['locket', 'widget'],
    enabled: true
  },
  
  // Duolingo Plus
  'Duolingo': {
    productId: 'duolingo.premium.yearly',
    entitlementId: 'Premium',
    keywords: ['duolingo', 'duo'],
    enabled: true,
    extraEntitlements: ['Unlimited Hearts', 'No Ads']
  },
  
  // Calm Premium
  'Calm': {
    productId: 'com.calm.premium.yearly',
    entitlementId: 'Premium',
    keywords: ['calm', 'meditation'],
    enabled: true,
    extraEntitlements: ['Calm Premium']
  }
};

// ========= Helper Functions ========= //
function log(message, level = 'INFO') {
  if (GLOBAL_CONFIG.debug || level === 'ERROR') {
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

function initRevenueCatStructure(obj) {
  if (!obj) obj = {};
  if (!obj.subscriber) obj.subscriber = {};
  if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
  if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
  if (!obj.subscriber.non_subscriptions) obj.subscriber.non_subscriptions = {};
  return obj;
}

function detectApp(userAgent, url) {
  const ua = userAgent.toLowerCase();
  const urlLower = url.toLowerCase();
  
  // Detect by User-Agent
  for (const [appName, config] of Object.entries(APP_CONFIGS)) {
    if (!config.enabled) continue;
    
    for (const keyword of config.keywords) {
      if (ua.includes(keyword.toLowerCase()) || urlLower.includes(keyword.toLowerCase())) {
        log(`Detected app: ${appName} (keyword: ${keyword})`);
        return appName;
  }
    }
  }
  
  log('Could not detect specific app, using default', 'WARN');
  return null;
}

function createPremiumSubscription(config) {
  return {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: GLOBAL_CONFIG.expiryDate,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: GLOBAL_CONFIG.purchaseDate,
    purchase_date: GLOBAL_CONFIG.purchaseDate,
    store: "app_store",
    store_transaction_id: "570001234567890"
  };
}

function createPremiumEntitlement(config) {
  return {
    grace_period_expires_date: null,
    purchase_date: GLOBAL_CONFIG.purchaseDate,
    product_identifier: config.productId,
    expires_date: GLOBAL_CONFIG.expiryDate
  };
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var url = $request.url || '';
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "Unknown";
log(`URL: ${url.substring(0, 80)}...`);
log(`User-Agent: ${ua}`);

var obj = safeParseJSON($response.body);
obj = initRevenueCatStructure(obj);

// Detect which app is making the request
const detectedApp = detectApp(ua, url);

if (detectedApp && APP_CONFIGS[detectedApp]) {
  const appConfig = APP_CONFIGS[detectedApp];
  
  // Create premium subscription
  const subscription = createPremiumSubscription(appConfig);
  const entitlement = createPremiumEntitlement(appConfig);
  
  // Apply premium
  obj.subscriber.subscriptions[appConfig.productId] = subscription;
  obj.subscriber.entitlements[appConfig.entitlementId] = entitlement;
  
  // Apply extra entitlements if any
  if (appConfig.extraEntitlements) {
    appConfig.extraEntitlements.forEach(extraId => {
      obj.subscriber.entitlements[extraId] = entitlement;
    });
  }
  
  log(`✅ Applied ${detectedApp} premium features`);
  log(`Product: ${appConfig.productId}`);
  log(`Entitlement: ${appConfig.entitlementId}`);
} else {
  // Fallback: apply generic premium (for unknown apps)
  log('Applying generic premium (fallback)', 'WARN');
  
  const genericConfig = {
    productId: 'premium.yearly'
  };
  
  const subscription = createPremiumSubscription(genericConfig);
  const entitlement = createPremiumEntitlement(genericConfig);
  
  obj.subscriber.subscriptions['premium'] = subscription;
  obj.subscriber.entitlements['Premium'] = entitlement;
}

// Add subscriber info
if (obj.subscriber) {
  obj.subscriber.original_app_user_id = obj.subscriber.original_app_user_id || "$RCAnonymousID:premium_user";
  obj.subscriber.original_application_version = obj.subscriber.original_application_version || "1.0";
}

log('🎉 Successfully unlocked premium features');
$done({ body: JSON.stringify(obj) });
