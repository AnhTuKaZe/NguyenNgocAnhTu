/**
 * RoPhim Request Optimization Script
 * Tối ưu hóa request headers và parameters cho RoPhim
 * Author: AnhTuKaZe
 * Version: 1.0.0
 */

const $ = $request;

// Tối ưu headers
const headers = $request.headers;
headers['User-Agent'] = 'RoPhim/3.0.0 (iPhone; iOS 17.0; Scale/3.00)';
headers['Accept'] = 'application/json, text/plain, */*';
headers['Accept-Language'] = 'vi-VN,vi;q=0.9,en;q=0.8';
headers['Accept-Encoding'] = 'gzip, deflate, br';
headers['Connection'] = 'keep-alive';

// Thêm premium headers
headers['X-Premium-User'] = 'true';
headers['X-VIP-Status'] = 'active';
headers['X-Device-Type'] = 'premium';

// Tối ưu URL parameters
let url = $request.url;
if (url.includes('api.rofilm.net') || url.includes('rophimapi.net')) {
    // Thêm premium parameters
    const urlObj = new URL(url);
    urlObj.searchParams.set('premium', 'true');
    urlObj.searchParams.set('vip', '1');
    urlObj.searchParams.set('quality', '1080p');
    urlObj.searchParams.set('unlimited', '1');
    
    $request.url = urlObj.toString();
}

$done($request);