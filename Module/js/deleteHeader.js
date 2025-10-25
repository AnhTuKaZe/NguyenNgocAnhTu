////////////////////////////////////////////////////////////////
// 🇬🇧 Update By: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Messenger Channel (Latest Updates): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////////////////////////////////////
// 🇻🇳 Cập nhật bởi: NguyenNgocAnhTu
// 📘 Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// 💬 Kênh Messenger (Cập nhật mới nhất): 
//    https://www.messenger.com/channel/NguyenNgocAnhTu.VN
////////////////////////////////////////////////////////////////

// Function xử lý header (hỗ trợ uppercase, lowercase, và các variant)
function setHeaderValue(headers, key, value) {
  var lowerKey = key.toLowerCase();
  var upperKey = key.toUpperCase();
  
  headers[key] = value;
  headers[lowerKey] = value;
  headers[upperKey] = value;
  
  return headers;
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

$done({ headers: modifiedHeaders });
