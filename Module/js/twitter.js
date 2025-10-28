// ========================================= //
// 🐦 Twitter/X Premium Unlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ No ads, Blue checkmark features
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '🐦 Twitter/X Premium';

// ========= Configuration ========= //
const CONFIG = {
  debug: false,
  removeAds: true,
  enableBlueFeatures: true,
  extendTweetLength: true,
  enableEditTweet: false // Experimental
};

// ========= Helper Functions ========= //
function log(message, level = 'INFO') {
  if (CONFIG.debug || level === 'ERROR') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${SCRIPT_NAME}] [${level}] ${message}`);
  }
}

function safeParseJSON(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    log(`Failed to parse JSON: ${e.message}`, 'ERROR');
    return null;
  }
}

// ========= Ad Detection ========= //
function isPromotedContent(item) {
  if (!item) return false;
  
  // Check for promoted tweet markers
  if (item.promoted_content) return true;
  if (item.promotedMetadata) return true;
  if (item.adMetadata) return true;
  
  // Check in legacy format
  if (item.legacy && item.legacy.promoted_content) return true;
  
  return false;
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var url = $request.url;
var obj = safeParseJSON($response.body);

if (!obj) {
  log('Invalid response body', 'ERROR');
  $done({ body: $response.body });
}

var modifiedCount = 0;

// Remove ads from timeline
if (CONFIG.removeAds) {
  // Timeline v2 format
  if (obj.globalObjects && obj.globalObjects.tweets) {
    const tweets = obj.globalObjects.tweets;
    Object.keys(tweets).forEach(key => {
      if (isPromotedContent(tweets[key])) {
        delete tweets[key];
        modifiedCount++;
      }
    });
  }
  
  // Timeline v1 format
  if (obj.data && obj.data.home && obj.data.home.home_timeline_urt) {
    const instructions = obj.data.home.home_timeline_urt.instructions;
    if (Array.isArray(instructions)) {
      instructions.forEach(instruction => {
        if (instruction.entries) {
          const originalLength = instruction.entries.length;
          instruction.entries = instruction.entries.filter(entry => {
            // Remove promoted tweets
            if (entry.entryId && entry.entryId.includes('promoted')) return false;
            if (entry.content && entry.content.itemContent) {
              return !isPromotedContent(entry.content.itemContent);
            }
            return true;
          });
          modifiedCount += originalLength - instruction.entries.length;
        }
      });
    }
  }
  
  // Who to follow ads
  if (obj.data && obj.data.user_recommendations) {
    obj.data.user_recommendations = [];
  }
}

// Enable Blue features
if (CONFIG.enableBlueFeatures && obj.data && obj.data.user) {
  const user = obj.data.user.result || obj.data.user;
  
  if (user && user.legacy) {
    // Blue checkmark
    user.is_blue_verified = true;
    user.legacy.verified = true;
    user.legacy.verified_type = "Blue";
    
    // Extended features
    if (CONFIG.extendTweetLength) {
      user.legacy.extended_tweet = true;
    }
  }
  
  log('✅ Applied Twitter Blue features');
}

// Extend tweet length limit
if (CONFIG.extendTweetLength && obj.features) {
  obj.features.longform_notetweets_consumption_enabled = true;
  obj.features.longform_notetweets_inline_media_enabled = true;
}

if (modifiedCount > 0) {
  log(`✅ Removed ${modifiedCount} promoted tweets`);
} else {
  log('ℹ️ No ads detected in this response');
}

log('🎉 Successfully processed Twitter response');
$done({ body: JSON.stringify(obj) });
