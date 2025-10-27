// Meitu Xiuxiu SVIP
var obj = JSON.parse($response.body);

if (!obj.data) {
  obj.data = {};
}

obj.data.vip_type = "svip";
obj.data.is_vip = 1;
obj.data.vip_level = 5;
obj.data.svip_level = 5;
obj.data.vip_end_time = "2099-12-31 23:59:59";
obj.data.vip_start_time = "2025-01-01 00:00:00";
obj.data.in_subscription = 1;
obj.data.auto_renew = 1;
obj.data.watermark = 0;
obj.data.show_watermark = 0;

$done({ body: JSON.stringify(obj) });
