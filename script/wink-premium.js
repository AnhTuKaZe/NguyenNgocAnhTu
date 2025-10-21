/**
 * Wink Premium Unlock Script
 * Unlock premium features và VIP status cho Wink
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
        
        // VIP info
        if (body.data.vip_info) {
            body.data.vip_info.is_vip = true;
            body.data.vip_info.vip_level = 'premium';
            body.data.vip_info.expiry = '2099-12-31';
            body.data.vip_info.unlimited = true;
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
            body.data.features.hdExport = true;
            body.data.features.allEffects = true;
            body.data.features.allFilters = true;
            body.data.features.allTemplates = true;
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
        body.limits.export = 'unlimited';
        body.limits.effects = 'unlimited';
    }
    
    $response.body = JSON.stringify(body);
    
} catch (error) {
    console.log('Wink Premium Script Error:', error);
}

$done($response);