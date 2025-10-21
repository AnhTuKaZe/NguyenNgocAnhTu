/**
 * Wink Request Optimization 2025 - Shadowrocket
 * Latest request optimization for Wink with 2025 features
 * Author: AnhTuKaZe
 * Version: 2025.01.0
 * Features: AI Headers, 8K Export, Advanced Tools
 * Optimized for: Shadowrocket
 */

const $ = $request;

// Optimize headers for Wink 2025
const headers = $request.headers;
headers['User-Agent'] = 'Wink/5.0.0 (iPhone; iOS 18.0; Scale/3.00)';
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
headers['X-8K-Export'] = 'true';
headers['X-All-Features'] = 'true';
headers['X-Advanced-Tools'] = 'true';
headers['X-Priority'] = 'ultra_high';

// Optimize URL parameters 2025
let url = $request.url;
if (url.includes('api-sub.meitu.com') || url.includes('api.meitu.com')) {
    const urlObj = new URL(url);
    
    // Add premium parameters 2025
    urlObj.searchParams.set('premium', 'true');
    urlObj.searchParams.set('vip', '1');
    urlObj.searchParams.set('unlimited', '1');
    urlObj.searchParams.set('quality', '8K');
    urlObj.searchParams.set('adfree', '1');
    urlObj.searchParams.set('version', '5.0.0');
    urlObj.searchParams.set('ai', 'true');
    urlObj.searchParams.set('allFeatures', 'true');
    urlObj.searchParams.set('advanced', 'true');
    urlObj.searchParams.set('year', '2025');
    urlObj.searchParams.set('priority', 'ultra_high');
    
    $request.url = urlObj.toString();
}

$done($request);