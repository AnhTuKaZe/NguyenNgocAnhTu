/**
 * Wink Features Unlock Script
 * Unlock all editing features và tools
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
    
    // Features unlock
    if (body.data) {
        // All effects unlocked
        if (body.data.effects) {
            body.data.effects.unlocked = true;
            body.data.effects.premium = true;
            body.data.effects.unlimited = true;
            body.data.effects.all = true;
        }
        
        // All filters unlocked
        if (body.data.filters) {
            body.data.filters.unlocked = true;
            body.data.filters.premium = true;
            body.data.filters.unlimited = true;
            body.data.filters.all = true;
        }
        
        // All templates unlocked
        if (body.data.templates) {
            body.data.templates.unlocked = true;
            body.data.templates.premium = true;
            body.data.templates.unlimited = true;
            body.data.templates.all = true;
        }
        
        // All tools unlocked
        if (body.data.tools) {
            body.data.tools.unlocked = true;
            body.data.tools.premium = true;
            body.data.tools.unlimited = true;
            body.data.tools.all = true;
        }
        
        // Export features
        if (body.data.export) {
            body.data.export.hd = true;
            body.data.export.4k = true;
            body.data.export.unlimited = true;
            body.data.export.premium = true;
        }
        
        // Premium features
        body.data.premium = true;
        body.data.vip = true;
        body.data.unlimited = true;
        body.data.allFeatures = true;
    }
    
    // Response status
    if (body.status) {
        body.status = 'success';
        body.premium = true;
        body.vip = true;
        body.allFeatures = true;
    }
    
    // Remove feature limitations
    if (body.limits) {
        body.limits.effects = -1;
        body.limits.filters = -1;
        body.limits.templates = -1;
        body.limits.tools = -1;
        body.limits.export = -1;
    }
    
    $response.body = JSON.stringify(body);
    
} catch (error) {
    console.log('Wink Features Script Error:', error);
}

$done($response);