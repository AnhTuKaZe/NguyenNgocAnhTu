////////////////////////////////
//   RevenueCat ETag Remover  //
//       Optimized Ver        //
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

// Kiểm tra request tồn tại
if (!$request || !$request.headers) {
  $done({});
}

const headers = $request.headers;

// Xóa ETag headers (cả uppercase và lowercase)
delete headers["X-RevenueCat-ETag"];
delete headers["x-revenuecat-etag"];

console.log("✅ ETag headers removed");

$done({ headers: headers });
