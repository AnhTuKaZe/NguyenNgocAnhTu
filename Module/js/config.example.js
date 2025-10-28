// ========================================= //
// 📝 Configuration Example
// 👤 Author: AnhTuKaZe
// 📅 Updated: 2025-10-28
// ⚡ Hướng dẫn cấu hình chi tiết
// ========================================= //

/* 
 * File này chứa các ví dụ về cấu hình cho từng script
 * Copy và paste vào script tương ứng để customize
 */

// ========================================= //
// 1. Locket Gold Configuration
// ========================================= //
const LOCKET_CONFIG = {
  // Ngày mua (ISO 8601 format)
  purchaseDate: "2025-07-18T00:00:00Z",
  
  // Ngày hết hạn (năm 2099 = lifetime)
  expiryDate: "2099-12-18T01:04:17Z",
  
  // Product ID
  productId: "locket.premium.yearly",
  
  // Bật debug để xem logs chi tiết
  debug: false // true để bật
};

// ========================================= //
// 2. TikTok Premium Configuration
// ========================================= //
const TIKTOK_CONFIG = {
  // Xóa watermark (logo TikTok)
  removeWatermark: true,
  
  // Bật download HD (1080p)
  enableHDDownload: true,
  
  // Xóa quảng cáo
  removeAds: true,
  
  // Debug mode
  debug: false
};

// ========================================= //
// 3. Duolingo Plus Configuration
// ========================================= //
const DUOLINGO_CONFIG = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiryDate: "2099-12-31T23:59:59Z",
  productId: "duolingo.premium.yearly",
  
  // Features to unlock
  features: {
    unlimitedHearts: true,
    noAds: true,
    allCourses: true,
    premiumContent: true
  },
  
  debug: false
};

// ========================================= //
// 4. Calm Premium Configuration
// ========================================= //
const CALM_CONFIG = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiryDate: "2099-12-31T23:59:59Z",
  productId: "com.calm.premium.yearly",
  
  // Features
  features: {
    allMeditations: true,
    sleepStories: true,
    premiumMusic: true,
    masterclasses: true
  },
  
  debug: false
};

// ========================================= //
// 5. Vietnam AdBlocker Configuration
// ========================================= //
const VIETNAM_ADBLOCKER_CONFIG = {
  debug: false,
  
  // Apps to enable adblocking
  apps: {
    zingnews: true,   // Chặn ads ZingNews
    vnexpress: true,  // Chặn ads VnExpress
    zingmp3: true,    // Chặn ads Zing MP3
    zing: true        // Chặn ads Zing.vn
  },
  
  // Custom ad patterns (thêm pattern nếu cần)
  customAdPatterns: [
    'advertisement',
    'quangcao',
    'quang_cao',
    'ad_banner',
    'taitro'
    // Thêm pattern tại đây
  ]
};

// ========================================= //
// 6. YouTube Configuration (Optional)
// ========================================= //
const YOUTUBE_CONFIG = {
  // Ngôn ngữ phụ đề
  lyricLang: "vi",      // vi, en, zh, ja, ko
  captionLang: "vi",    // vi, en, zh, ja, ko
  
  // Chặn upload button
  blockUpload: true,
  
  // Chặn immersive mode
  blockImmersive: true,
  
  // Debug mode
  debug: false
};

// ========================================= //
// 7. Spotify Configuration (Optional)
// ========================================= //
const SPOTIFY_CONFIG = {
  // Chất lượng audio
  audioQuality: "very_high", // high, very_high
  
  // Features
  removeAds: true,
  unlimitedSkips: true,
  enableOffline: true,
  
  debug: false
};

// ========================================= //
// 📝 HƯỚNG DẪN SỬ DỤNG
// ========================================= //

/*
1. COPY CONFIG MUỐN SỬ DỤNG:
   - Chọn config phù hợp ở trên
   - Copy toàn bộ object CONFIG

2. MỞ FILE SCRIPT TƯƠNG ỨNG:
   - locket.js cho Locket
   - tiktok.js cho TikTok
   - duolingo.js cho Duolingo
   - calm.js cho Calm
   - adblock-vietnam.js cho Vietnam AdBlocker

3. TÌM PHẦN CONFIG:
   - Tìm dòng const CONFIG = {...}
   
4. THAY THẾ GIÁ TRỊ:
   - Thay đổi giá trị bên trong CONFIG
   - Ví dụ: debug: false → debug: true

5. SAVE VÀ RELOAD MODULE:
   - Save file
   - Reload module trong app proxy
   - Test lại chức năng

EXAMPLE:
────────────────────────────────────────

// File: tiktok.js
// TÌM phần này:

const CONFIG = {
  debug: false,
  removeWatermark: true,
  enableHDDownload: true,
  removeAds: true
};

// ĐỔI thành:

const CONFIG = {
  debug: true,              // ← BẬT DEBUG
  removeWatermark: true,
  enableHDDownload: false,  // ← TẮT HD
  removeAds: true
};

────────────────────────────────────────

📌 LƯU Ý:
- true = Bật
- false = Tắt
- String phải có dấu ngoặc kép "..."
- Dates phải đúng format ISO 8601
*/

// ========================================= //
// 🔍 DEBUG MODE
// ========================================= //

/*
KHI NÀO BẬT DEBUG?
- Script không hoạt động
- Muốn xem flow xử lý
- Troubleshooting

LÀM SAO XEM LOGS?
1. Bật debug: true trong CONFIG
2. Mở Console trong app proxy:
   - Surge: Home → Recent Requests → Tap request → Console
   - Shadowrocket: Home → More → Debug
   - Quantumult X: Home → Bottom → Logs

LOGS SẼ HIỂN THỊ:
✅ Script started
✅ Processing...
✅ Success / ❌ Error
*/

// ========================================= //
// ⚠️ COMMON ISSUES
// ========================================= //

/*
❌ Script Error: "Timeout"
SOLUTION: Tăng timeout trong script config
timeout=15 → timeout=30

❌ Certificate Error
SOLUTION: 
1. Xóa certificate cũ
2. Generate certificate mới
3. Install và trust certificate

❌ Premium không work
SOLUTION:
1. Enable MITM
2. Check hostname
3. Restore Purchase
4. Đăng xuất/đăng nhập lại
*/

// ========================================= //
// 📚 RESOURCES
// ========================================= //

/*
📖 Documentation: README.md
🐛 Report Bugs: GitHub Issues
💬 Support: Messenger Channel
🔄 Updates: GitHub Releases

🔗 Links:
- GitHub: https://github.com/AnhTuKaZe/NguyenNgocAnhTu
- Messenger: https://www.messenger.com/channel/NguyenNgocAnhTu.VN
*/
