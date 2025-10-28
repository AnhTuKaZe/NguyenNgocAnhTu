// ========================================= //
// 🛠️ Utility Functions v1.0
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Shared utilities for all scripts
// ========================================= //

/* 
 * This file contains shared utility functions
 * that can be used across multiple scripts
 */

// ========================================= //
// 1. LOGGING UTILITIES
// ========================================= //

/**
 * Enhanced logging function with timestamp and levels
 * @param {string} scriptName - Name of the script
 * @param {string} message - Log message
 * @param {string} level - Log level (INFO, WARN, ERROR, DEBUG)
 * @param {boolean} debug - Debug mode flag
 */
function logMessage(scriptName, message, level = 'INFO', debug = false) {
  if (!debug && level === 'DEBUG') return;
  
  const timestamp = new Date().toISOString();
  const emoji = {
    'INFO': 'ℹ️',
    'WARN': '⚠️',
    'ERROR': '❌',
    'DEBUG': '🔍',
    'SUCCESS': '✅'
  };
  
  console.log(`[${timestamp}] [${scriptName}] ${emoji[level] || ''} [${level}] ${message}`);
}

// ========================================= //
// 2. JSON UTILITIES
// ========================================= //

/**
 * Safely parse JSON with error handling
 * @param {string} body - JSON string to parse
 * @param {object} fallback - Fallback object if parsing fails
 * @returns {object} Parsed object or fallback
 */
function safeParseJSON(body, fallback = {}) {
  try {
    return JSON.parse(body);
  } catch (e) {
    console.log(`❌ JSON Parse Error: ${e.message}`);
    return fallback;
  }
}

/**
 * Safely stringify JSON
 * @param {object} obj - Object to stringify
 * @param {string} fallback - Fallback string if stringify fails
 * @returns {string} JSON string or fallback
 */
function safeStringifyJSON(obj, fallback = '{}') {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    console.log(`❌ JSON Stringify Error: ${e.message}`);
    return fallback;
  }
}

// ========================================= //
// 3. DATE UTILITIES
// ========================================= //

/**
 * Get current date in ISO format
 * @returns {string} ISO date string
 */
function getCurrentDateISO() {
  return new Date().toISOString();
}

/**
 * Get date in the future
 * @param {number} years - Years to add
 * @returns {string} ISO date string
 */
function getFutureDate(years) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString();
}

/**
 * Check if date is expired
 * @param {string} dateString - ISO date string
 * @returns {boolean} True if expired
 */
function isDateExpired(dateString) {
  try {
    return new Date(dateString) < new Date();
  } catch (e) {
    return false;
  }
}

// ========================================= //
// 4. REVENUECAT UTILITIES
// ========================================= //

/**
 * Create RevenueCat subscription object
 * @param {object} config - Configuration object
 * @returns {object} Subscription object
 */
function createRevenueCatSubscription(config) {
  return {
    is_sandbox: config.isSandbox || false,
    ownership_type: config.ownershipType || "PURCHASED",
    billing_issues_detected_at: null,
    period_type: config.periodType || "normal",
    expires_date: config.expiresDate,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: config.purchaseDate,
    purchase_date: config.purchaseDate,
    store: config.store || "app_store",
    store_transaction_id: config.transactionId || "570001234567890"
  };
}

/**
 * Create RevenueCat entitlement object
 * @param {object} config - Configuration object
 * @returns {object} Entitlement object
 */
function createRevenueCatEntitlement(config) {
  return {
    grace_period_expires_date: null,
    purchase_date: config.purchaseDate,
    product_identifier: config.productId,
    expires_date: config.expiresDate
  };
}

/**
 * Initialize RevenueCat response structure
 * @param {object} obj - Original response object
 * @returns {object} Initialized object
 */
function initRevenueCatStructure(obj) {
  if (!obj) obj = {};
  if (!obj.subscriber) obj.subscriber = {};
  if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
  if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
  if (!obj.subscriber.non_subscriptions) obj.subscriber.non_subscriptions = {};
  return obj;
}

// ========================================= //
// 5. HEADER UTILITIES
// ========================================= //

/**
 * Set header value (case-insensitive)
 * @param {object} headers - Headers object
 * @param {string} key - Header key
 * @param {string} value - Header value
 */
function setHeaderValue(headers, key, value) {
  const lowerKey = key.toLowerCase();
  if (lowerKey in headers) {
    headers[lowerKey] = value;
  } else {
    headers[key] = value;
  }
}

/**
 * Delete header (case-insensitive)
 * @param {object} headers - Headers object
 * @param {string} key - Header key
 */
function deleteHeader(headers, key) {
  const lowerKey = key.toLowerCase();
  delete headers[lowerKey];
  delete headers[key];
}

/**
 * Get header value (case-insensitive)
 * @param {object} headers - Headers object
 * @param {string} key - Header key
 * @returns {string|undefined} Header value
 */
function getHeaderValue(headers, key) {
  const lowerKey = key.toLowerCase();
  return headers[lowerKey] || headers[key];
}

// ========================================= //
// 6. URL UTILITIES
// ========================================= //

/**
 * Extract domain from URL
 * @param {string} url - URL string
 * @returns {string} Domain
 */
