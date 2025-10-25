// ============================================
// RevenueCat ETag Header Remover - Optimized
// Update By NguyenNgocAnhTu
// Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// Messenger Channel (Latest Updates): https://www.messenger.com/channel/NguyenNgocAnhTu.VN
// ============================================
// RevenueCat ETag Header Remover - Tối ưu hóa
// Cập nhật bởi NguyenNgocAnhTu
// Facebook: https://www.facebook.com/NguyenNgocAnhTu.VN
// Kênh Messenger (Cập nhật mới nhất): https://www.messenger.com/channel/NguyenNgocAnhTu.VN
// ============================================

const headers = $request.headers;
headers["X-RevenueCat-ETag"] = "";
headers["x-revenuecat-etag"] = "";

$done({ headers });
