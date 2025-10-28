/*************************************

Script: CapCut Pro Unlocked
Author: AnhTuKaZe
Version: 1.0
Updated: 2025-10-28

Features:
- No Watermark Export
- All Pro Templates
- All Effects & Filters
- 4K Export
- Unlimited Cloud Storage

*************************************/

const version = 'V1.0 - CapCut Pro';

let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ Error parsing response:", e.message);
  $done({});
}

// ========= Unlock Pro Features ========= //

// User info
if (obj.data) {
  if (obj.data.user_info) {
    obj.data.user_info.is_vip = true;
    obj.data.user_info.vip_type = 2; // Pro subscription
    obj.data.user_info.vip_expire_time = 4070908800; // 2099
  }
  
  // Remove watermark
  if (obj.data.watermark) {
    obj.data.watermark.enable = false;
    obj.data.watermark.show = false;
  }
  
  // Unlock all resources
  if (obj.data.resource_list) {
    obj.data.resource_list.forEach(resource => {
      resource.is_vip = false;
      resource.is_locked = false;
      resource.price = 0;
    });
  }
  
  // Unlock templates
  if (obj.data.template_list) {
    obj.data.template_list.forEach(template => {
      template.is_vip = false;
      template.is_locked = false;
      template.price = 0;
    });
  }
  
  // Enable 4K export
  if (obj.data.export_quality) {
    obj.data.export_quality.max_resolution = "4K";
    obj.data.export_quality.is_vip = true;
  }
}

// Subscription status
if (obj.subscription) {
  obj.subscription.is_active = true;
  obj.subscription.product_id = "capcut.premium.yearly";
  obj.subscription.expires_date = "2099-12-31T23:59:59Z";
}

console.log("✅ CapCut Pro activated - No watermark, 4K export enabled");

$done({ body: JSON.stringify(obj) });
