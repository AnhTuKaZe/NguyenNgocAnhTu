# 🔧 LOCKET GOLD PERSISTENCE FIX - HƯỚNG DẪN

## ⚠️ VẤN ĐỀ: Gold Mất Khi Tắt Shadowrocket

---

## 🔍 TẠI SAO GOLD BIẾN MẤT?

### Giải Thích Kỹ Thuật:

```
╔═══════════════════════════════════════════════════╗
║    HOW MITM SCRIPTS WORK                          ║
╠═══════════════════════════════════════════════════╣
║                                                   ║
║  Shadowrocket ON:                                 ║
║  ┌──────┐        ┌─────────────┐      ┌────────┐ ║
║  │Locket│──────▶│ Shadowrocket│─────▶│RevenueCat║
║  │ App  │◀──────│   (MITM)    │◀─────│ Server  ║
║  └──────┘        └─────────────┘      └────────┘ ║
║                         │                         ║
║                   ✅ Script modifies response     ║
║                   ✅ Shows Gold status            ║
║                                                   ║
║  Shadowrocket OFF:                                ║
║  ┌──────┐                            ┌────────┐  ║
║  │Locket│──────────────────────────▶│RevenueCat║
║  │ App  │◀──────────────────────────│ Server  ║
║  └──────┘                            └────────┘  ║
║                                                   ║
║                   ❌ Direct connection            ║
║                   ❌ Real response = FREE         ║
║                   ❌ Gold disappears              ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

### Khi Nào Gold Biến Mất:

```
❌ App restart
❌ Network change (WiFi ↔ 4G)
❌ Opening Settings
❌ Pull to refresh
❌ After some time (cache expires)
❌ Shadowrocket OFF/Disconnected
```

---

## ✅ GIẢI PHÁP - 3 BƯỚC

### **Bước 1: Import Module Mới (PERSISTENCE FIX)**

```
File: Shadowrocket-Premium-PERSISTENCE-FIX.sgmodule

Improvements:
✅ 3 Locket scripts (primary + backup)
✅ Better caching headers
✅ 3 Universal RevenueCat scripts
✅ Longer timeouts (60s)
✅ ETag & Last-Modified deleted
✅ Cache-Control: max-age=31536000
```

### **Bước 2: Enable ON-DEMAND (QUAN TRỌNG!)**

```
Shadowrocket → Settings → On Demand:

1. Toggle ON "On Demand"
2. Add rule:
   → All WiFi: Connect
   → All Cellular: Connect
3. Save

Result:
✅ Shadowrocket auto-connects when needed
✅ Always intercepts Locket traffic
✅ Gold persists much longer!
```

#### Chi Tiết Enable On-Demand:

```
Mở Shadowrocket:

1. Settings (⚙️)
2. On Demand
3. Enable "On Demand" toggle
4. Domain Triggered On Demand:
   → Add: api.revenuecat.com
   → Action: Connect
5. WiFi SSID Triggered On Demand:
   → All Networks: Connect
6. Save

Bây giờ:
→ Khi Locket mở → Auto connect
→ Khi check subscription → MITM active
→ Gold không mất!
```

### **Bước 3: Optimize Settings**

```
Shadowrocket → Settings:

1. DNS Settings:
   ✅ Use custom DNS
   → 8.8.8.8, 1.1.1.1

2. Advanced:
   ✅ Include All Networks
   ✅ Reconnect on Wake
   ✅ Capture All Traffic

3. Connection:
   ✅ TCP Fast Open: ON
   ✅ UDP Relay: ON

Save & Reconnect
```

---

## 🎯 KẾT QUẢ SAU KHI FIX

### Before (Old Module):

```
❌ Shadowrocket OFF = Gold mất ngay
❌ App restart = Gold mất
❌ Network change = Gold mất
❌ Phải reconnect thủ công
```

### After (PERSISTENCE FIX):

```
✅ On-Demand auto-connects
✅ Gold lasts MUCH longer
✅ Better caching = Fewer checks
✅ Multiple scripts = More reliable
✅ Can turn off manually but auto-reconnects
```

### Realistic Expectations:

```
⚠️  Gold vẫn sẽ mất NẾU:
   - Manually disable Shadowrocket
   - Force kill Shadowrocket process
   - Airplane mode (no internet)
   - Locket force updates subscription
   
✅ Nhưng với On-Demand:
   - Auto reconnects khi mở Locket
   - Gold restored automatically
   - Much better user experience!
```

---

## 💡 TIPS THÊM

### 1. Battery Optimization:

```
On-Demand không tốn pin nhiều nếu:
✅ Only trigger on specific domains
✅ Disconnect when not needed
✅ Use "Disconnect on Sleep" (optional)

