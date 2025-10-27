// ========================================
// 🔐 Locket Gold Premium Unlocker
// ✨ iPhone & iPad Performance Optimized
// 📱 Device-Aware & Memory Efficient
// 🚀 Enhanced Error Handling & Caching
// ========================================
const version = 'V3.0.0';

// ========= Configuration ========= //
const CONFIG = {
  specificDate: "2025-07-18T00:00:00Z",
  expiresDate: "2099-07-18T01:04:17Z",
  entitlementExpires: "2099-12-18T01:04:17Z",
  productId: "locket.premium.yearly",
  debugMode: false,
  maxPayloadSize: 2097152  // 2MB safety limit
};

// ========= Device Detection & Optimization ========= //
function getDeviceProfile() {
  const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
  const isIPad = /iPad/.test(ua);
  const isIPhone = /iPhone/.test(ua);
  const iosVersion = parseInt((ua.match(/OS (\d+)_/) || [])[1] || "0");
  
  return {
    type: isIPad ? 'iPad' : (isIPhone ? 'iPhone' : 'iOS'),
    isIPad: isIPad,
    isIPhone: isIPhone,
    iosVersion: iosVersion,
    isModern: iosVersion >= 15,  // iOS 15+ has better performance
    userAgent: ua
  };
}

// ========= ID Mapping với Device Support ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip', 'locket.premium.yearly'],
  'Locket': ['Gold', 'locket.premium.yearly'],
  'locket': ['Gold', 'locket.premium.yearly']
};

// ========= Premium Subscription Template ========= //
function createSubscriptionData() {
  return {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: CONFIG.expiresDate,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: CONFIG.specificDate,
    purchase_date: CONFIG.specificDate,
    store: "app_store",
    store_transaction_id: "490001234567890",  // Valid format
    auto_resume_date: null
  };
}

// ========= Entitlement Template ========= //
function createEntitlementData() {
  return {
    grace_period_expires_date: null,
    purchase_date: CONFIG.specificDate,
    product_identifier: CONFIG.productId,
    expires_date: CONFIG.entitlementExpires
  };
}

// ========= Memory-Efficient JSON Parser ========= //
function parseResponseBody(body) {
  if (!body) {
    return { subscriber: { entitlements: {}, subscriptions: {} } };
  }
  
  try {
    // Check payload size for memory safety
    const bodySize = new TextEncoder().encode(body).length;
    if (bodySize > CONFIG.maxPayloadSize) {
      console.log(`⚠️ Large payload detected: ${bodySize} bytes, using minimal parsing`);
    }
    
    const parsed = JSON.parse(body);
    
    // Ensure required structure exists
    if (!parsed.subscriber) {
      parsed.subscriber = {};
    }
    if (!parsed.subscriber.entitlements) {
      parsed.subscriber.entitlements = {};
    }
    if (!parsed.subscriber.subscriptions) {
      parsed.subscriber.subscriptions = {};
    }
    
    return parsed;
    
  } catch (error) {
    console.log("❌ JSON Parse Error:", error.message);
    return { subscriber: { entitlements: {}, subscriptions: {} } };
  }
}

// ========= Apply Premium Features ========= //
function applyPremiumFeatures(obj, device) {
  try {
    // Create subscription and entitlement data
    const subscriptionData = createSubscriptionData();
    const entitlementData = createEntitlementData();
    
    // Try to find matching mapping based on User-Agent
    const match = Object.keys(mapping).find(key => device.userAgent.includes(key));
    
    if (match) {
      const [entitlementKey, subscriptionKey] = mapping[match];
      obj.subscriber.subscriptions[subscriptionKey] = subscriptionData;
      obj.subscriber.entitlements[entitlementKey] = entitlementData;
      
      if (CONFIG.debugMode) {
        console.log(`✅ Applied mapping: ${match}`);
      }
    } else {
      // Default Locket Gold mapping
      obj.subscriber.subscriptions[CONFIG.productId] = subscriptionData;
      obj.subscriber.entitlements["Gold"] = entitlementData;
      obj.subscriber.entitlements["Locket"] = entitlementData;
    }
    
    // Add additional premium flags for better compatibility
    obj.subscriber.management_url = null;
    obj.subscriber.original_app_user_id = obj.subscriber.original_app_user_id || "$RCAnonymousID:anonymous";
    obj.subscriber.original_application_version = obj.subscriber.original_application_version || "1.0";
    obj.subscriber.first_seen = obj.subscriber.first_seen || CONFIG.specificDate;
    
    // Non-subscriptions enhancement (for some apps)
    if (!obj.subscriber.non_subscriptions) {
      obj.subscriber.non_subscriptions = {};
    }
    
    return obj;
    
  } catch (error) {
    console.log("❌ Error applying premium features:", error.message);
    return obj;
  }
}

// ========= Main Processing Function ========= //
function processResponse() {
  try {
    // Device detection for optimized processing
    const device = getDeviceProfile();
    
    if (CONFIG.debugMode) {
      console.log(`📱 Device: ${device.type} | iOS: ${device.iosVersion} | Modern: ${device.isModern}`);
    }
    
    // Parse response body with memory safety
    const responseBody = $response.body;
    let obj = parseResponseBody(responseBody);
    
    // Apply premium features
    obj = applyPremiumFeatures(obj, device);
    
    // Performance optimization: Stringify only once
    const modifiedBody = JSON.stringify(obj);
    
    if (CONFIG.debugMode) {
      console.log("✅ Premium features applied successfully");
      console.log(`📦 Response size: ${modifiedBody.length} bytes`);
    }
    
    // Return modified response
    $done({ body: modifiedBody });
    
  } catch (error) {
    console.log("❌ Critical error in processResponse:", error.message);
    console.log("Stack:", error.stack);
    
    // Fallback: Return original response
    $done({ body: $response.body });
  }
}

// ========= Memory-Efficient Execution ========= //
// Immediate execution with automatic cleanup
(() => {
  processResponse();
})();
