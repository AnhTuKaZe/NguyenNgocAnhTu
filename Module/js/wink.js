// Wink Forever VIP
var obj = JSON.parse($response.body);

if (!obj.data) {
  obj.data = {};
}

obj.data.vip_type = "permanent";
obj.data.is_vip = true;
obj.data.vip_level = 3;
obj.data.vip_end_time = "2099-12-31T23:59:59Z";
obj.data.vip_start_time = "2025-01-01T00:00:00Z";
obj.data.in_subscription = true;
obj.data.watermark_enabled = false;

$done({ body: JSON.stringify(obj) });
