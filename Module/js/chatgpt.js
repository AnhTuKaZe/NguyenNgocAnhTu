/*************************************

Script: ChatGPT Plus Unlocked
Author: AnhTuKaZe
Version: 1.0
Updated: 2025-10-28

Features:
- GPT-4 Access
- GPT-4 Turbo
- DALL-E 3
- Advanced Data Analysis
- Browse with Bing
- Plugins Access

*************************************/

const version = 'V1.0 - ChatGPT Plus';

let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("❌ Error parsing response:", e.message);
  $done({});
}

// ========= Unlock ChatGPT Plus Features ========= //
if (obj.account_user_role) {
  obj.account_user_role = "account-user-role-chatgptplus";
}

if (obj.account_user_tier) {
  obj.account_user_tier = "plus";
}

// Enable GPT-4
if (obj.entitled_features) {
  obj.entitled_features = [
    "gpt_4",
    "gpt_4_turbo", 
    "gpt_4_browsing",
    "gpt_4_plugins",
    "gpt_4_code_interpreter",
    "dalle_3",
    "advanced_data_analysis"
  ];
}

// Subscription info
if (obj.subscription) {
  obj.subscription.plan = "chatgptplusplan";
  obj.subscription.is_paid = true;
  obj.subscription.will_renew = true;
}

// Account limits
if (obj.account_limits) {
  obj.account_limits = {
    "gpt_4_limit": 999,
    "gpt_4_turbo_limit": 999,
    "dalle_limit": 999,
    "plugins_limit": 999
  };
}

console.log("✅ ChatGPT Plus activated");

$done({ body: JSON.stringify(obj) });
