# 🚀 BẮT ĐẦU NGAY - SCATERS UK

## ⚡ 3 LỆNH ĐỂ CHẠY TẤT CẢ

### 1. Chatbot
```bash
python3 chatbot_enhanced.py
```

### 2. Website
```bash
npm install && npm run dev
```

### 3. Deploy
```bash
vercel --prod
```

---

## 🎯 DEMO NHANH

### Chạy script demo tự động:
```bash
bash show-demo.sh
```

**Menu sẽ hiện:**
1. Demo Chatbot Interactive
2. Demo Chatbot Auto (tất cả lệnh)
3. Chạy Website Local
4. Build Production
5. Hướng dẫn Deploy
6. Xem tài liệu
7. Thoát

---

## 📖 TÀI LIỆU

| File | Mô tả |
|------|-------|
| **QUICK-START.md** | Quick start (đọc đầu tiên) |
| **HUONG-DAN-CHAY-VA-DEPLOY.md** | Hướng dẫn đầy đủ |
| **CHATBOT_INSTRUCTIONS.md** | Chatbot user guide |
| **DEPLOYMENT.md** | Deploy guide chi tiết |
| **BACKEND-SOLUTIONS.md** | Backend options |
| **GOOGLE-FORMS-SETUP.md** | Google Forms setup |

---

## 🤖 CHATBOT - Lệnh cơ bản

```bash
# Chạy chatbot
python3 chatbot_enhanced.py

# Trong chatbot, gõ:
cities      # Xem 3 thành phố
london      # Chi tiết London
birmingham  # Chi tiết Birmingham
sheffield   # Chi tiết Sheffield
raptor      # Info skateboard
evening     # VIP events
register    # Hướng dẫn đăng ký
promotions  # Quà tặng
help        # Tất cả lệnh
quit        # Thoát
```

**Hỏi tự nhiên:**
- "When is the London event?"
- "What skateboard are you launching?"
- "How do I register?"
- "What can I win?"

---

## 🌐 WEBSITE - Chạy local

```bash
# Cài dependencies (lần đầu)
npm install

# Chạy dev server
npm run dev

# Mở browser
http://localhost:5173
```

**Các trang:**
- `/` - Homepage
- `/about` - About Us
- `/raptor` - The Raptor
- `/roadshow` - Tour
- `/register` - Register
- `/evening-events` - VIP Events

---

## ☁️ DEPLOY - Lên Vercel

### Cách 1: CLI (2 phút)
```bash
# Cài Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Cách 2: GitHub (Auto)
```bash
# Push lên GitHub
git add .
git commit -m "Complete website"
git push origin main

# Vào Vercel Dashboard
# Import từ GitHub
# Click Deploy
```

---

## 📦 FILES QUAN TRỌNG

```
📁 urbanocean-scaters-uk/
│
├── 🤖 CHATBOT
│   ├── chatbot_original.py          # Workshop version
│   ├── chatbot_enhanced.py          # Full version ⭐
│   └── chatbot_demo.py              # Auto demo
│
├── 📚 TÀI LIỆU
│   ├── BAT-DAU-NGAY.md              # File này ⭐
│   ├── QUICK-START.md               # Quick start
│   ├── HUONG-DAN-CHAY-VA-DEPLOY.md  # Hướng dẫn đầy đủ
│   ├── CHATBOT_INSTRUCTIONS.md      # Chatbot guide
│   ├── DEPLOYMENT.md                # Deploy guide
│   └── README.md                    # Project overview
│
├── 🛠️ SCRIPTS
│   ├── show-demo.sh                 # Demo menu ⭐
│   └── demo-chatbot-nhanh.sh        # Chatbot demo
│
├── ⚙️ CONFIG
│   ├── package.json                 # Dependencies
│   ├── vite.config.js               # Vite config
│   ├── tailwind.config.js           # Tailwind config
│   └── vercel.json                  # Deploy config
│
└── 💻 SOURCE CODE
    ├── src/
    │   ├── App.jsx                  # Main app
    │   ├── pages/                   # Các trang
    │   └── components/              # Components
    └── public/
        ├── assets/                  # Images, fonts
        └── roadshow-evening-events.xml
```

---

## 🎬 DEMO THỰC TẾ

### Demo 1: Chatbot
```
$ python3 chatbot_enhanced.py

🛹 WELCOME TO SCATERS UK ROADSHOW CHATBOT 🛹

💬 You: cities

🌆 SCATERS ROADSHOW TOUR 2026
📍 LONDON - April 4, 2026
📍 BIRMINGHAM - April 11, 2026
📍 SHEFFIELD - April 18, 2026

💬 You: quit
```

### Demo 2: Website
```
$ npm run dev

  VITE ready in 500 ms
  ➜  Local: http://localhost:5173/

[Browser opens]
✓ Homepage with video
✓ Navigation works
✓ All pages load
✓ Responsive design
```

### Demo 3: Deploy
```
$ vercel --prod

🔍  Inspect: https://vercel.com/...
✅  Production: https://your-site.vercel.app

[Website is live!]
```

---

## ✅ CHECKLIST

### Trước khi bắt đầu:
- [ ] Đã cài Python 3.6+
- [ ] Đã cài Node.js 14+
- [ ] Đã cài npm
- [ ] Có tài khoản GitHub (optional)
- [ ] Có tài khoản Vercel (optional)

### Test chatbot:
- [ ] Chạy được: `python3 chatbot_enhanced.py`
- [ ] Lệnh `cities` hoạt động
- [ ] Lệnh `raptor` hoạt động
- [ ] Natural questions hoạt động
- [ ] Quit thoát được

### Test website:
- [ ] `npm install` thành công
- [ ] `npm run dev` chạy được
- [ ] Mở được http://localhost:5173
- [ ] Tất cả trang load được
- [ ] Images hiển thị
- [ ] Video play được
- [ ] Navigation hoạt động

### Deploy:
- [ ] `npm run build` thành công
- [ ] Không có errors
- [ ] Deploy lên Vercel ok
- [ ] Website live hoạt động
- [ ] Tất cả routes work
- [ ] Mobile responsive ok

---

## 🆘 CẦN TRỢ GIÚP?

### Lỗi Python:
```bash
# Cài Python
sudo apt install python3  # Linux
brew install python3      # Mac
# Windows: python.org
```

### Lỗi Node/npm:
```bash
# Cài Node.js
# Download: https://nodejs.org
```

### Lỗi Tailwind:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Xem logs:
```bash
# Browser console: F12
# Terminal: Xem output
```

---

## 📞 LIÊN HỆ & HỖ TRỢ

**Tài liệu chi tiết:**
- `QUICK-START.md` - Bắt đầu nhanh
- `HUONG-DAN-CHAY-VA-DEPLOY.md` - Hướng dẫn đầy đủ
- `DEPLOYMENT.md` - Deploy guide

**Demo scripts:**
- `bash show-demo.sh` - Menu demo
- `bash demo-chatbot-nhanh.sh` - Chatbot demo

**Email:** info@scaters.uk

---

## 🎯 BƯỚC TIẾP THEO

1. ✅ **Đọc file này** (xong rồi!)
2. 🤖 **Test chatbot**: `python3 chatbot_enhanced.py`
3. 🌐 **Test website**: `npm run dev`
4. 🚀 **Deploy**: `vercel --prod`
5. 🎉 **Hoàn thành!**

---

🛹 **NO BEACH? NO BOTHER - SURF INTO THE CITY!** 🌊

**Chúc bạn thành công!** 🎉
