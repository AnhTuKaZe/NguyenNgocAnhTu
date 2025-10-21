/**
 * RoPhim Request Optimization 2025
 * Latest request optimization for RoPhim with 2025 features
 * Author: AnhTuKaZe
 * Version: 2025.01.0
 * Features: 8K Support, AI Headers, Advanced Optimization
 */

const $ = $request;

// Optimize headers for RoPhim 2025
const headers = $request.headers;
headers['User-Agent'] = 'RoPhim/5.0.0 (iPhone; iOS 18.0; Scale/3.00)';
headers['Accept'] = 'application/json, text/plain, */*';
headers['Accept-Language'] = 'vi-VN,vi;q=0.9,en;q=0.8';
headers['Accept-Encoding'] = 'gzip, deflate, br';
headers['Connection'] = 'keep-alive';
headers['Cache-Control'] = 'no-cache';

// Premium headers 2025
headers['X-Premium-User'] = 'true';
headers['X-VIP-Status'] = 'active';
headers['X-Device-Type'] = 'premium_2025';
headers['X-App-Version'] = '5.0.0';
headers['X-Platform'] = 'ios';
headers['X-Client-Type'] = 'mobile';
headers['X-AI-Enabled'] = 'true';
headers['X-8K-Support'] = 'true';
headers['X-HDR-Support'] = 'true';
headers['X-Dolby-Vision'] = 'true';
headers['X-Priority'] = 'ultra_high';

// Optimize URL parameters 2025
let url = $request.url;
if (url.includes('api.rofilm.net') || url.includes('rophimapi.net') || url.includes('api.rophim.com')) {
    const urlObj = new URL(url);
    
    // Add premium parameters 2025
    urlObj.searchParams.set('premium', 'true');
    urlObj.searchParams.set('vip', '1');
    urlObj.searchParams.set('unlimited', '1');
    urlObj.searchParams.set('quality', '8K');
    urlObj.searchParams.set('adfree', '1');
    urlObj.searchParams.set('version', '5.0.0');
    urlObj.searchParams.set('ai', 'true');
    urlObj.searchParams.set('hdr', 'true');
    urlObj.searchParams.set('dolby', 'true');
    urlObj.searchParams.set('year', '2025');
    urlObj.searchParams.set('priority', 'ultra_high');
    
    $request.url = urlObj.toString();
}

$done($request);