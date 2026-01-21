# Urban Ocean Scaters UK

Website hoàn chỉnh cho thương hiệu skateboard Urban Ocean Scaters UK với thiết kế hiện đại và đầy năng lượng.

## 🎨 Tính năng

- **5 trang chính:**
  - **Homepage**: Trang chủ với video hero, giới thiệu thương hiệu, và các sự kiện sắp tới
  - **About Us**: Giới thiệu về công ty, sứ mệnh, DNA và đội ngũ
  - **The Raptor**: Chi tiết sản phẩm skateboard với specs và collaboration products
  - **Roadshow Tour**: Thông tin chi tiết về tour 3 thành phố (London, Birmingham, Sheffield)
  - **Register**: Form đăng ký tham gia sự kiện
  - **Evening Events**: Hiển thị dữ liệu từ XML về VIP evening events

- **Responsive Design**: Hoạt động tốt trên mọi thiết bị (mobile, tablet, desktop)
- **React Router**: Điều hướng mượt mà giữa các trang
- **Tailwind CSS**: Styling hiện đại với các màu sắc nổi bật
- **XML Data Integration**: Đọc và hiển thị dữ liệu từ XML file
- **Custom Fonts**: Sử dụng Roboto Slab font từ local assets

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (v14 trở lên)
- npm hoặc yarn

### Các bước

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy development server:**
```bash
npm run dev
```

3. **Mở trình duyệt:**
Truy cập `http://localhost:5173`

4. **Build cho production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## 📁 Cấu trúc thư mục

```
urbanocean-scaters-uk/
├── public/
│   ├── assets/          # Hình ảnh, fonts, videos
│   │   ├── fonts/
│   │   ├── logo.png
│   │   ├── home_slide.mp4
│   │   └── ...
│   └── roadshow-evening-events.xml  # XML data file
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── NavbarTry.jsx
│   ├── pages/          # Các trang chính
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── RaptorPage.jsx
│   │   ├── RoadshowPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── EveningEventsPage.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json         # Vercel deployment config
└── README.md
```

## 🎨 Màu sắc chính

- **Yellow**: `#FFEB3B` - Màu chủ đạo, năng lượng
- **Cyan**: `#4DD0E1` - Đại diện cho "Urban Ocean"
- **Pink**: `#FF1493` - Nhấn mạnh CTA và highlights
- **Black**: `#1a1a1a` - Background và text

## 📄 XML Data

File `roadshow-evening-events.xml` chứa thông tin về VIP evening events:
- Event date và location
- Main entrant details (name, age, DOB, experience)
- Parent/guardian info (cho người dưới 18 tuổi)
- Contact details (phone, email, address)
- Guests information
- Skateboarding preferences

### Xem XML data:
- Raw XML: `http://localhost:5173/roadshow-evening-events.xml`
- Formatted view: `http://localhost:5173/evening-events`

## 🚀 Deploy lên Vercel

### Cách nhanh nhất:
```bash
# Cài Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Hoặc qua GitHub:
1. Push code lên GitHub
2. Import vào Vercel Dashboard
3. Deploy tự động

**Chi tiết xem file:** `DEPLOYMENT.md`

## 🖼️ Thay thế hình ảnh

Hiện tại website đang sử dụng hình ảnh placeholder. Để thay thế:

1. **Đặt hình ảnh vào `public/assets/`:**
   - `home_slide.mp4` - Video hero cho trang chủ
   - `logo.png` - Logo chính
   - `home_stake_1.jpg`, `home_stake_2.jpg`, `home_stake_3.png` - Born in Bristol section
   - `home_medium_1.jpeg`, `home_medium_2.jpeg`, `home_medium_3.jpeg` - Event cards
   - `about_stake.png` - About page hero
   - `about_stakes_men.png` - About DNA section
   - `raptop_tee.png`, `raptor_balo.png`, `raptor_bot.png` - Elite Collabs
   - `facebook.webp`, `igs.jpeg`, `tiktok.avif` - Social icons

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Các tính năng chính

### Navigation
- Fixed navbar với backdrop blur
- Mobile menu responsive
- Active state cho trang hiện tại

### Homepage
- Video hero section với CTA buttons
- Born in Bristol section với 3 hình
- Urban Ocean introduction
- Upcoming events cards
- CTA section

### About Page
- Split-screen hero layout
- Our Soul & Mission sections
- DNA section với badges
- Team section

### Raptor Page
- Hero với "The Urban Ocean" title
- Product details
- Elite Collabs section với 3 products
- Tech specs

### Roadshow Page
- Hero với 3 city images
- Event details cho từng thành phố
- FAQ section

### Register Page
- Form đăng ký đầy đủ
- Validation
- Benefits information

### Evening Events Page
- Đọc XML data tự động
- Hiển thị entries với cards
- Filter và search (có thể thêm)

## 🛠️ Công nghệ sử dụng

- **React 19** - UI framework
- **React Router DOM** - Routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **@tailwindcss/vite** - Tailwind plugin
- **XML Parser** - DOMParser API

## 📝 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.js` hoặc `src/index.css`

### Thay đổi fonts
Fonts được load từ `public/assets/fonts/`

### Thêm pages mới
1. Tạo file trong `src/pages/`
2. Thêm route trong `src/App.jsx`
3. Thêm link trong Navbar/Footer

## 🐛 Troubleshooting

### Tailwind không hoạt động:
- Kiểm tra `@tailwindcss/vite` đã cài đặt
- Xóa `node_modules/.vite` và restart

### XML không load:
- Kiểm tra file trong `public/`
- Check browser console cho errors
- Verify XML syntax

### Video không play:
- Check file path
- Verify video format (mp4)
- Check browser autoplay policies

## 📞 Liên hệ

- Email: info@scaters.uk
- Phone: +44 20 1234 5678
- Social: @scatersuk

## 🤖 Python Chatbot

Website bao gồm 2 Python chatbots để cung cấp thông tin về roadshow và skateboard:

### Chatbot Gốc (Workshop Version)
```bash
python chatbot_original.py
```
- Chatbot đơn giản với keyword matching cơ bản
- Dùng cho mục đích học tập/workshop

### Chatbot Nâng cao (Enhanced Version) - Khuyên dùng
```bash
python chatbot_enhanced.py
```
- Chatbot đầy đủ với thông tin chi tiết về:
  - 3 thành phố roadshow (London, Birmingham, Sheffield)
  - Thông số kỹ thuật The Raptor skateboard
  - VIP evening events
  - Quy trình đăng ký
  - Khuyến mãi và quà tặng

### Các lệnh chatbot:
- `cities` - Xem tất cả thành phố và ngày
- `london`, `birmingham`, `sheffield` - Chi tiết từng thành phố
- `raptor` - Thông tin skateboard
- `evening` - VIP events
- `register` - Hướng dẫn đăng ký
- `promotions` - Quà tặng và khuyến mãi
- `help` - Hiển thị tất cả lệnh
- `quit` - Thoát

### Hỏi tự nhiên:
- "When is the London event?"
- "What skateboard are you launching?"
- "How do I register?"
- "What can I win?"

**Chi tiết xem file:** `CHATBOT_INSTRUCTIONS.md`

## 📄 License

© 2026 SCATERS UK. All rights reserved.
