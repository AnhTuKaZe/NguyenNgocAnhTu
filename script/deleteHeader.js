////////////////////////////////
//   RevenueCat ETag Remover  //
//    Optimized Ver V1.0.4    //
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

// Safety check
if (!$request || !$request.headers) {
  $done({});
}

// Function để set header value (hỗ trợ cả uppercase và lowercase)
function setHeaderValue(headers, key, value) {
  const lowerKey = key.toLowerCase();
  // Xóa cả 2 dạng nếu tồn tại
  delete headers[key];
  delete headers[lowerKey];
  // Set giá trị mới
  headers[key] = value;
}

var modifiedHeaders = $request.headers;

// Xóa X-RevenueCat-ETag header (set = "" để bypass cache)
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

// Log để debug (không log toàn bộ headers vì có thể chứa token)
console.log("✅ RevenueCat ETag header removed successfully");

$done({ headers: modifiedHeaders });
