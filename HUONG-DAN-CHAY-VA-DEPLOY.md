# HƯỚNG DẪN CHẠY VÀ DEPLOY - SCATERS UK

## 🐍 PHẦN 1: CHẠY CHATBOT

### Cách 1: Chạy Chatbot Nâng Cao (Khuyên dùng)

```bash
python3 chatbot_enhanced.py
```

**Hoặc trên Windows:**
```bash
python chatbot_enhanced.py
```

### Cách 2: Chạy Chatbot Gốc (Workshop)

```bash
python3 chatbot_original.py
```

### Cách 3: Xem Demo Tự Động

```bash
python3 chatbot_demo.py
```

### Ví dụ sử dụng Chatbot:

```
💬 You: cities
→ Hiển thị tất cả 3 thành phố

💬 You: london
→ Chi tiết sự kiện London

💬 You: raptor
→ Thông tin skateboard The Raptor

💬 You: When is the London event?
→ Trả lời bằng ngôn ngữ tự nhiên

💬 You: What can I win?
→ Hiển thị quà tặng và khuyến mãi

💬 You: quit
→ Thoát chatbot
```

---

## 🌐 PHẦN 2: CHẠY WEBSITE (LOCAL)

### Bước 1: Cài đặt Dependencies

```bash
npm install
```

### Bước 2: Chạy Development Server

```bash
npm run dev
```

Website sẽ chạy tại: **http://localhost:5173**

### Bước 3: Mở trình duyệt

Truy cập các trang:
- **Trang chủ**: http://localhost:5173/
- **About**: http://localhost:5173/about
- **The Raptor**: http://localhost:5173/raptor
- **Roadshow**: http://localhost:5173/roadshow
- **Register**: http://localhost:5173/register
- **Evening Events**: http://localhost:5173/evening-events

### Xem XML Data:
- **Raw XML**: http://localhost:5173/roadshow-evening-events.xml
- **Formatted**: http://localhost:5173/evening-events

---

## 🚀 PHẦN 3: DEPLOY LÊN VERCEL

### Cách 1: Deploy qua Vercel CLI (Nhanh nhất)

#### Bước 1: Cài Vercel CLI
```bash
npm install -g vercel
```

#### Bước 2: Login vào Vercel
```bash
vercel login
```

#### Bước 3: Deploy
```bash
# Deploy lần đầu (preview)
vercel

# Deploy production
vercel --prod
```

**Xong!** Vercel sẽ cho bạn link website ngay lập tức.

### Cách 2: Deploy qua GitHub + Vercel Dashboard

#### Bước 1: Push code lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Complete SCATERS UK website with chatbot"

# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/urbanocean-scaters-uk.git

# Push lên GitHub
git push -u origin main
```

#### Bước 2: Import vào Vercel

1. Truy cập: https://vercel.com
2. Click **"New Project"**
3. Import repository từ GitHub
4. Chọn repository **urbanocean-scaters-uk**
5. Click **"Deploy"**

**Vercel tự động:**
- Detect Vite project
- Build website
- Deploy lên production
- Tạo domain miễn phí (ví dụ: urbanocean-scaters-uk.vercel.app)

#### Bước 3: Cấu hình Domain (Tùy chọn)

Trong Vercel Dashboard:
1. Vào **Settings** → **Domains**
2. Thêm custom domain của bạn
3. Cập nhật DNS records theo hướng dẫn

---

## 📦 PHẦN 4: BUILD PRODUCTION

### Build website:

```bash
npm run build
```

Files build sẽ nằm trong thư mục **`dist/`**

### Preview production build:

```bash
npm run preview
```

### Deploy thư mục dist lên server khác:

```bash
# Upload toàn bộ thư mục dist/ lên hosting
# Ví dụ với Netlify:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🔧 PHẦN 5: CẤU HÌNH QUAN TRỌNG

