# ⚡ Quick Start - Fix YouTube Nhanh

## 🚀 3 Bước Setup (2 phút)

### Bước 1: Import File
```
📁 File cần dùng: YouTube-AdBlock-Optimized.sgmodule
```

**Surge:**
1. Mở Surge → Modules
2. Nhấn "+" góc trên
3. Paste nội dung file → Save

**Shadowrocket:**
1. Đổi `.sgmodule` → `.conf`
2. Config → Import from file

### Bước 2: Cài Certificate (nếu chưa có)
```
Surge: Settings → MITM → Install Certificate → Trust
```

### Bước 3: Test
```
1. Kill YouTube app (swipe up)
2. Mở lại YouTube
3. Chơi video → ✅ Không ads
4. Swipe up → ✅ PiP works
```

## ✅ Checklist Nhanh

- [ ] File imported
- [ ] MITM certificate trusted
- [ ] YouTube app force-closed và mở lại
- [ ] Test xem 1 video
- [ ] Không có quảng cáo
- [ ] PiP hoạt động

## ❓ Troubleshooting 30 Giây

### Vẫn có ads?
```bash
1. Settings → General → About → Certificate Trust Settings
2. Bật certificate của Surge/Shadowrocket
3. Restart app
```

### Video không load?
```bash
1. Tắt module
2. Test YouTube (phải load được)
3. Bật lại module
4. Force close YouTube và test
```

### PiP không work?
```bash
Settings → General → Picture in Picture → ON
```

## 🎯 Kết Quả Mong Đợi

✅ **YouTube app:**
- Video load < 3 giây
- Zero ads (0% ads)
- PiP available
- Background play works

✅ **Các app khác cũng unlock:**
- Locket Gold, Spotify, SoundCloud
- CamScanner, BeautyPlus, Snow
- PicsArt, VSCO, Lightroom
- KineMaster, Alight Motion
- +30 apps khác

## 🔥 So Với File Cũ

| Feature | File Cũ | File Mới |
|---------|---------|----------|
| YouTube load | ❌ | ✅ |
| Ads blocked | ✅ | ✅ |
| PiP | ❌ | ✅ |
| Speed | Chậm | Nhanh |

## 💡 Tips

1. **Nếu ads vẫn xuất hiện:**
   - Clear YouTube cache
   - Reinstall YouTube app

2. **Tối ưu tốc độ:**
   - DNS: 8.8.8.8 hoặc 1.1.1.1
   - Bật HTTP/3 trong Surge

3. **Chặn Shorts (nếu muốn):**
   - Mở file, tìm `"blockShorts":"false"`
   - Đổi thành `"blockShorts":"true"`

## 📱 Yêu Cầu

- iOS 14.0+
- Surge 4+ / Shadowrocket 2.2+
- YouTube app (phiên bản mới nhất)

## ⚠️ Lưu Ý

- ❌ KHÔNG chặn QUIC nữa (đã fix trong file mới)
- ✅ Script xử lý ads thông minh hơn
- ✅ PiP tự động enable

---

**Done!** Giờ enjoy YouTube không quảng cáo + PiP 🎉

**Questions?** → Check `HUONG-DAN-SU-DUNG.md` để biết chi tiết
