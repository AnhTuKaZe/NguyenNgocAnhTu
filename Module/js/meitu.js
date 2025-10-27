/******************************
Meitu Xiuxiu - Unlock VIP Premium
Original Author: R·E
Source: duyvinh09/Module_IOS
Last Updated: 2025-05-22
App Version: 9.3.80+
Clean version (no obfuscated code, no popup)
*******************************/

var body = $response.body;
var obj = JSON.parse(body);

// Clean replacement for obfuscated code
body = body.replace(/"old_vip_type":\d+/g, '"old_vip_type":4')
           .replace(/"is_expire":\d+/g, '"is_expire":0')
           .replace(/"sub_type":\d+/g, '"sub_type":2')
           .replace(/"expire_days":.*?/g, '"expire_days":999999')
           .replace(/"screen_name":".*?"/g, '"screen_name":"Meitu VIP"')
           .replace(/"invalid_time":\d+/g, '"invalid_time":32495529599');

// Parse again after replacements
obj = JSON.parse(body);

// Set VIP data
obj.data.vip_type = 4;
obj.data.in_vip = 1;
obj.data.expire_time = 32495529599;
obj.data.valid_time = 1638019661;
obj.data.is_expire = 0;
obj.data.screen_name = "Meitu VIP Premium";
obj.data.old_vip_type = 4;
obj.data.sub_type = 2;
obj.data.expire_days = 999999;
obj.data.exchange_vip = 0;

$done({
    body: JSON.stringify(obj)
});
