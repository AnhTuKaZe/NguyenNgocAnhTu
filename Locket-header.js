const version = 'V1.0.3';

function setHeaderValue(headers, key, value) {
    const lowerKey = key.toLowerCase();
    if (lowerKey in headers) {
        headers[lowerKey] = value;
    } else {
        headers[key] = value;
    }
}

var modifiedHeaders = $request.headers;

const headersToModify = {
    "X-RevenueCat-ETag": "",
    "If-None-Match": "",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache"
};

for (let key in headersToModify) {
    setHeaderValue(modifiedHeaders, key, headersToModify[key]);
}

console.log("🛠 Modified Headers:", JSON.stringify(modifiedHeaders, null, 2));

$done({ headers: modifiedHeaders });
