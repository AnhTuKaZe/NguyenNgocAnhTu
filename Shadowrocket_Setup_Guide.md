# 🚀 HƯỚNG DẪN CÀI ĐẶT SHADOWROCKET ULTIMATE 2025

## 📱 CÁCH CÀI ĐẶT CHI TIẾT:

### **1️⃣ CÀI ĐẶT MODULE:**

**Bước 1:** Mở Shadowrocket
**Bước 2:** Vào **Config** → **Module** 
**Bước 3:** Nhấn **+** để thêm module mới
**Bước 4:** Nhập URL:
```
https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/Module/Shadowrocket_Ultimate_2025.sgmodule
```
**Bước 5:** Nhấn **Download** → **Save**

### **2️⃣ CẤU HÌNH MITM (QUAN TRỌNG):**

**Bước 1:** Vào **Settings** → **MITM**
**Bước 2:** Bật **MITM**
**Bước 3:** Thêm hostnames:
```
api.rofilm.net
rophimapi.net
api.rophim.com
*.rofilm.net
*.rophimapi.net
*.rophim.com
api-sub.meitu.com
api.meitu.com
*.meitu.com
cdn.meitu.com
static.meitu.com
img.meitu.com
```

**Bước 4:** Nhấn **Install Certificate**
**Bước 5:** Vào **Settings** → **General** → **About** → **Certificate Trust Settings**
**Bước 6:** Bật **Shadowrocket Certificate**

### **3️⃣ CẤU HÌNH REWRITE:**

**Bước 1:** Vào **Settings** → **Rewrite**
**Bước 2:** Bật **Rewrite**
**Bước 3:** Thêm rules:

```javascript
# RoPhim Ultimate 2025
^https?://api\.rofilm\.net/.*\?.*&(ad|ads|popup|banner|tracking|spam)=.* - reject
^https?://rophimapi\.net/.*\?.*&(ad|ads|popup|banner|tracking|spam)=.* - reject
^https?://api\.rofilm\.net/.*quality=.* https://api.rofilm.net/quality=8K 302
^https?://rophimapi\.net/.*quality=.* https://rophimapi.net/quality=8K 302
^https?://api\.rofilm\.net/.*premium=.* https://api.rofilm.net/premium=true 302
^https?://rophimapi\.net/.*vip=.* https://rophimapi.net/vip=1 302
^https?://api\.rofilm\.net/.*ai=.* https://api.rofilm.net/ai=true 302

# Wink Ultimate 2025
^https?://api-sub\.meitu\.com/.*\?.*&(ad|ads|popup|banner|tracking|spam)=.* - reject
^https?://api\.meitu\.com/.*\?.*&(ad|ads|popup|banner|tracking|spam)=.* - reject
^https?://api-sub\.meitu\.com/.*premium=.* https://api-sub.meitu.com/premium=true 302
^https?://api-sub\.meitu\.com/.*vip=.* https://api-sub.meitu.com/vip=1 302
^https?://api-sub\.meitu\.com/.*quality=.* https://api-sub.meitu.com/quality=8K 302
^https?://api-sub\.meitu\.com/.*ai=.* https://api-sub.meitu.com/ai=true 302
```

### **4️⃣ CẤU HÌNH SCRIPT:**

**Bước 1:** Vào **Settings** → **Script**
**Bước 2:** Bật **Script**
**Bước 3:** Thêm scripts:

```javascript
# RoPhim Ultimate 2025
rophim-ultimate-2025 = type=http-response,pattern=^https?:\/\/api\.rofilm\.net\/.*,requires-body=1,max-size=20971520,binary-body-mode=1,timeout=60,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/rophim-ultimate-2025-shadowrocket.js

rophim-backup-2025 = type=http-response,pattern=^https?:\/\/rophimapi\.net\/.*,requires-body=1,max-size=10485760,binary-body-mode=1,timeout=45,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/rophim-ultimate-2025-shadowrocket.js

rophim-request-2025 = type=http-request,pattern=^https?:\/\/api\.rofilm\.net\/.*,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/rophim-request-2025-shadowrocket.js,timeout=20

# Wink Ultimate 2025
wink-ultimate-2025 = type=http-response,pattern=^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json,requires-body=1,max-size=10485760,binary-body-mode=1,timeout=60,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/wink-ultimate-2025-shadowrocket.js

wink-backup-2025 = type=http-response,pattern=^https?:\/\/api-sub\.meitu\.com\/.*,requires-body=1,max-size=5242880,binary-body-mode=1,timeout=45,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/wink-ultimate-2025-shadowrocket.js

wink-request-2025 = type=http-request,pattern=^https?:\/\/api-sub\.meitu\.com\/.*,script-path=https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/refs/heads/main/script/wink-request-2025-shadowrocket.js,timeout=20
```

### **5️⃣ CẤU HÌNH MAP LOCAL:**

**Bước 1:** Vào **Settings** → **Map Local**
**Bước 2:** Bật **Map Local**
**Bước 3:** Thêm rules:

