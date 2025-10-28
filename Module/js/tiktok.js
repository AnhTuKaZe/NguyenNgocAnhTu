// ========================================= //
// 🎵 TikTok Premium Unlocker v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Remove watermark, HD download, No ads
// ========================================= //

const VERSION = 'v1.0';
const SCRIPT_NAME = '🎵 TikTok Premium';

// ========= Configuration ========= //
const CONFIG = {
  debug: false, // Bật để xem logs chi tiết
  removeWatermark: true,
  enableHDDownload: true,
  removeAds: true
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

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var obj = safeParseJSON($response.body);

if (!obj) {
  log('Invalid response body', 'ERROR');
  $done({ body: $response.body });
}

// Remove watermark from video URLs
if (CONFIG.removeWatermark && obj.aweme_list) {
  obj.aweme_list.forEach(aweme => {
    if (aweme.video && aweme.video.download_addr) {
      // Replace watermark URL with no-watermark URL
      if (aweme.video.download_addr.url_list) {
        aweme.video.download_addr.url_list = aweme.video.download_addr.url_list.map(url => 
          url.replace('watermark=1', 'watermark=0')
        );
      }
    }
    
    // Enable HD download
    if (CONFIG.enableHDDownload && aweme.video) {
      aweme.video.is_h265 = 1;
      aweme.video.bit_rate = aweme.video.bit_rate || [];
      if (aweme.video.bit_rate.length > 0) {
        aweme.video.bit_rate[0].quality_type = 20; // HD quality
      }
    }
  });
  log('✅ Removed watermarks and enabled HD download');
}

// Remove ads
if (CONFIG.removeAds) {
  if (obj.aweme_list) {
    obj.aweme_list = obj.aweme_list.filter(aweme => !aweme.is_ads);
    log('✅ Removed ads from feed');
  }
}

log('🎉 Successfully processed TikTok response');
$done({ body: JSON.stringify(obj) });
