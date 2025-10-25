////////////////////////////////
//   RevenueCat ETag Remover  //
//  Production Stable V2.0.0  //
////////////////////////////////
// 🇬🇧 Update By: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Messenger Channel (Latest Updates): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////
// 🇻🇳 Cập nhật bởi: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Kênh Messenger (Cập nhật mới nhất): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////

// Version control
var VERSION = "2.0.0";

// Safety check: Đảm bảo request và headers tồn tại
if (!$request) {
  console.log("❌ [deleteHeader v" + VERSION + "] No request object");
  $done({});
}

if (!$request.headers) {
  console.log("❌ [deleteHeader v" + VERSION + "] No headers in request");
  $done({});
}

/**
 * Function: setHeaderValue
 * Mục đích: Set giá trị header, hỗ trợ cả uppercase và lowercase
 * @param {Object} headers - Headers object
 * @param {String} key - Header key cần set
 * @param {String} value - Giá trị cần set
 * @return {Object} - Headers đã được modified
 */
function setHeaderValue(headers, key, value) {
  var lowerKey = key.toLowerCase();
  
  // Set cả 2 dạng để đảm bảo bắt được mọi case
  headers[key] = value;
  headers[lowerKey] = value;
  
  // Các variant khác có thể có
  var upperKey = key.toUpperCase();
  headers[upperKey] = value;
  
  return headers;
}

// Clone headers để tránh modify trực tiếp reference
var modifiedHeaders = $request.headers;

// Remove RevenueCat ETag header (set = "" để bypass cache)
try {
  setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
  console.log("✅ [deleteHeader v" + VERSION + "] ETag header removed successfully");
} catch (e) {
  console.log("❌ [deleteHeader v" + VERSION + "] Error:", e.message);
}

// Return modified headers
$done({ headers: modifiedHeaders });
