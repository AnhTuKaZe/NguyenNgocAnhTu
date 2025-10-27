// Wink Forever VIP - Latest Update
var body = $response.body;
var obj = JSON.parse(body);

// Ensure data object exists
if (!obj.data) {
  obj.data = {};
}

// VIP Status - Maximum Level
obj.data.vip_type = "forever";
obj.data.is_vip = 1;
obj.data.vip_status = 1;
obj.data.vip_level = 5;
obj.data.svip_level = 5;

// VIP Time Period - Lifetime
obj.data.vip_end_time = "2099-12-31 23:59:59";
obj.data.vip_start_time = "2020-01-01 00:00:00";
obj.data.expire_time = "2099-12-31 23:59:59";
obj.data.svip_expire_time = "2099-12-31 23:59:59";

// Subscription Info
obj.data.in_subscription = 1;
obj.data.subscription_type = "year";
obj.data.subscription_status = 1;
obj.data.auto_renew = 1;
obj.data.auto_renew_status = 1;

// Premium Features - Templates & Materials
obj.data.template_vip = 1;
obj.data.template_svip = 1;
obj.data.material_vip = 1;
obj.data.material_svip = 1;
obj.data.filter_vip = 1;
obj.data.sticker_vip = 1;
obj.data.music_vip = 1;
obj.data.effect_vip = 1;

// Watermark Removal
obj.data.watermark_enabled = 0;
obj.data.watermark = 0;
obj.data.show_watermark = 0;
obj.data.remove_watermark = 1;
obj.data.ad_watermark = 0;

// Export Quality
obj.data.export_quality = "ultra";
obj.data.hd_export = 1;
obj.data.lossless_export = 1;

// Permissions Object
if (!obj.data.permission) {
  obj.data.permission = {};
}
obj.data.permission.vip = 1;
obj.data.permission.svip = 1;
obj.data.permission.watermark = 0;
obj.data.permission.export_hd = 1;
obj.data.permission.all_templates = 1;
obj.data.permission.all_materials = 1;

// Product Type
obj.data.product_type = "svip_year";
obj.data.product_id = "com.wink.vip.year";

$done({ body: JSON.stringify(obj) });
