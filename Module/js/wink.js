// Wink Forever VIP - Updated
var obj = JSON.parse($response.body);

if (!obj.data) {
  obj.data = {};
}

// VIP Status
obj.data.vip_type = "forever";
obj.data.is_vip = 1;
obj.data.vip_level = 5;

// VIP Dates
obj.data.vip_end_time = "2099-12-31 23:59:59";
obj.data.vip_start_time = "2020-01-01 00:00:00";
obj.data.expire_time = "2099-12-31 23:59:59";

// Subscription
obj.data.in_subscription = 1;
obj.data.subscription_type = "year";
obj.data.auto_renew = 1;

// Premium Features
obj.data.watermark_enabled = 0;
obj.data.remove_watermark = 1;
obj.data.template_vip = 1;
obj.data.material_vip = 1;
obj.data.filter_vip = 1;

// Additional permissions
if (obj.data.permission) {
  obj.data.permission.vip = 1;
  obj.data.permission.watermark = 0;
} else {
  obj.data.permission = {
    vip: 1,
    watermark: 0
  };
}

$done({ body: JSON.stringify(obj) });
