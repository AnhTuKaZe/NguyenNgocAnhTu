// ========================================= //
// 📸 Instagram Premium Unlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ No ads, Story download, High quality
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '📸 Instagram Premium';

// ========= Configuration ========= //
const CONFIG = {
  debug: false,
  removeAds: true,
  enableStoryDownload: true,
  highQualityMedia: true,
  removeRecommendations: false
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
const AD_KEYWORDS = [
  'ad_id',
  'ads_manager',
  'sponsored',
  'shopping',
  'ad_action'
];

function isAdContent(item) {
  if (!item) return false;
  const itemStr = JSON.stringify(item).toLowerCase();
  return AD_KEYWORDS.some(keyword => itemStr.includes(keyword));
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var url = $request.url;
var obj = safeParseJSON($response.body);

if (!obj) {
  log('Invalid response body', 'ERROR');
  $done({ body: $response.body });
  return;
}

var modifiedCount = 0;

// Remove ads from feed
if (CONFIG.removeAds) {
  if (obj.feed_items && Array.isArray(obj.feed_items)) {
    const originalLength = obj.feed_items.length;
    obj.feed_items = obj.feed_items.filter(item => {
      // Remove sponsored posts
      if (item.ad_id || item.inventory_source === 'ad') return false;
      
      // Remove shopping posts
      if (item.media_or_ad && item.media_or_ad.shopping_info) return false;
      
      return !isAdContent(item);
    });
    modifiedCount += originalLength - obj.feed_items.length;
  }
  
  // Remove story ads
  if (obj.tray && Array.isArray(obj.tray)) {
    obj.tray = obj.tray.filter(item => !item.ad_id && !isAdContent(item));
  }
  
  // Remove explore ads
  if (obj.items && Array.isArray(obj.items)) {
    const originalLength = obj.items.length;
    obj.items = obj.items.filter(item => !isAdContent(item));
    modifiedCount += originalLength - obj.items.length;
  }
}

// Enable story download
if (CONFIG.enableStoryDownload) {
  if (obj.items && Array.isArray(obj.items)) {
    obj.items.forEach(item => {
      if (item.media_type === 2 || item.media_type === 1) {
        // Enable story saving
        item.can_viewer_save = true;
        item.can_reshare = true;
        item.is_pride_media = false;
      }
    });
  }
}

// High quality media
if (CONFIG.highQualityMedia) {
  if (obj.items && Array.isArray(obj.items)) {
    obj.items.forEach(item => {
      // Set highest quality for images
      if (item.image_versions2) {
        item.image_versions2.additional_candidates = 
          item.image_versions2.candidates || [];
      }
      
      // Set highest quality for videos
      if (item.video_versions) {
        item.video_versions.forEach(version => {
          version.type = 101; // Highest quality
        });
      }
    });
  }
}

// Remove recommendations
if (CONFIG.removeRecommendations && obj.suggested_users) {
  obj.suggested_users.suggestions = [];
}

if (modifiedCount > 0) {
  log(`✅ Removed ${modifiedCount} ads/unwanted content`);
} else {
  log('ℹ️ No ads detected in this response');
}

log('🎉 Successfully processed Instagram response');
$done({ body: JSON.stringify(obj) });
