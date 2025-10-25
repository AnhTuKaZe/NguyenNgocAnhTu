// RevenueCat ETag Header Remover - Optimized

const headers = $request.headers;
headers["X-RevenueCat-ETag"] = "";
headers["x-revenuecat-etag"] = "";

$done({ headers });
