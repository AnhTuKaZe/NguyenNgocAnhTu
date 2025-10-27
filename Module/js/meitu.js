// ========================================
// 🎨 Meitu Xiuxiu Premium SVIP Unlocker
// ✨ iPhone & iPad Performance Optimized
// 📱 Device-Aware Image Processing
// 🚀 Memory Efficient for High-Res Photos
// 💎 All Premium Features Unlocked
// ========================================
const version = 'V2.0.0';

// ========= Configuration ========= //
const CONFIG = {
  debugMode: false,
  maxPayloadSize: 1048576,  // 1MB safety limit
  svipExpireDate: "2099-12-31 23:59:59",
  svipStartDate: "2025-01-01 00:00:00",
  vipLevel: 5  // Highest SVIP level
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
    // iPad & modern iPhones can handle higher resolution
    maxResolution: (isIPad || iosVersion >= 16) ? "8K" : "4K",
    hasHighMemory: isIPad || iosVersion >= 16
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
      console.log(`⚠️ Large Meitu payload: ${bodySize} bytes`);
    }
    
    return JSON.parse(body);
    
  } catch (error) {
    console.log("❌ Meitu JSON Parse Error:", error.message);
    return { data: {} };
  }
}

// ========= Apply SVIP Features ========= //
function applySVIPFeatures(obj, device) {
  try {
    // Ensure data structure exists
    if (!obj.data) {
      obj.data = {};
    }
    
    // SVIP Status
    obj.data.vip_type = "svip";
    obj.data.is_vip = 1;
    obj.data.vip_level = CONFIG.vipLevel;
    obj.data.svip_level = CONFIG.vipLevel;
    
    // SVIP Dates (Lifetime)
    obj.data.vip_end_time = CONFIG.svipExpireDate;
    obj.data.vip_start_time = CONFIG.svipStartDate;
    obj.data.expire_time = CONFIG.svipExpireDate;
    obj.data.svip_expire_time = CONFIG.svipExpireDate;
    
    // Subscription Status
    obj.data.in_subscription = 1;
    obj.data.auto_renew = 1;
    obj.data.subscription_type = "yearly";
    obj.data.product_type = "svip_yearly";
    
    // Premium Features (All Unlocked)
    obj.data.beauty_premium = 1;
    obj.data.portrait_premium = 1;
    obj.data.filter_premium = 1;
    obj.data.sticker_premium = 1;
    obj.data.text_premium = 1;
    obj.data.border_premium = 1;
    obj.data.background_premium = 1;
    obj.data.mosaic_premium = 1;
    
    // Advanced Features
    obj.data.ai_premium = 1;
    obj.data.matting_premium = 1;  // AI cutout
    obj.data.retouch_premium = 1;
    obj.data.makeup_premium = 1;
    obj.data.body_premium = 1;
    obj.data.skin_premium = 1;
    
    // Template & Material
    obj.data.template_vip = 1;
    obj.data.material_vip = 1;
    obj.data.font_vip = 1;
    
    // Export Quality (Device-dependent)
    if (device.hasHighMemory) {
      obj.data.export_quality = "ultra";
      obj.data.max_resolution = device.maxResolution;
      obj.data.lossless_export = 1;
    } else {
      obj.data.export_quality = "high";
      obj.data.max_resolution = "4K";
      obj.data.lossless_export = 1;
    }
    
    // Watermark Removal
    obj.data.watermark = 0;
    obj.data.show_watermark = 0;
    obj.data.remove_watermark = 1;
    
    // Cloud Storage (if available)
    obj.data.cloud_storage = 1;
    obj.data.cloud_space = 10737418240;  // 10GB
    
    // Batch Processing
    obj.data.batch_processing = 1;
    obj.data.max_batch_count = device.hasHighMemory ? 100 : 50;
    
    if (CONFIG.debugMode) {
      console.log(`✅ Meitu SVIP applied for ${device.type}`);
      console.log(`📱 Max Resolution: ${device.maxResolution}`);
    }
    
    return obj;
    
  } catch (error) {
    console.log("❌ Error applying Meitu SVIP:", error.message);
    return obj;
  }
}

// ========= Main Processing Function ========= //
function processResponse() {
  try {
    // Device detection
    const device = getDeviceProfile();
    
    if (CONFIG.debugMode) {
      console.log(`📱 Device: ${device.type} | iOS: ${device.iosVersion}`);
      console.log(`💾 High Memory: ${device.hasHighMemory}`);
    }
    
    // Parse response
    const responseBody = $response.body;
    let obj = parseResponseBody(responseBody);
    
    // Apply SVIP features
    obj = applySVIPFeatures(obj, device);
    
    // Stringify once
    const modifiedBody = JSON.stringify(obj);
    
    if (CONFIG.debugMode) {
      console.log("✅ Meitu SVIP unlocked");
      console.log(`📦 Response size: ${modifiedBody.length} bytes`);
    }
    
    // Return modified response
    $done({ body: modifiedBody });
    
  } catch (error) {
    console.log("❌ Critical error in Meitu script:", error.message);
    console.log("Stack:", error.stack);
    
    // Fallback
    $done({ body: $response.body });
  }
}

// ========= Memory-Efficient Execution ========= //
(() => {
  processResponse();
})();
