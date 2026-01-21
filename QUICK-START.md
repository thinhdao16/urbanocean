# 🚀 QUICK START - SCATERS UK

## ⚡ CHẠY NGAY (3 BƯỚC)

### 1️⃣ CHATBOT (30 giây)

```bash
python3 chatbot_enhanced.py
```

Gõ lệnh:
- `cities` → Xem 3 thành phố
- `london` → Chi tiết London
- `raptor` → Info skateboard
- `quit` → Thoát

### 2️⃣ WEBSITE LOCAL (1 phút)

```bash
npm install
npm run dev
```

Mở: **http://localhost:5173**

### 3️⃣ DEPLOY VERCEL (2 phút)

```bash
npm install -g vercel
vercel --prod
```

**XONG!** 🎉

---

## 📋 CHI TIẾT

### CHATBOT - Các lệnh có sẵn:

| Lệnh | Kết quả |
|------|---------|
| `cities` | Tất cả 3 thành phố |
| `london` | London Apr 4 |
| `birmingham` | Birmingham Apr 11 |
| `sheffield` | Sheffield Apr 18 |
| `raptor` | Skateboard specs |
| `evening` | VIP events |
| `register` | Hướng dẫn đăng ký |
| `promotions` | Quà tặng |
| `help` | Tất cả lệnh |
| `quit` | Thoát |

**Hỏi tự nhiên:**
- "When is the London event?"
- "What can I win?"
- "How do I register?"

### WEBSITE - Các trang:

| URL | Nội dung |
|-----|----------|
| `/` | Homepage với video hero |
| `/about` | About Us |
| `/raptor` | The Raptor skateboard |
| `/roadshow` | Tour 3 thành phố |
| `/register` | Form đăng ký |
| `/evening-events` | VIP events data |

### DEPLOY - 3 cách:

#### Cách 1: Vercel CLI ⚡ (Nhanh nhất)
```bash
vercel --prod
```

#### Cách 2: GitHub + Vercel 🔄 (Auto deploy)
```bash
git push origin main
# Vercel tự động deploy
```

#### Cách 3: Netlify 🌐
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 🎯 DEMO THỰC TẾ

### Demo Chatbot:

```
$ python3 chatbot_enhanced.py

🛹 WELCOME TO SCATERS UK ROADSHOW CHATBOT 🛹

💬 You: cities

🌆 SCATERS ROADSHOW TOUR 2026
📍 LONDON - April 4, 2026 - Southbank Centre
📍 BIRMINGHAM - April 11, 2026 - Creation Skate Park
📍 SHEFFIELD - April 18, 2026 - Devonshire Green

💬 You: raptor

🛹 THE RAPTOR - URBAN OCEAN SKATEBOARD
Material: 7-ply Canadian maple + carbon fiber
Design: Teal and sand wave graphics
Launch: Spring 2026

💬 You: quit
🛹 Thanks! See you at the roadshow!
```

### Demo Website:

```
$ npm run dev

  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Mở browser → Click qua các trang → Xem nội dung

### Demo Deploy:

```
$ vercel --prod

🔍  Inspect: https://vercel.com/...
✅  Production: https://urbanocean-scaters-uk.vercel.app
```

---

## 🆘 LỖI THƯỜNG GẶP

### "python3: command not found"
```bash
# Cài Python
sudo apt install python3  # Linux
brew install python3      # Mac
# Windows: Download từ python.org
```

### "npm: command not found"
```bash
# Cài Node.js từ https://nodejs.org
```

### Tailwind không hoạt động
```bash
rm -rf node_modules/.vite
npm run dev
```

### Video không play
- Check file: `public/assets/home_slide.mp4`
- Verify format: MP4
- Check browser console

---

## 📁 FILES QUAN TRỌNG

```
urbanocean-scaters-uk/
├── chatbot_enhanced.py          ← Chatbot chính
├── HUONG-DAN-CHAY-VA-DEPLOY.md  ← Hướng dẫn đầy đủ
├── QUICK-START.md               ← File này (quick start)
├── package.json                 ← Dependencies
├── vercel.json                  ← Deploy config
├── src/
│   ├── App.jsx                  ← Main app
│   └── pages/                   ← Các trang
└── public/
    ├── assets/                  ← Hình ảnh, fonts
    └── roadshow-evening-events.xml  ← XML data
```

---

## 🎓 TÀI LIỆU KHÁC

- **Hướng dẫn đầy đủ**: `HUONG-DAN-CHAY-VA-DEPLOY.md`
- **Chatbot guide**: `CHATBOT_INSTRUCTIONS.md`
- **Deploy guide**: `DEPLOYMENT.md`
- **Backend options**: `BACKEND-SOLUTIONS.md`
- **Google Forms**: `GOOGLE-FORMS-SETUP.md`

---

## ✅ CHECKLIST

**Trước khi deploy:**
- [ ] Test chatbot: `python3 chatbot_enhanced.py`
- [ ] Test website: `npm run dev`
- [ ] Check tất cả images load
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Verify XML data hiển thị
- [ ] Test navigation links
- [ ] Build thành công: `npm run build`

**Sau khi deploy:**
- [ ] Homepage hiển thị đúng
- [ ] Video hero play được
- [ ] Tất cả routes hoạt động
- [ ] Images load nhanh
- [ ] Forms hoạt động
- [ ] XML data accessible
- [ ] Mobile responsive ok

---

🛹 **NO BEACH? NO BOTHER - SURF INTO THE CITY!** 🌊

**Cần hỗ trợ?** Xem file `HUONG-DAN-CHAY-VA-DEPLOY.md`
