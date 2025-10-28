# ⚡🚀 Nguyễn Ngọc Anh Tú Premium Suite 🌸

[![Version](https://img.shields.io/badge/Version-2.0-blue.svg)](https://github.com/AnhTuKaZe/NguyenNgocAnhTu)
[![Updated](https://img.shields.io/badge/Updated-2025--10--28-green.svg)](https://github.com/AnhTuKaZe/NguyenNgocAnhTu)
[![License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)

> 🎯 **All-in-One Premium Module** cho Surge, Shadowrocket, Quantumult X và Loon  
> 🌟 Mở khóa Premium cho hơn **7 ứng dụng phổ biến** + **Chặn quảng cáo Việt Nam**

---

## 📋 Mục Lục

- [✨ Tính Năng](#-tính-năng)
- [🎯 Ứng Dụng Được Hỗ Trợ](#-ứng-dụng-được-hỗ-trợ)
- [📥 Cài Đặt](#-cài-đặt)
- [🔧 Cấu Hình](#-cấu-hình)
- [📱 Hướng Dẫn Sử Dụng](#-hướng-dẫn-sử-dụng)
- [🐛 Xử Lý Lỗi](#-xử-lý-lỗi)
- [📝 Changelog](#-changelog)
- [👨‍💻 Tác Giả](#-tác-giả)

---

## ✨ Tính Năng

### 🎬 **YouTube Premium**
- ✅ Xóa toàn bộ quảng cáo (video ads, banner ads, popup ads)
- ✅ Background play (nghe nhạc khi tắt màn hình)
- ✅ Picture-in-Picture (PiP) mode
- ✅ Phụ đề & lời bài hát tiếng Việt
- ✅ Chặn QUIC protocol để chặn ads tốt hơn

### 🎵 **Spotify Premium**
- ✅ Không quảng cáo
- ✅ Bỏ qua không giới hạn
- ✅ Chất lượng âm thanh cao (High Quality)
- ✅ Sử dụng phương thức Protobuf decode

### 🎥 **TikTok Premium**
- ✅ Xóa watermark (logo TikTok)
- ✅ Download video HD 1080p
- ✅ Không quảng cáo trong feed
- ✅ Tăng chất lượng video lên H265

### 🔐 **Locket Gold**
- ✅ Premium Lifetime (đến năm 2099)
- ✅ Tất cả tính năng Gold
- ✅ Không giới hạn widgets
- ✅ Unlocked premium stickers

### 🦉 **Duolingo Plus**
- ✅ Trái tim không giới hạn (Unlimited Hearts)
- ✅ Không quảng cáo
- ✅ Tất cả tính năng Plus
- ✅ Truy cập tất cả khóa học

### 🧘 **Calm Premium**
- ✅ Tất cả bài thiền (All Meditations)
- ✅ Sleep Stories không giới hạn
- ✅ Nhạc thư giãn Premium
- ✅ Masterclasses độc quyền

### 🇻🇳 **Vietnam AdBlocker**
- ✅ **ZingNews** - Chặn quảng cáo tin tức
- ✅ **VnExpress** - Chặn banner & popup
- ✅ **Zing MP3** - Xóa ads trong nhạc
- ✅ Tự động phát hiện và chặn ads

---

## 🎯 Ứng Dụng Được Hỗ Trợ

| App | Tính Năng | Trạng Thái |
|-----|-----------|------------|
| 🎬 **YouTube** | Premium Features | ✅ Hoạt động |
| 🎵 **Spotify** | Premium Unlocked | ✅ Hoạt động |
| 🎥 **TikTok** | No Watermark + HD | ✅ Hoạt động |
| 📸 **Instagram** | No Ads + Story Download | ✅ Hoạt động |
| 🐦 **Twitter/X** | No Ads + Blue Features | ⚠️ Thử nghiệm |
| 🔐 **Locket** | Gold Lifetime | ✅ Hoạt động |
| 🦉 **Duolingo** | Plus Features | ✅ Hoạt động |
| 🧘 **Calm** | Premium Access | ✅ Hoạt động |
| 🇻🇳 **ZingNews** | Ad Free | ✅ Hoạt động |
| 🇻🇳 **VnExpress** | Ad Free | ✅ Hoạt động |
| 🇻🇳 **Zing MP3** | Ad Free | ✅ Hoạt động |

---

## 📥 Cài Đặt

### **Phương Pháp 1: Cài Đặt Trực Tiếp (Khuyến Nghị)**

#### **Surge / Shadowrocket / Loon**

1. Mở app của bạn
2. Vào **Modules** hoặc **Script**
3. Nhấn **Install from URL**
4. Dán link sau:

```
https://raw.githubusercontent.com/AnhTuKaZe/NguyenNgocAnhTu/main/Module/NguyenNgocAnhTu_Premium.sgmodule
```

5. Nhấn **Download** và **Enable**

#### **Quantumult X**

1. Mở **Quantumult X**
2. Vào **Settings** → **Rewrite**
3. Nhấn dấu **+** ở góc trên
4. Dán link trên và **Save**

---

### **Phương Pháp 2: Cài Đặt Thủ Công**

1. Download file `.sgmodule` từ [Releases](https://github.com/AnhTuKaZe/NguyenNgocAnhTu/releases)
2. Mở bằng app proxy của bạn
3. Enable module

---

## 🔧 Cấu Hình

### **MITM (Man-in-the-Middle)**

⚠️ **Bắt buộc**: Bạn cần enable MITM và cài đặt Certificate

#### **Cài Đặt Certificate**

1. Vào **Settings** → **MITM**
2. Enable **MITM**
3. Nhấn **Generate New Certificate**
4. Nhấn **Install Certificate**
5. Làm theo hướng dẫn trên màn hình

#### **Hostnames Được Thêm**

Module sẽ tự động thêm các hostname sau:

```
- *.googlevideo.com
- *.youtube.com
- youtubei.googleapis.com
- *.spotify.com
- *.tiktokv.com
- api.revenuecat.com
- *.zingnews.vn
- *.vnexpress.vn
- *.zing.vn
```

---

## 📱 Hướng Dẫn Sử Dụng

### **YouTube Premium**

1. Mở YouTube app
2. Xem video bất kỳ
3. Quảng cáo sẽ tự động bị chặn
4. Background play & PiP tự động kích hoạt

### **Spotify Premium**

1. Mở Spotify app
2. Đóng và mở lại app 1 lần
3. Tận hưởng Premium features

### **TikTok No Watermark**

1. Mở TikTok
2. Xem hoặc tải video
3. Watermark tự động bị xóa
4. Quality tự động lên HD

### **Instagram Premium**

1. Mở Instagram
2. Browse feed như bình thường
3. Quảng cáo sẽ tự động bị xóa
4. Story có thể download
5. High quality media tự động

### **Twitter/X Premium**

1. Mở Twitter/X
2. Timeline sẽ không có promoted tweets
3. Blue features (experimental)
4. Clean experience

### **Locket / Duolingo / Calm**

1. Mở app
2. **Restore Purchase** hoặc đăng xuất/đăng nhập lại
3. Premium sẽ được kích hoạt

### **Vietnam AdBlocker**

- Tự động hoạt động khi bạn mở các app Việt Nam
- Không cần cấu hình thêm

---

## 🐛 Xử Lý Lỗi

### **Lỗi: "Certificate Invalid"**

**Giải pháp:**
1. Xóa certificate cũ
2. Tạo và cài đặt certificate mới
3. Tin cậy certificate trong Settings → General → About → Certificate Trust Settings

### **Lỗi: "Script Error" hoặc "Timeout"**

**Giải pháp:**
1. Kiểm tra kết nối internet
2. Tăng timeout trong script settings
3. Xóa cache app và thử lại

### **Premium Không Hoạt Động**

**Giải pháp:**
1. Đảm bảo MITM đã enable
2. Kiểm tra hostname đã được thêm
3. Đóng app hoàn toàn và mở lại
4. Thử **Restore Purchase** hoặc đăng xuất/đăng nhập

### **TikTok Watermark Vẫn Còn**

**Giải pháp:**
1. Clear cache TikTok
2. Đảm bảo script đã enable
3. Kiểm tra hostname `*.tiktokv.com` trong MITM

---

## 📝 Changelog

### **Version 2.0** (2025-10-28)
- ✨ Thêm TikTok Premium (no watermark, HD download)
- ✨ Thêm Instagram Premium (no ads, story download, high quality)
- ✨ Thêm Twitter/X Premium (no ads, blue features - experimental)
- ✨ Thêm Duolingo Plus support
- ✨ Thêm Calm Premium support
- ✨ Thêm Vietnam AdBlocker (ZingNews, VnExpress, Zing MP3)
- 🔧 Tối ưu hóa tất cả JavaScript scripts
- 🔧 Thêm error handling & logging chi tiết
- 🔧 Cải thiện UI/UX của module
- 📚 Thêm README.md, INSTALL.md, FEATURES.md, CHANGELOG.md
- 📚 Thêm PROJECT_INFO.md và utilities
- 🧪 Thêm test script để kiểm tra code

### **Version 1.0** (2025-07-18)
- 🎉 Release đầu tiên
- ✅ YouTube Premium
- ✅ Spotify Premium
- ✅ Locket Gold

---

## 🎨 Tính Năng Nâng Cao

### **Debug Mode**

Để bật debug logs cho việc troubleshooting:

1. Mở file script JavaScript
2. Tìm dòng `debug: false`
3. Đổi thành `debug: true`
4. Save và reload module

### **Custom Configuration**

Bạn có thể tùy chỉnh các cấu hình trong từng script:

```javascript
const CONFIG = {
  purchaseDate: "2025-01-01T00:00:00Z",
  expiryDate: "2099-12-31T23:59:59Z",
  debug: false
};
```

---

## 🤝 Đóng Góp

Contributions, issues và feature requests đều được chào đón!

1. Fork project
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

---

## ⚠️ Lưu Ý Quan Trọng

- ⚠️ Module chỉ dùng cho **mục đích học tập và nghiên cứu**
- ⚠️ Hãy ủng hộ developers bằng cách mua bản quyền chính thức
- ⚠️ Tác giả không chịu trách nhiệm về việc sử dụng sai mục đích
- ⚠️ Một số tính năng có thể ngừng hoạt động khi app cập nhật

---

## 👨‍💻 Tác Giả

**Nguyễn Ngọc Anh Tú** 🌸

- 🌐 GitHub: [@AnhTuKaZe](https://github.com/AnhTuKaZe)
- 💬 Messenger: [NguyenNgocAnhTu.VN](https://www.messenger.com/channel/NguyenNgocAnhTu.VN)
- 📧 Email: contact@anhtu.dev

### 🙏 Credits

- **YouTube Script**: [Maasea](https://github.com/Maasea/sgmodule)
- **Spotify Script**: [app2smile](https://github.com/app2smile/rules)
- **Custom Scripts**: AnhTuKaZe (Locket, TikTok, Duolingo, Calm, VN AdBlocker)

---

## 📜 License

Dự án được phân phối dưới [MIT License](LICENSE).

---

## ⭐ Support

Nếu bạn thấy project hữu ích, hãy cho mình một ⭐ trên GitHub nhé!

[![GitHub stars](https://img.shields.io/github/stars/AnhTuKaZe/NguyenNgocAnhTu.svg?style=social&label=Star)](https://github.com/AnhTuKaZe/NguyenNgocAnhTu)

---

<div align="center">

**Made with ❤️ by Nguyễn Ngọc Anh Tú 🌸**

*Cảm ơn bạn đã sử dụng module! 🙏*

</div>
