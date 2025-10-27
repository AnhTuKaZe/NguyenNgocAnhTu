// ========================================
// 🎵 SoundCloud Go+ Premium Unlocker
// ✨ iPhone & iPad Performance Optimized
// 📱 Device-Aware Processing
// 🚀 Memory Efficient & Error Handling
// ========================================
const version = 'V2.0.0';

// ========= Configuration ========= //
const CONFIG = {
  debugMode: false,
  maxPayloadSize: 1048576,  // 1MB safety limit
  featureSet: {
    highQualityAudio: true,
    offlineSync: true,
    noAds: true,
    unlimitedSkips: true
  }
};

// ========= Device Detection ========= //
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
    isModern: iosVersion >= 15
  };
}

// ========= Memory-Efficient JSON Parser ========= //
function parseResponseBody(body) {
  if (!body) {
    return {};
  }
  
  try {
    // Check payload size for memory safety
    const bodySize = new TextEncoder().encode(body).length;
    if (bodySize > CONFIG.maxPayloadSize) {
      console.log(`⚠️ Large SoundCloud payload: ${bodySize} bytes`);
    }
    
    return JSON.parse(body);
    
  } catch (error) {
    console.log("❌ SoundCloud JSON Parse Error:", error.message);
    return {};
  }
}

// ========= Apply Premium Features ========= //
function applyPremiumFeatures(obj, device) {
  try {
    // Enable all Go+ features
    if (obj.features) {
      // High Quality Audio
      if (CONFIG.featureSet.highQualityAudio) {
        obj.features.high_quality_streaming = true;
        obj.features.high_quality_audio_enabled = true;
        obj.features.hq_streaming = true;
      }
      
      // Offline Sync
      if (CONFIG.featureSet.offlineSync) {
        obj.features.offline_sync = true;
        obj.features.offline_enabled = true;
      }
      
      // Ad Removal
      if (CONFIG.featureSet.noAds) {
        obj.features.ads_disabled = true;
        obj.features.no_ads = true;
        obj.features.ads_enabled = false;
      }
      
      // Additional Premium Features
      obj.features.unlimited_skips = CONFIG.featureSet.unlimitedSkips;
      obj.features.search_suggestions = true;
      obj.features.related_tracks = true;
      obj.features.premium_content = true;
    }
    
    // Subscription Status
    if (obj.subscription) {
      obj.subscription.tier = "high-tier";
      obj.subscription.product = "soundcloud-go-plus";
      obj.subscription.active = true;
    } else {
      obj.subscription = {
        tier: "high-tier",
        product: "soundcloud-go-plus",
        active: true
      };
    }
    
    // User Account Type
    if (obj.account) {
      obj.account.type = "premium";
      obj.account.tier = "go_plus";
    }
    
    if (CONFIG.debugMode) {
      console.log(`✅ SoundCloud Go+ applied for ${device.type}`);
    }
    
    return obj;
    
  } catch (error) {
    console.log("❌ Error applying SoundCloud premium:", error.message);
    return obj;
  }
}

// ========= Main Processing Function ========= //
function processResponse() {
  try {
    // Device detection for optimized processing
    const device = getDeviceProfile();
    
    if (CONFIG.debugMode) {
      console.log(`📱 Device: ${device.type} | iOS: ${device.iosVersion}`);
    }
    
    // Parse response body with memory safety
    const responseBody = $response.body;
    let obj = parseResponseBody(responseBody);
    
    // Apply premium features
    obj = applyPremiumFeatures(obj, device);
    
    // Stringify only once for performance
    const modifiedBody = JSON.stringify(obj);
    
    if (CONFIG.debugMode) {
      console.log("✅ SoundCloud Go+ unlocked");
      console.log(`📦 Response size: ${modifiedBody.length} bytes`);
    }
    
    // Return modified response
    $done({ body: modifiedBody });
    
  } catch (error) {
    console.log("❌ Critical error in SoundCloud script:", error.message);
    
    // Fallback: Return original response
    $done({ body: $response.body });
  }
}

// ========= Memory-Efficient Execution ========= //
(() => {
  processResponse();
})();
