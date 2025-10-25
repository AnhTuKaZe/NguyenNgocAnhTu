////////////////////////////////
//   RevenueCat ETag Remover  //
//  Production Ready V1.0.6   //
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

// Function xử lý header (hỗ trợ cả uppercase và lowercase)
function setHeaderValue(headers, key, value) {
  var lowerKey = key.toLowerCase();
  // Set cả 2 dạng để đảm bảo
  headers[key] = value;
  headers[lowerKey] = value;
  return headers;
}

// Lấy headers và xóa ETag
var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

// Done
$done({ headers: modifiedHeaders });
