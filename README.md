# Urban Ocean Scaters UK

Website hoàn chỉnh cho thương hiệu skateboard Urban Ocean Scaters UK với thiết kế hiện đại và đầy năng lượng.

## 🎨 Tính năng

- **5 trang chính:**
  - **Homepage**: Trang chủ với hero section, giới thiệu thương hiệu, và các sự kiện sắp tới
  - **About Us**: Giới thiệu về công ty, sứ mệnh, DNA và đội ngũ
  - **The Raptor**: Chi tiết sản phẩm skateboard Raptor với thông số kỹ thuật
  - **Roadshow Tour**: Thông tin chi tiết về tour roadshow 3 thành phố
  - **Register**: Form đăng ký tham gia sự kiện

- **Responsive Design**: Hoạt động tốt trên mọi thiết bị (mobile, tablet, desktop)
- **React Router**: Điều hướng mượt mà giữa các trang
- **Tailwind CSS**: Styling hiện đại với các màu sắc nổi bật
- **Interactive UI**: Hiệu ứng hover, transitions, và animations

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
Truy cập `http://localhost:5173` (hoặc port được hiển thị trong terminal)

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
│   └── assets/          # Hình ảnh (thay thế bằng hình của bạn)
│       ├── home_page.png
│       ├── about_us.png
│       ├── the-raptor.png
│       ├── roadshow.png
│       └── join-now.png
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Các trang chính
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── RaptorPage.jsx
│   │   ├── RoadshowPage.jsx
│   │   └── RegisterPage.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Màu sắc chính

- **Yellow**: `#FFEB3B` - Màu chủ đạo, năng lượng
- **Cyan**: `#4DD0E1` - Đại diện cho "Urban Ocean"
- **Pink**: `#FF1493` - Nhấn mạnh CTA và highlights
- **Black**: `#1a1a1a` - Background và text

## 🖼️ Thay thế hình ảnh

Hiện tại website đang sử dụng hình ảnh placeholder. Để thay thế bằng hình ảnh thực:

1. **Đặt hình ảnh vào thư mục `public/assets/`:**
   - `home_page.png` - Hero background cho trang chủ
   - `about_us.png` - Hình về công ty
   - `the-raptor.png` - Hình sản phẩm Raptor
   - `roadshow.png` - Background cho roadshow tour
   - `join-now.png` - Background cho form đăng ký

2. **Hoặc tải từ website Canva:**
   - Truy cập: https://dsadasdad.my.canva.site/urbanocean-scaters-uk/
   - Tải các hình ảnh từ website
   - Đặt vào thư mục `public/assets/`

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
- Hero section với CTA
- Giới thiệu thương hiệu
- Preview sản phẩm
- Danh sách sự kiện

### About Page
- Câu chuyện thương hiệu
- Sứ mệnh và tầm nhìn
- DNA của công ty
- Đội ngũ riders

### Raptor Page
- Chi tiết sản phẩm
- Thông số kỹ thuật
- Collaboration products
- CTA đăng ký

### Roadshow Page
- Timeline tour
- Chi tiết từng sự kiện
- Exclusive gear cho mỗi địa điểm
- FAQ section

### Register Page
- Form đăng ký đầy đủ
- Validation
- Thông tin benefits
- Thông tin liên hệ

## 🛠️ Công nghệ sử dụng

- **React 19** - UI framework
- **React Router DOM** - Routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **PostCSS** - CSS processing

## 📝 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:

```javascript
colors: {
  "skater-yellow": "#FFEB3B",
  "urban-pink": "#FF69B4",
  // Thêm màu của bạn
}
```

### Thay đổi fonts
Chỉnh sửa file `tailwind.config.js`:

```javascript
fontFamily: {
  urban: ["Inter", "sans-serif"],
  display: ["Impact", "sans-serif"],
}
```

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop thư mục dist vào Netlify
```

## 📞 Liên hệ

- Email: info@scaters.uk
- Phone: +44 20 1234 5678
- Social: @scatersuk

## 📄 License

© 2026 SCATERS UK. All rights reserved.
# urbanocean
