/**
 * RoPhim Premium Unlock Script
 * Unlock premium features và VIP status
 * Author: AnhTuKaZe
 * Version: 1.0.0
 */

const $ = $response;

try {
    let body = $response.body;
    
    // Parse JSON response
    if (typeof body === 'string') {
        body = JSON.parse(body);
    }
    
    // Premium unlock
    if (body.data) {
        // User status
        if (body.data.user) {
            body.data.user.premium = true;
            body.data.user.vip = true;
            body.data.user.unlimited = true;
            body.data.user.adFree = true;
            body.data.user.expiry = '2099-12-31';
        }
        
        // Subscription status
        if (body.data.subscription) {
            body.data.subscription.active = true;
            body.data.subscription.type = 'premium';
            body.data.subscription.expiry = '2099-12-31';
            body.data.subscription.unlimited = true;
        }
        
        // Features unlock
        if (body.data.features) {
            body.data.features.premium = true;
            body.data.features.vip = true;
            body.data.features.unlimited = true;
            body.data.features.adFree = true;
            body.data.features.hdQuality = true;
            body.data.features.download = true;
        }
    }
    
    // Response status
    if (body.status) {
        body.status = 'success';
        body.premium = true;
        body.vip = true;
    }
    
    // Remove limitations
    if (body.limits) {
        body.limits.daily = -1;
        body.limits.monthly = -1;
        body.limits.concurrent = -1;
        body.limits.quality = 'unlimited';
    }
    
    $response.body = JSON.stringify(body);
    
} catch (error) {
    console.log('RoPhim Premium Script Error:', error);
}

$done($response);