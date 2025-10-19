# 🎯 Hướng Dẫn Sử Dụng - YouTube AdBlock Optimized

## ✅ Các Vấn Đề Đã Fix

### 🔴 Vấn đề ban đầu:
- YouTube không load được video
- Nguyên nhân: Quy tắc chặn QUIC quá mạnh
```
AND,((DOMAIN-SUFFIX,googlevideo.com), (PROTOCOL,UDP)),REJECT
AND,((DOMAIN,youtubei.googleapis.com), (PROTOCOL,UDP)),REJECT
```

### ✅ Giải pháp đã áp dụng:

1. **Xóa quy tắc chặn QUIC mạnh** - Cho phép video load bình thường
2. **Giữ nguyên chặn quảng cáo qua:**
   - ✅ URL Rewrite (chặn domain quảng cáo)
   - ✅ Scripts (xử lý response từ YouTube API)
   - ✅ Map Local (chặn ad playback initialization)

3. **Tính năng PiP (Picture-in-Picture):**
   - ✅ Được kích hoạt qua YouTube response script
   - ✅ Chặn quảng cáo nhưng vẫn giữ PiP và Background Play

## 🎬 Tính Năng YouTube

### ✅ Hoạt động tốt:
- ✅ Chặn quảng cáo video
- ✅ Chặn quảng cáo banner
- ✅ PiP (Picture-in-Picture)
- ✅ Background Play (phát nền)
- ✅ Load video nhanh
- ✅ Xem Shorts
- ✅ Search/Browse bình thường

### 📝 Script YouTube đang dùng:
```javascript
// youtube.request - Xử lý request
// youtube.response - Xử lý response, kích hoạt PiP
Script: https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.response.js
```

## 📱 Cách Sử Dụng

### Cho Surge:
1. Mở Surge → Modules
2. Nhấn "+" → Install from URL
3. Dán nội dung file `YouTube-AdBlock-Optimized.sgmodule`
4. Hoặc import trực tiếp file

### Cho Shadowrocket:
1. Đổi tên file: `.sgmodule` → `.conf`
2. Mở Shadowrocket → Config
3. Import file `.conf`
4. Bật module

### Cho Quantumult X:
1. Cần convert một số cú pháp (nếu cần)
2. Hoặc dùng file gốc với một số chỉnh sửa nhỏ

## 🔧 Tùy Chỉnh YouTube Script

Trong phần Script, bạn có thể thay đổi các tham số:

```javascript
argument="{"lyricLang":"","captionLang":"","blockUpload":"true","blockImmersive":"true","blockShorts":"false","debug":"false"}"
```

### Tham số:
- **lyricLang**: Ngôn ngữ phụ đề (để trống = auto)
- **captionLang**: Ngôn ngữ caption (để trống = auto)
- **blockUpload**: `true` = ẩn nút upload
- **blockImmersive**: `true` = ẩn chế độ immersive
- **blockShorts**: `false` = cho phép Shorts (đổi `true` để chặn)
- **debug**: `false` = tắt debug mode

## 🎁 Các Tính Năng Premium Khác

File cũng unlock các app premium:
- 🔓 Locket Gold
- 🎵 Spotify Plus
- 🎧 SoundCloud Go+
- 📞 Truecaller Premium
- 📸 CamScanner, BeautyPlus, Snow, Meitu
- 🎨 PicsArt, VSCO, Lightroom
- 🎬 Alight Motion, KineMaster, VivaCut
- 📚 Photomath, Busuu
- 🧘 Calm
- 🎭 Reface, Mojo
- 📦 Sub-Store
- ✨ và nhiều app khác...

## ⚙️ Kiểm Tra Hoạt Động

### Test YouTube:
1. Mở YouTube app
2. Xem một video → Không có quảng cáo
3. Thử PiP → Swipe up để test
4. Thử background play → Lock màn hình, nhạc vẫn chạy

### Nếu vẫn có vấn đề:
1. **Xóa cache YouTube:**
   - Settings → General → iPhone Storage → YouTube → Delete App
   - Cài lại YouTube

2. **Kiểm tra MITM:**
   - Surge: Settings → MITM → Generate New CA Certificate
   - Trust certificate trong Settings → General → About → Certificate Trust Settings

3. **Kiểm tra script hoạt động:**
   - Surge: Home → Recent Requests
   - Tìm `youtubei.googleapis.com` → Check script đã chạy chưa

4. **Reboot app:**
   - Kill app YouTube hoàn toàn
   - Mở lại

## 🔄 So Sánh Với File Cũ

| Tính năng | File Cũ | File Mới (Optimized) |
|-----------|---------|----------------------|
| YouTube load video | ❌ Không load | ✅ Load bình thường |
| Chặn quảng cáo | ✅ Có | ✅ Có |
| PiP | ❓ Không test được | ✅ Hoạt động |
| Background Play | ❓ Không test được | ✅ Hoạt động |
| QUIC blocking | ❌ Chặn toàn bộ | ✅ Không chặn (dùng script) |
| Premium unlocks | ✅ Có | ✅ Có |

## 💡 Lưu Ý Quan Trọng

1. **Không nên chặn QUIC toàn bộ** vì:
   - YouTube dùng QUIC để load video nhanh hơn
   - Chặn QUIC → video không load hoặc load chậm
   - Script xử lý quảng cáo tốt hơn

2. **PiP hoạt động nhờ:**
   - YouTube response script sửa đổi response từ API
   - Không cần chặn QUIC
   - Hoạt động tốt trên iOS 14+

3. **Nếu muốn chặn Shorts:**
   - Đổi `"blockShorts":"false"` → `"blockShorts":"true"`
   - Trong phần YouTube script argument

## 🆘 Troubleshooting

### YouTube vẫn có quảng cáo:
```
- Kiểm tra MITM certificate đã trust chưa
- Xóa cache YouTube và thử lại
- Kiểm tra hostname trong MITM có youtubei.googleapis.com
```

### Video không load:
```
- Tắt VPN/Proxy rồi thử lại
- Check DNS settings
- Thử đổi DNS sang 8.8.8.8 hoặc 1.1.1.1
```

### PiP không hoạt động:
```
- iOS Settings → General → Picture in Picture → Bật
- YouTube Premium features phải được unlock bởi script
- Restart YouTube app
```

## 📞 Hỗ Trợ

Nếu cần hỗ trợ thêm:
- GitHub: https://github.com/AnhTuKaZe/NguyenNgocAnhTu
- Báo lỗi qua Issues

---

**Tác giả:** Nguyễn Ngọc Anh Tú 🌸🌼  
**Version:** 2.0 - Optimized for YouTube Playback  
**Ngày cập nhật:** 2025-10-19
