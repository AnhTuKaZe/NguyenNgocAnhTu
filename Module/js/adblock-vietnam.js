// ========================================= //
// 🇻🇳 Vietnam Apps AdBlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Block ads for ZingNews, VnExpress, Zing MP3, etc.
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '🇻🇳 VN AdBlocker';

// ========= Configuration ========= //
const CONFIG = {
  debug: false,
  apps: {
    zingnews: true,
    vnexpress: true,
    zingmp3: true,
    zing: true
  }
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

// ========= Ad Detection Patterns ========= //
const AD_PATTERNS = [
  'advertisement',
  'quangcao',
  'quang_cao',
  'ad_banner',
  'advertising',
  'sponsorship',
  'tai_tro',
  'taitro'
];

function isAdContent(item) {
  if (!item) return false;
  
  const itemStr = JSON.stringify(item).toLowerCase();
  return AD_PATTERNS.some(pattern => itemStr.includes(pattern));
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var url = $request.url;
var obj = safeParseJSON($response.body);

if (!obj) {
  log('Invalid response body', 'ERROR');
  $done({ body: $response.body });
}

var cleanedCount = 0;

// ZingNews / VnExpress - Remove ads from news feed
if ((url.includes('zingnews') || url.includes('vnexpress')) && obj.data) {
  if (Array.isArray(obj.data)) {
    const originalLength = obj.data.length;
    obj.data = obj.data.filter(item => !isAdContent(item));
    cleanedCount = originalLength - obj.data.length;
  }
}

// Zing MP3 - Remove ads from music
if (url.includes('zingmp3') || url.includes('mp3.zing')) {
  if (obj.data) {
    // Remove banner ads
    if (obj.data.banner) {
      obj.data.banner = [];
      cleanedCount++;
    }
    
    // Remove ads from playlist
    if (Array.isArray(obj.data.items)) {
      const originalLength = obj.data.items.length;
      obj.data.items = obj.data.items.filter(item => !isAdContent(item));
      cleanedCount += originalLength - obj.data.items.length;
    }
  }
  
  // Remove video ads
  if (obj.data && obj.data.streaming) {
    delete obj.data.streaming.ad;
    cleanedCount++;
  }
}

if (cleanedCount > 0) {
  log(`✅ Removed ${cleanedCount} ads from response`);
} else {
  log('ℹ️ No ads detected in this response');
}

log('🎉 Successfully processed response');
$done({ body: JSON.stringify(obj) });
