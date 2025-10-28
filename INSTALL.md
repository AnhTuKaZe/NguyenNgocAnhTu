# 📥 Hướng Dẫn Cài Đặt Chi Tiết

> Hướng dẫn từng bước cài đặt **Nguyễn Ngọc Anh Tú Premium Suite**

---

## 📋 Yêu Cầu

- ✅ iPhone/iPad chạy iOS 13.0 trở lên
- ✅ Một trong các app sau:
  - **Surge** (khuyến nghị - $49.99)
  - **Shadowrocket** ($2.99)
  - **Quantumult X** ($7.99)
  - **Loon** ($5.99)
- ✅ Kết nối internet ổn định

---

## 🎯 Phần 1: Cài Đặt App Proxy

### **Option 1: Surge (Khuyến Nghị)**

1. Mở **App Store**
2. Tìm kiếm "**Surge 5**"
3. Mua và tải về ($49.99)
4. Mở app và làm theo hướng dẫn

**Ưu điểm:**
- ✅ Mạnh mẽ và ổn định nhất
- ✅ Hỗ trợ nhiều tính năng
- ✅ UI/UX tốt
- ✅ Update thường xuyên

### **Option 2: Shadowrocket (Phổ Biến)**

1. Mở **App Store**
2. Tìm "**Shadowrocket**"
3. Mua và tải về ($2.99)

**Ưu điểm:**
- ✅ Giá rẻ
- ✅ Dễ sử dụng
- ✅ Đầy đủ tính năng

### **Option 3: Quantumult X**

1. App Store → "**Quantumult X**"
2. Tải về ($7.99)

### **Option 4: Loon**

1. App Store → "**Loon**"
2. Tải về ($5.99)

---

## 🔧 Phần 2: Cấu Hình MITM (Bắt Buộc)

> ⚠️ **QUAN TRỌNG**: Bạn phải cài đặt MITM Certificate, nếu không module sẽ không hoạt động!

### **Bước 1: Generate Certificate**

#### **Surge:**
1. Mở **Surge**
2. Vào **Settings** (⚙️) ở góc dưới phải
3. Chọn **MITM**
4. Enable **MITM**
5. Nhấn **Generate New Certificate**

#### **Shadowrocket:**
1. Mở **Shadowrocket**
2. Vào **Settings** → **HTTPS Decryption**
3. Enable **HTTPS Decryption**
4. Nhấn **Certificate** → **Generate New Certificate**

#### **Quantumult X:**
1. Mở **Quantumult X**
2. **Settings** → **MITM**
3. Enable **MITM**
4. Nhấn **Generate Key & Root Certificate**

---

### **Bước 2: Install Certificate**

1. Sau khi generate, nhấn **Install Certificate**
2. Một popup sẽ xuất hiện → Nhấn **Allow**
3. Safari sẽ mở → Nhấn **Allow** để download profile
4. Nhấn **Close**

---

### **Bước 3: Cài Đặt Profile**

1. Mở **Settings** (Cài đặt iPhone)
2. Bạn sẽ thấy "**Profile Downloaded**" ở đầu
3. Nhấn vào đó
4. Nhấn **Install** (góc trên phải)
5. Nhập **passcode** nếu được yêu cầu
6. Nhấn **Install** lần nữa
7. Nhấn **Install** lần cuối
8. Nhấn **Done**

---

### **Bước 4: Trust Certificate**

> ⚠️ **QUAN TRỌNG NHẤT**: Bước này thường bị quên!

1. Vẫn trong **Settings** (Cài đặt)
2. Vào **General** (Cài đặt chung)
3. Xuống dưới cùng → **About** (Giới thiệu)
4. Xuống dưới cùng → **Certificate Trust Settings** (Cài đặt độ tin cậy chứng chỉ)
5. Bật switch cho certificate vừa cài (màu xanh)
6. Nhấn **Continue** khi có popup cảnh báo

---

## 📦 Phần 3: Cài Đặt Module

### **Phương Pháp 1: Install từ URL (Khuyến Nghị)**

#### **Surge:**

1. Mở **Surge**
2. Vào tab **Modules** ở dưới cùng
3. Nhấn dấu **+** (góc trên phải)
4. Chọn **Install from URL**
5. Paste URL sau:

```
https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/main/Module/NguyenNgocAnhTu_Premium.sgmodule
```

6. Nhấn **OK**
7. Đợi download xong
8. Enable switch module (màu xanh)

#### **Shadowrocket:**

1. Mở **Shadowrocket**
2. Vào **Config** tab
3. Nhấn dấu **+** ở góc trên
4. Chọn **Add Module**
5. Paste URL trên
6. Nhấn **Download**
7. Enable module

#### **Quantumult X:**

1. Mở **Quantumult X**
2. **Settings** (3 gạch dưới cùng)
3. **Rewrite**
4. Nhấn dấu **+** góc trên
5. Paste URL
6. Nhấn **Save**
7. Enable tất cả rules

---

### **Phương Pháp 2: Import File Thủ Công**