### File `vercel.json` (Đã có sẵn)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/roadshow-evening-events.xml",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/xml"
        }
      ]
    }
  ]
}
```

**Chức năng:**
- Routing cho React Router (SPA)
- XML file được serve đúng content-type
- Tất cả routes đều hoạt động

---

## 🎯 PHẦN 6: KIỂM TRA SAU KHI DEPLOY

### Checklist:

✅ **Homepage**: Video hero hiển thị đúng
✅ **Navigation**: Tất cả links hoạt động
✅ **Images**: Tất cả hình ảnh load được
✅ **Fonts**: Roboto Slab hiển thị đúng
✅ **XML Data**: Evening events page hiển thị data
✅ **Responsive**: Mobile/tablet/desktop đều ok
✅ **Forms**: Register form hoạt động

### Test các URL:

```
https://your-domain.vercel.app/
https://your-domain.vercel.app/about
https://your-domain.vercel.app/raptor
https://your-domain.vercel.app/roadshow
https://your-domain.vercel.app/register
https://your-domain.vercel.app/evening-events
https://your-domain.vercel.app/roadshow-evening-events.xml
```

---

## 🐛 TROUBLESHOOTING

### Lỗi: "Command not found: npm"
**Giải pháp**: Cài Node.js từ https://nodejs.org

### Lỗi: "Command not found: python3"
**Giải pháp**: 
- Linux/Mac: `sudo apt install python3` hoặc `brew install python3`
- Windows: Download từ https://python.org

### Lỗi: Tailwind không hoạt động
**Giải pháp**:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Lỗi: Video không play
**Giải pháp**: 
- Check file `public/assets/home_slide.mp4` tồn tại
- Verify video format (mp4)
- Check browser autoplay policy

### Lỗi: XML không load
**Giải pháp**:
- Verify file `public/roadshow-evening-events.xml` tồn tại
- Check XML syntax
- Xem browser console cho errors

### Lỗi: 404 trên Vercel sau khi refresh
**Giải pháp**: Đảm bảo có file `vercel.json` với rewrites config

---

## 📱 PHẦN 7: DEMO NHANH

### Demo Chatbot (30 giây):

```bash
# Terminal 1: Chạy chatbot
python3 chatbot_enhanced.py

# Thử các lệnh:
cities
london
raptor
quit
```

### Demo Website (1 phút):

```bash
# Terminal 2: Chạy website
npm run dev

# Mở browser: http://localhost:5173
# Click qua các trang: Home → About → Raptor → Roadshow → Register
```

---

## 🎬 VIDEO DEMO (Nếu cần quay)

### Script Demo:

1. **Mở Terminal** → Chạy `python3 chatbot_enhanced.py`
2. **Gõ lệnh**: `cities` → Xem 3 thành phố
3. **Gõ lệnh**: `london` → Chi tiết London
4. **Gõ lệnh**: `raptor` → Thông tin skateboard
5. **Gõ lệnh**: `quit` → Thoát

6. **Mở Terminal mới** → Chạy `npm run dev`
7. **Mở Browser** → http://localhost:5173
8. **Click Navigation**: Home → About → Raptor → Roadshow → Register
9. **Scroll xuống** → Xem các sections
10. **Click Evening Events** → Xem XML data

---

## 📊 TÓM TẮT NHANH

| Mục đích | Lệnh | Kết quả |
|----------|------|---------|
| Chạy chatbot | `python3 chatbot_enhanced.py` | Chatbot interactive |
| Chạy website local | `npm run dev` | http://localhost:5173 |
| Build production | `npm run build` | Thư mục dist/ |
| Deploy Vercel | `vercel --prod` | Live website |
| Demo tự động | `python3 chatbot_demo.py` | Auto demo chatbot |

---

## 🎓 LƯU Ý QUAN TRỌNG

### Chatbot:
- ✅ Chạy offline, không cần internet
- ✅ Không cần cài thêm package Python
- ✅ Hoạt động trên Windows/Mac/Linux
- ❌ Không lưu dữ liệu đăng ký (chỉ cung cấp thông tin)

### Website:
- ✅ Deploy miễn phí trên Vercel
- ✅ HTTPS tự động
- ✅ CDN toàn cầu
- ✅ Auto deploy khi push GitHub
- ❌ XML chỉ READ (không WRITE) - dùng Google Forms cho registrations

### Google Forms (Cho đăng ký thật):
- Xem file: `GOOGLE-FORMS-SETUP.md`
- Tạo form → Embed vào website
- Dữ liệu lưu vào Google Sheets tự động

---

## 🆘 HỖ TRỢ

**Nếu gặp vấn đề:**
1. Check file `DEPLOYMENT.md` cho chi tiết deploy
2. Check file `BACKEND-SOLUTIONS.md` cho backend options
3. Check file `GOOGLE-FORMS-SETUP.md` cho registration form
4. Check file `CHATBOT_INSTRUCTIONS.md` cho chatbot guide

**Liên hệ:**
- Email: info@scaters.uk
- GitHub Issues: Tạo issue trong repository

---

🛹 **NO BEACH? NO BOTHER - SURF INTO THE CITY!** 🌊
