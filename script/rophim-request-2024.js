/**
 * RoPhim Request Optimization 2024
 * Latest request optimization for RoPhim
 * Author: AnhTuKaZe
 * Version: 2024.12.0
 */

const $ = $request;

// Optimize headers for RoPhim
const headers = $request.headers;
headers['User-Agent'] = 'RoPhim/4.0.0 (iPhone; iOS 17.2; Scale/3.00)';
headers['Accept'] = 'application/json, text/plain, */*';
headers['Accept-Language'] = 'vi-VN,vi;q=0.9,en;q=0.8';
headers['Accept-Encoding'] = 'gzip, deflate, br';
headers['Connection'] = 'keep-alive';
headers['Cache-Control'] = 'no-cache';

// Premium headers
headers['X-Premium-User'] = 'true';
headers['X-VIP-Status'] = 'active';
headers['X-Device-Type'] = 'premium';
headers['X-App-Version'] = '4.0.0';
headers['X-Platform'] = 'ios';
headers['X-Client-Type'] = 'mobile';

// Optimize URL parameters
let url = $request.url;
if (url.includes('api.rofilm.net') || url.includes('rophimapi.net') || url.includes('api.rophim.com')) {
    const urlObj = new URL(url);
    
    // Add premium parameters
    urlObj.searchParams.set('premium', 'true');
    urlObj.searchParams.set('vip', '1');
    urlObj.searchParams.set('unlimited', '1');
    urlObj.searchParams.set('quality', '4K');
    urlObj.searchParams.set('adfree', '1');
    urlObj.searchParams.set('version', '4.0.0');
    
    $request.url = urlObj.toString();
}

$done($request);