```javascript
# RoPhim Ultimate 2025 blocking
^https?://api\.rofilm\.net/.*(ad|ads|popup|banner|tracking|spam) data-type=text data="" status-code=200
^https?://rophimapi\.net/.*(ad|ads|popup|banner|tracking|spam) data-type=text data="" status-code=200
^https?://api\.rofilm\.net/.*premium.* data-type=json data={"premium":true,"vip":true,"unlimited":true,"quality":"8K","aiEnhanced":true,"year":"2025"} status-code=200
^https?://rophimapi\.net/.*vip.* data-type=json data={"vip":true,"premium":true,"unlimited":true,"quality":"8K","aiEnhanced":true,"year":"2025"} status-code=200

# Wink Ultimate 2025 blocking
^https?://api-sub\.meitu\.com/.*(ad|ads|popup|banner|tracking|spam) data-type=text data="" status-code=200
^https?://api\.meitu\.com/.*(ad|ads|popup|banner|tracking|spam) data-type=text data="" status-code=200
^https?://api-sub\.meitu\.com/.*premium.* data-type=json data={"premium":true,"vip":true,"unlimited":true,"allFeatures":true,"aiEnhanced":true,"8kExport":true,"year":"2025"} status-code=200
^https?://api-sub\.meitu\.com/.*vip.* data-type=json data={"vip":true,"premium":true,"unlimited":true,"allFeatures":true,"aiEnhanced":true,"8kExport":true,"year":"2025"} status-code=200
```

### **6️⃣ CẤU HÌNH HEADER REWRITE:**

**Bước 1:** Vào **Settings** → **Header Rewrite**
**Bước 2:** Bật **Header Rewrite**
**Bước 3:** Thêm rules:

```javascript
# RoPhim Ultimate 2025
^https://api\.rofilm\.net header-del x-requested-with
^https://rophimapi\.net header-del x-requested-with
^https://api\.rofilm\.net header-add X-Premium-User "true"
^https://rophimapi\.net header-add X-VIP-Status "active"
^https://api\.rofilm\.net header-add X-Quality "8K"
^https://rophimapi\.net header-add X-Quality "8K"
^https://api\.rofilm\.net header-add X-AI-Enhanced "true"
^https://rophimapi\.net header-add X-AI-Enhanced "true"
^https://api\.rofilm\.net header-add X-Year "2025"
^https://rophimapi\.net header-add X-Year "2025"

# Wink Ultimate 2025
^https://api-sub\.meitu\.com header-del x-requested-with
^https://api\.meitu\.com header-del x-requested-with
^https://api-sub\.meitu\.com header-add X-Premium-User "true"
^https://api\.meitu\.com header-add X-VIP-Status "active"
^https://api-sub\.meitu\.com header-add X-All-Features "true"
^https://api\.meitu\.com header-add X-All-Features "true"
^https://api-sub\.meitu\.com header-add X-8K-Export "true"
^https://api\.meitu\.com header-add X-8K-Export "true"
^https://api-sub\.meitu\.com header-add X-AI-Enhanced "true"
^https://api\.meitu\.com header-add X-AI-Enhanced "true"
^https://api-sub\.meitu\.com header-add X-Year "2025"
^https://api\.meitu\.com header-add X-Year "2025"
```

### **7️⃣ CẤU HÌNH DNS:**

**Bước 1:** Vào **Settings** → **DNS**
**Bước 2:** Thêm DNS servers:
```
8.8.8.8
1.1.1.1
208.67.222.222
```

### **8️⃣ CẤU HÌNH ADVANCED:**

**Bước 1:** Vào **Settings** → **Advanced**
**Bước 2:** Bật:
```
- Skip Proxy
- Skip DNS  
- Skip Local
- IPv6 Support (tắt)
```

## 🔧 TROUBLESHOOTING:

### **❌ NẾU KHÔNG CHẠY:**

1. **Kiểm tra MITM Certificate:**
   - Đảm bảo đã install và trust certificate
   - Restart Shadowrocket
   - Clear DNS cache

2. **Kiểm tra Scripts:**
   - Đảm bảo tất cả scripts đã được thêm
   - Check logs để xem lỗi
   - Reload module

3. **Kiểm tra Network:**
   - Đảm bảo có internet
   - Thử tắt VPN khác
   - Clear app cache

### **✅ NẾU CHẠY THÀNH CÔNG:**

**RoPhim sẽ hiển thị:**
- ✅ Premium status
- ✅ 8K quality
- ✅ AI features
- ✅ No ads

**Wink sẽ hiển thị:**
- ✅ All effects unlocked
- ✅ 8K export
- ✅ AI tools
- ✅ Premium features

## 🎯 KẾT QUẢ MONG ĐỢI:

### **📱 ROPhim:**
```
✅ Premium: true
✅ VIP: true  
✅ Quality: 8K
✅ AI Enhanced: true
✅ Year: 2025
✅ Unlimited: true
```

### **💎 WINK:**
```
✅ Premium: true
✅ VIP: true
✅ All Features: true
✅ 8K Export: true
✅ AI Enhanced: true
✅ Year: 2025
```

## 🚀 TÓM TẮT:

**1. Cài đặt module Shadowrocket_Ultimate_2025.sgmodule**
**2. Cấu hình MITM với hostnames**
**3. Trust certificate**
**4. Thêm rewrite, script, map local, header rules**
**5. Restart Shadowrocket**
**6. Mở RoPhim & Wink → Enjoy!**

**Đây là cấu hình tối ưu nhất cho Shadowrocket!** 🎉💎✨