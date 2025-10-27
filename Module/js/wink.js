// ========================================
// 📸 Wink Forever VIP Unlocker
// ✨ iPhone & iPad Performance Optimized
// 📱 Device-Aware Video Processing
// 🚀 Memory Efficient for Large Video Files
// ========================================
const version = 'V2.0.0';

// ========= Configuration ========= //
const CONFIG = {
  debugMode: false,
  maxPayloadSize: 524288,  // 512KB safety limit
  vipExpireDate: "2099-12-31T23:59:59Z",
  vipStartDate: "2025-01-01T00:00:00Z"
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
    isModern: iosVersion >= 15,
    // iPad has more RAM and better video processing
    hasHighPerformance: isIPad || iosVersion >= 16
  };
}

// ========= Memory-Efficient JSON Parser ========= //
function parseResponseBody(body) {
  if (!body) {
    return { data: {} };
  }
  
  try {
    const bodySize = new TextEncoder().encode(body).length;
    if (bodySize > CONFIG.maxPayloadSize) {
      console.log(`⚠️ Large Wink payload: ${bodySize} bytes`);
    }
    
    return JSON.parse(body);
    
  } catch (error) {
    console.log("❌ Wink JSON Parse Error:", error.message);
    return { data: {} };
  }
}

// ========= Apply VIP Features ========= //
function applyVIPFeatures(obj, device) {
  try {
    // Ensure data structure exists
    if (!obj.data) {
      obj.data = {};
    }
    
    // VIP Status
    obj.data.vip_type = "permanent";
    obj.data.is_vip = true;
    obj.data.vip_level = 3;  // Highest VIP level
    
    // VIP Dates (Lifetime)
    obj.data.vip_end_time = CONFIG.vipExpireDate;
    obj.data.vip_start_time = CONFIG.vipStartDate;
    obj.data.expire_time = CONFIG.vipExpireDate;
    
    // Subscription Info
    obj.data.in_subscription = true;
    obj.data.subscription_type = "yearly";
    obj.data.auto_renew = true;
    
    // Premium Features
    obj.data.beauty_premium = true;
    obj.data.template_premium = true;
    obj.data.filter_premium = true;
    obj.data.sticker_premium = true;
    obj.data.text_premium = true;
    obj.data.music_premium = true;
    
    // Video Features (Optimized for device)
    if (device.hasHighPerformance) {
      obj.data.video_quality = "ultra";
      obj.data.export_quality = "4k";
      obj.data.max_duration = 3600;  // 1 hour for iPad/modern iPhone
    } else {
      obj.data.video_quality = "high";
      obj.data.export_quality = "1080p";
      obj.data.max_duration = 1800;  // 30 minutes for older devices
    }
    
    // Watermark Removal
    obj.data.watermark_enabled = false;
    obj.data.remove_watermark = true;
    
    if (CONFIG.debugMode) {
      console.log(`✅ Wink VIP applied for ${device.type}`);
    }
    
    return obj;
    
  } catch (error) {
    console.log("❌ Error applying Wink VIP:", error.message);
    return obj;
  }
}

// ========= Main Processing Function ========= //
function processResponse() {
  try {
    // Device detection
    const device = getDeviceProfile();
    
    if (CONFIG.debugMode) {
      console.log(`📱 Device: ${device.type} | High Performance: ${device.hasHighPerformance}`);
    }
    
    // Parse response
    const responseBody = $response.body;
    let obj = parseResponseBody(responseBody);
    
    // Apply VIP features
    obj = applyVIPFeatures(obj, device);
    
    // Stringify once
    const modifiedBody = JSON.stringify(obj);
    
    if (CONFIG.debugMode) {
      console.log("✅ Wink VIP unlocked");
      console.log(`📦 Response size: ${modifiedBody.length} bytes`);
    }
    
    // Return modified response
    $done({ body: modifiedBody });
    
  } catch (error) {
    console.log("❌ Critical error in Wink script:", error.message);
    
    // Fallback
    $done({ body: $response.body });
  }
}

// ========= Execution ========= //
(() => {
  processResponse();
})();