Settings to save battery:
→ On Demand → Only for api.revenuecat.com
→ Auto disconnect after 5 minutes idle
```

### 2. Maximize Persistence:

```
✅ Keep Shadowrocket in background
✅ Don't force kill Shadowrocket
✅ Disable "Low Power Mode" when using apps
✅ Stable network (don't switch WiFi/4G too much)
```

### 3. If Gold Still Disappears:

```
Quick Fix:
1. Open Shadowrocket
2. Connect (or auto-connects via On-Demand)
3. Force close Locket app
4. Reopen Locket
5. Gold should be back ✅

Permanent Fix:
→ Keep On-Demand enabled
→ Shadowrocket will auto-fix it
```

---

## 🆕 WHAT'S NEW IN PERSISTENCE FIX

### Added:

```
1. ✅ Backup Locket Script
   → VthongVthongVthong's version
   → Fallback if primary fails
   
2. ✅ ddgksf2013 RevenueCat General
   → Very popular & reliable
   → Updated 2025-10-11
   
3. ✅ Yu9191 RevenueCat General
   → Latest update 2025-10-19!
   → Fresh from repo
   
4. ✅ Better Caching Headers:
   → Cache-Control: max-age=31536000
   → Deleted ETag
   → Deleted Last-Modified
   → Forces app to cache longer
   
5. ✅ Timeout increased to 60s
   → More reliable connections
   → Less timeouts
```

### Total Scripts:

```
Old version: 34 scripts
New PERSISTENCE FIX: 37 scripts

Added:
+ 1 Backup Locket
+ 2 Additional RevenueCat General
= 3 new scripts
```

---

## 📊 COMPARISON

### Script Versions:

| Feature | Old Module | PERSISTENCE FIX |
|---------|-----------|-----------------|
| Locket Scripts | 2 | 3 (+backup) ✅ |
| RevenueCat General | 2 | 3 (+ddgksf) ✅ |
| Caching Headers | Basic | Aggressive ✅ |
| Timeout | 30s | 60s ✅ |
| Total Scripts | 34 | 37 ✅ |
| On-Demand Guide | ❌ | ✅ Yes |

---

## 🎯 STEP-BY-STEP SETUP

### Complete Installation:

```
1️⃣ BACKUP OLD CONFIG (Optional)
   → Shadowrocket → Config → Export

2️⃣ REMOVE OLD MODULE
   → Config → Module → Delete old

3️⃣ IMPORT NEW MODULE
   → Config → Module → Add
   → Paste: Shadowrocket-Premium-PERSISTENCE-FIX.sgmodule
   → Save

4️⃣ ENABLE ON-DEMAND
   → Settings → On Demand → Enable
   → Add rule: api.revenuecat.com → Connect
   → WiFi: All → Connect
   → Cellular: All → Connect
   → Save

5️⃣ OPTIMIZE SETTINGS
   → Settings → Advanced
   → Include All Networks: ON
   → Reconnect on Wake: ON
   → Save

6️⃣ TEST
   → Connect Shadowrocket
   → Open Locket → Check Gold ✅
   → Disconnect Shadowrocket manually
   → Open Locket → Should auto-connect!
   → Gold should still show ✅

7️⃣ DONE! 🎉
```

---

## ⚠️ IMPORTANT NOTES

### This Fix Improves But CANNOT:

```
❌ Make Gold 100% permanent
   → Still needs MITM active
   → On-Demand helps a LOT

❌ Work when Shadowrocket disabled
   → Must be allowed to run
   → Don't force quit

❌ Fix if Locket updates checks
   → App may add new checks
   → Module needs updates

✅ But MUCH better than before!
```

### Realistic Results:

```
Before:
→ Gold lasts: Minutes
→ Manual reconnect needed
→ Annoying experience

After (with On-Demand):
→ Gold lasts: Hours/Days
→ Auto-reconnects
→ Much better experience! ✅
```

---

## 🙏 IF STILL HAVING ISSUES

### Troubleshooting:

```
1. Gold mất ngay:
   → Check On-Demand enabled?
   → Check MITM hostname includes api.revenuecat.com?
   → Check certificate trusted?

2. On-Demand không auto-connect:
   → Settings → On Demand → Check rules
   → Make sure "Connect" selected
   → Try add "All Networks"

3. Gold intermittent:
   → Network stability issue
   → Try stable WiFi
   → Avoid switching networks

4. Vẫn không được:
   → Force close Locket
   → Restart Shadowrocket
   → Reconnect
   → Reopen Locket
```

---

## 🎉 SUMMARY

### What This Fix Does:

```
✅ Adds backup Locket script
✅ Adds 2 more RevenueCat general scripts
✅ Aggressive caching headers
✅ Longer timeouts
✅ On-Demand instructions
✅ Better persistence overall
```

### What You Should Do:

```
1. Import new PERSISTENCE FIX module
2. Enable On-Demand (IMPORTANT!)
3. Optimize Shadowrocket settings
4. Test Locket Gold
5. Enjoy longer-lasting Gold! 🎁
```

---

**🎯 New File:** `Shadowrocket-Premium-PERSISTENCE-FIX.sgmodule`  
**✅ Scripts:** 37 (100% verified)  
**🔧 Improvement:** Much better persistence  
**📱 On-Demand:** Recommended!  

---

**🎉 GOLD WILL LAST MUCH LONGER NOW! 🎉**

**Remember:** On-Demand is KEY! Enable it! 🔑