1. Download file từ [GitHub Releases](https://github.com/AnhTuKaZe/NguyenNgocAnhTu/releases)
2. Mở file bằng app proxy của bạn
3. Module sẽ tự động import
4. Enable module

---

## ✅ Phần 4: Kiểm Tra Cài Đặt

### **Checklist Trước Khi Dùng:**

- [ ] ✅ Đã cài đặt app proxy
- [ ] ✅ Đã generate certificate
- [ ] ✅ Đã install certificate profile
- [ ] ✅ Đã trust certificate trong Settings
- [ ] ✅ Đã enable MITM trong app proxy
- [ ] ✅ Đã cài module
- [ ] ✅ Đã enable module

### **Test Module:**

1. **Test YouTube:**
   - Mở YouTube app
   - Xem một video bất kỳ
   - ✅ Không có ads = Thành công!

2. **Test Spotify:**
   - Mở Spotify
   - Phát một bài hát
   - ✅ Không có ads = Thành công!

3. **Test TikTok:**
   - Mở TikTok
   - Xem video
   - ✅ Không có watermark = Thành công!

4. **Test Locket:**
   - Mở Locket
   - Vào Settings → Restore Purchase
   - ✅ Hiện Premium = Thành công!

---

## 🐛 Xử Lý Lỗi Thường Gặp

### **❌ Lỗi: "MITM Certificate Invalid"**

**Nguyên nhân:** Certificate chưa được trust

**Giải pháp:**
1. Vào **Settings** → **General** → **About**
2. **Certificate Trust Settings**
3. Bật switch cho certificate
4. Restart app proxy

---

### **❌ Lỗi: "Script Timeout"**

**Nguyên nhân:** Kết nối internet chậm

**Giải pháp:**
1. Kiểm tra kết nối internet
2. Thử đổi DNS (1.1.1.1 hoặc 8.8.8.8)
3. Restart app proxy

---

### **❌ Lỗi: "Module Not Working"**

**Nguyên nhân:** Module chưa enable hoặc hostname chưa đủ

**Giải pháp:**
1. Kiểm tra module đã enable (switch màu xanh)
2. Vào **MITM** → **Hostnames**
3. Đảm bảo có đầy đủ hostnames sau:
   ```
   *.googlevideo.com
   *.youtube.com
   youtubei.googleapis.com
   *.spotify.com
   *.tiktokv.com
   api.revenuecat.com
   *.zingnews.vn
   *.vnexpress.vn
   *.zing.vn
   ```

---

### **❌ Lỗi: "Cannot Download from URL"**

**Nguyên nhân:** GitHub bị chặn hoặc URL sai

**Giải pháp:**
1. Kiểm tra URL có đúng không
2. Thử dùng VPN để download
3. Hoặc dùng phương pháp import file thủ công

---

### **❌ Lỗi: "Premium Not Showing in App"**

**Nguyên nhân:** App chưa refresh subscription

**Giải pháp:**

**Cho Locket/Duolingo/Calm:**
1. Force close app (vuốt lên từ taskbar)
2. Mở lại app
3. Vào Settings → Restore Purchase
4. Hoặc đăng xuất và đăng nhập lại

**Cho YouTube/Spotify:**
1. Force close app
2. Xóa cache app trong Settings
3. Mở lại app

---

## 🎓 Video Hướng Dẫn

> Coming soon! Subscribe để không bỏ lỡ video hướng dẫn chi tiết

---

## 💡 Tips & Tricks

### **Tip 1: Enable Auto-Update**

Trong **Surge**:
1. Vào module settings
2. Enable **Auto Update**
3. Module sẽ tự động cập nhật khi có version mới

### **Tip 2: Backup Configuration**

1. Vào app proxy settings
2. Export configuration
3. Lưu vào iCloud/Dropbox
4. Dễ dàng restore khi cần

### **Tip 3: Multiple Profiles**

Tạo nhiều profile cho các mục đích khác nhau:
- Profile 1: YouTube + Spotify
- Profile 2: TikTok + Locket
- Profile 3: Full features

Switch giữa các profiles nhanh chóng

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề không thể tự xử lý:

1. **GitHub Issues**: [Report Bug](https://github.com/AnhTuKaZe/NguyenNgocAnhTu/issues)
2. **Messenger**: [Contact Me](https://www.messenger.com/channel/NguyenNgocAnhTu.VN)
3. **Email**: contact@anhtu.dev

**Khi báo lỗi, hãy cung cấp:**
- ✅ App proxy đang dùng
- ✅ iOS version
- ✅ App gặp lỗi
- ✅ Logs (nếu có)
- ✅ Screenshots

---

## 🎉 Hoàn Thành!

Chúc mừng! Bạn đã cài đặt thành công **Nguyễn Ngọc Anh Tú Premium Suite** 🎊

Tận hưởng các tính năng premium! 🚀

---

<div align="center">

**Made with ❤️ by Nguyễn Ngọc Anh Tú 🌸**

[⬆️ Back to Top](#-hướng-dẫn-cài-đặt-chi-tiết)

</div>
