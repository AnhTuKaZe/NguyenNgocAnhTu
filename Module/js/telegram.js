/*************************************

Script: Telegram Premium Unlocked
Author: AnhTuKaZe
Version: 1.0
Updated: 2025-10-28

Features:
- 4GB File Upload
- Faster Downloads
- Unlimited Channels
- Premium Stickers
- Animated Avatars
- No Ads

*************************************/

const version = 'V1.0 - Telegram Premium';

let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ Error parsing response:", e.message);
  $done({});
}

// ========= Unlock Premium Features ========= //

if (obj.premium) {
  obj.premium = true;
}

if (obj.premium_bot_username) {
  obj.premium_bot_username = "@premium";
}

// Upload limits
if (obj.upload_max_fileparts) {
  obj.upload_max_fileparts = 8000; // 4GB
}

// Premium features
if (obj.premium_purchase_blocked) {
  obj.premium_purchase_blocked = false;
}

if (obj.premium_gifts_option_available) {
  obj.premium_gifts_option_available = true;
}

// User config
if (obj.users && Array.isArray(obj.users)) {
  obj.users.forEach(user => {
    if (user.self) {
      user.premium = true;
    }
  });
}

// Disable ads
if (obj.sponsored_messages) {
  obj.sponsored_messages = [];
}

if (obj.stories_stealth_mode) {
  obj.stories_stealth_mode = true;
}

console.log("✅ Telegram Premium activated - 4GB uploads, no ads");

$done({ body: JSON.stringify(obj) });
