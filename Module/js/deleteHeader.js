// ========================================= //
// 🔧 RevenueCat Header Cleaner v2.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Removes ETag headers to bypass cache
// ========================================= //

const VERSION = 'v2.0';
const SCRIPT_NAME = '🔧 Header Cleaner';
const DEBUG = false; // Bật để xem logs

// ========= Helper Functions ========= //
function log(message, level = 'INFO') {
  if (DEBUG || level === 'ERROR') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${SCRIPT_NAME}] [${level}] ${message}`);
  }
}

function setHeaderValue(headers, key, value) {
  const lowerKey = key.toLowerCase();
  if (lowerKey in headers) {
    headers[lowerKey] = value;
  } else {
    headers[key] = value;
  }
}

function deleteHeader(headers, key) {
  const lowerKey = key.toLowerCase();
  delete headers[lowerKey];
  delete headers[key];
}

// ========= Main Logic ========= //
log(`Starting ${SCRIPT_NAME} ${VERSION}`);

var modifiedHeaders = $request.headers || {};

// Danh sách headers cần xóa/sửa đổi
const headersToRemove = [
  "X-RevenueCat-ETag",
  "x-revenuecat-etag",
  "If-None-Match"
];

// Xóa các headers
headersToRemove.forEach(header => {
  deleteHeader(modifiedHeaders, header);
  log(`Removed header: ${header}`);
});

// Thêm custom headers để bypass cache
setHeaderValue(modifiedHeaders, "Cache-Control", "no-cache");
log(`Added Cache-Control: no-cache`);

log(`✅ Headers cleaned successfully`);
$done({ headers: modifiedHeaders });
