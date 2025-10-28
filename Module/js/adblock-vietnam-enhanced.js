/*************************************

Script: Vietnam Apps AdBlocker (Enhanced)
Author: AnhTuKaZe
Version: 2.0
Updated: 2025-10-28

Supported Apps:
- ZingNews
- VnExpress
- Zing MP3
- Zalo (Chat & News)
- Shopee
- Tiki
- Ola - Đọc báo
- Kenh14
- Genk

*************************************/

const version = 'V2.0 - Enhanced Vietnam AdBlocker';

let obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  console.log("⚠️ Non-JSON response, skipping");
  $done({});
}

const url = $request.url;
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";

// ========= ZingNews AdBlock ========= //
if (url.includes("zingnews.vn")) {
  if (obj.data) {
    // Remove ads from article list
    if (Array.isArray(obj.data)) {
      obj.data = obj.data.filter(item => 
        !item.article_type || 
        (item.article_type !== "advertorial" && 
         item.article_type !== "sponsored")
      );
    }
    
    // Remove banner ads
    if (obj.data.ads) delete obj.data.ads;
    if (obj.data.advertisement) delete obj.data.advertisement;
  }
}

// ========= VnExpress AdBlock ========= //
if (url.includes("vnexpress.vn")) {
  if (obj.data && Array.isArray(obj.data)) {
    obj.data = obj.data.filter(item => {
      return !item.article_type || 
             item.article_type !== 3 && // Sponsored
             item.article_type !== 4;   // Ads
    });
  }
  
  // Remove sidebar ads
  if (obj.ads) delete obj.ads;
  if (obj.banner) delete obj.banner;
}

// ========= Zing MP3 AdBlock ========= //
if (url.includes("mp3.zing.vn") || url.includes("zingmp3.vn")) {
  if (obj.data) {
    // Remove audio ads
    if (obj.data.ads) delete obj.data.ads;
    if (obj.data.adPlaylist) delete obj.data.adPlaylist;
    
    // Premium features
    if (obj.data.vip) {
      obj.data.vip = true;
    }
  }
}

// ========= Zalo AdBlock ========= //
if (url.includes("zalo.me") || url.includes("za.zaloapp.com")) {
  // Remove chat ads
  if (obj.data && obj.data.ads) {
    obj.data.ads = [];
  }
  
  // Remove news ads
  if (obj.articles && Array.isArray(obj.articles)) {
    obj.articles = obj.articles.filter(article => 
      !article.isAd && 
      !article.isSponsored
    );
  }
  
  // Remove banner
  if (obj.banner) delete obj.banner;
}

// ========= Shopee AdBlock ========= //
if (url.includes("shopee.vn")) {
  if (obj.data) {
    // Remove homepage ads
    if (obj.data.sections && Array.isArray(obj.data.sections)) {
      obj.data.sections = obj.data.sections.filter(section =>
        section.type !== "ad_banner" &&
        section.type !== "flash_sale_banner"
      );
    }
    
    // Remove search ads
    if (obj.data.items && Array.isArray(obj.data.items)) {
      obj.data.items = obj.data.items.filter(item => 
        !item.is_ad && !item.is_official_shop_ad
      );
    }
  }
}

// ========= Tiki AdBlock ========= //
if (url.includes("tiki.vn")) {
  if (obj.data) {
    // Remove banner ads
    if (obj.data.banners) {
      obj.data.banners = obj.data.banners.filter(banner => 
        !banner.is_advertisement
      );
    }
    
    // Remove product ads
    if (obj.data.products && Array.isArray(obj.data.products)) {
      obj.data.products = obj.data.products.filter(product => 
        !product.is_sponsored
      );
    }
  }
}

// ========= Ola - Đọc báo AdBlock ========= //
if (url.includes("ola.vn") || ua.includes("Ola")) {
  if (obj.data && Array.isArray(obj.data)) {
    obj.data = obj.data.filter(item => 
      !item.type || 
      (item.type !== "ads" && item.type !== "banner")
    );
  }
}

// ========= Kenh14 AdBlock ========= //
if (url.includes("kenh14.vn")) {
  if (obj.data) {
    if (obj.data.ads) delete obj.data.ads;
    if (obj.data.adBanner) delete obj.data.adBanner;
  }
}

// ========= Genk AdBlock ========= //
if (url.includes("genk.vn")) {
  if (obj.items && Array.isArray(obj.items)) {
    obj.items = obj.items.filter(item => 
      item.objectType !== "advertisement"
    );
  }
}

console.log(`✅ Vietnam AdBlock applied for: ${url}`);

$done({ body: JSON.stringify(obj) });