function extractDomain(url) {
  try {
    const match = url.match(/^https?:\/\/([^\/]+)/);
    return match ? match[1] : '';
  } catch (e) {
    return '';
  }
}

/**
 * Check if URL matches pattern
 * @param {string} url - URL to check
 * @param {string|RegExp} pattern - Pattern to match
 * @returns {boolean} True if matches
 */
function urlMatches(url, pattern) {
  if (pattern instanceof RegExp) {
    return pattern.test(url);
  }
  return url.includes(pattern);
}

// ========================================= //
// 7. ARRAY UTILITIES
// ========================================= //

/**
 * Remove items from array by filter
 * @param {Array} array - Array to filter
 * @param {Function} filterFn - Filter function
 * @returns {object} {filtered, removed count}
 */
function filterArrayWithCount(array, filterFn) {
  const originalLength = array.length;
  const filtered = array.filter(filterFn);
  return {
    filtered,
    removedCount: originalLength - filtered.length
  };
}

/**
 * Check if array contains any of the patterns
 * @param {Array} array - Array to check
 * @param {Array} patterns - Patterns to find
 * @returns {boolean} True if found
 */
function arrayContainsAny(array, patterns) {
  return patterns.some(pattern => {
    return array.some(item => {
      const itemStr = typeof item === 'string' ? item : JSON.stringify(item);
      return itemStr.toLowerCase().includes(pattern.toLowerCase());
    });
  });
}

// ========================================= //
// 8. VALIDATION UTILITIES
// ========================================= //

/**
 * Validate configuration object
 * @param {object} config - Config to validate
 * @param {Array} requiredKeys - Required keys
 * @returns {boolean} True if valid
 */
function validateConfig(config, requiredKeys) {
  if (!config || typeof config !== 'object') return false;
  
  for (const key of requiredKeys) {
    if (!(key in config)) {
      console.log(`❌ Missing required config key: ${key}`);
      return false;
    }
  }
  return true;
}

// ========================================= //
// 9. USER AGENT UTILITIES
// ========================================= //

/**
 * Get User-Agent from request
 * @param {object} request - Request object
 * @returns {string} User-Agent string
 */
function getUserAgent(request) {
  return request.headers["User-Agent"] || 
         request.headers["user-agent"] || 
         "Unknown";
}

/**
 * Check if User-Agent matches app
 * @param {string} ua - User-Agent string
 * @param {string} appName - App name to check
 * @returns {boolean} True if matches
 */
function isAppUserAgent(ua, appName) {
  return ua.toLowerCase().includes(appName.toLowerCase());
}

// ========================================= //
// 10. RESPONSE UTILITIES
// ========================================= //

/**
 * Create success response
 * @param {object} body - Response body
 * @returns {object} Response object
 */
function createSuccessResponse(body) {
  return {
    body: safeStringifyJSON(body)
  };
}

/**
 * Create error response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @returns {object} Response object
 */
function createErrorResponse(message, statusCode = 500) {
  return {
    status: statusCode,
    body: safeStringifyJSON({
      error: message,
      timestamp: getCurrentDateISO()
    })
  };
}

// ========================================= //
// 11. PERFORMANCE UTILITIES
// ========================================= //

/**
 * Measure execution time
 * @param {Function} fn - Function to measure
 * @param {string} label - Label for logging
 * @returns {any} Function result
 */
function measureTime(fn, label = 'Function') {
  const start = Date.now();
  const result = fn();
  const duration = Date.now() - start;
  console.log(`⏱️ ${label} took ${duration}ms`);
  return result;
}

// ========================================= //
// 12. EXPORT (for Node.js testing)
// ========================================= //

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    logMessage,
    safeParseJSON,
    safeStringifyJSON,
    getCurrentDateISO,
    getFutureDate,
    isDateExpired,
    createRevenueCatSubscription,
    createRevenueCatEntitlement,
    initRevenueCatStructure,
    setHeaderValue,
    deleteHeader,
    getHeaderValue,
    extractDomain,
    urlMatches,
    filterArrayWithCount,
    arrayContainsAny,
    validateConfig,
    getUserAgent,
    isAppUserAgent,
    createSuccessResponse,
    createErrorResponse,
    measureTime
  };
}

// ========================================= //
// 📝 USAGE EXAMPLES
// ========================================= //

/*
// Example 1: Logging
logMessage('MyScript', 'Processing request', 'INFO', true);
logMessage('MyScript', 'Something wrong', 'ERROR', true);

// Example 2: JSON
const obj = safeParseJSON($response.body, { subscriber: {} });
const jsonStr = safeStringifyJSON(obj);

// Example 3: RevenueCat
const config = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiresDate: "2099-12-31T23:59:59Z",
  productId: "premium.yearly"
};
const subscription = createRevenueCatSubscription(config);
const entitlement = createRevenueCatEntitlement(config);

// Example 4: Headers
setHeaderValue(headers, "X-Custom", "value");
deleteHeader(headers, "X-Delete-Me");

// Example 5: Performance
const result = measureTime(() => {
  // expensive operation
  return processData();
}, 'Data Processing');
*/
