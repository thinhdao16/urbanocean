# Hướng dẫn Deploy lên Vercel

## Cách 1: Deploy qua Vercel CLI (Nhanh nhất)

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Login vào Vercel
```bash
vercel login
```

### Bước 3: Deploy
```bash
# Deploy lần đầu
vercel

# Hoặc deploy production
vercel --prod
```

## Cách 2: Deploy qua Vercel Dashboard (Dễ nhất)

### Bước 1: Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Bước 2: Import vào Vercel
1. Truy cập https://vercel.com
2. Click "Add New" → "Project"
3. Import repository từ GitHub
4. Vercel sẽ tự động detect Vite framework
5. Click "Deploy"

## Cách 3: Deploy trực tiếp từ folder

### Bước 1: Build project
```bash
npm run build
```

### Bước 2: Deploy folder dist
```bash
vercel --prod
```

## Kiểm tra XML sau khi deploy

Sau khi deploy thành công, XML file sẽ có thể truy cập tại:
```
https://your-project.vercel.app/roadshow-evening-events.xml
```

Và trang hiển thị XML tại:
```
https://your-project.vercel.app/evening-events
```

## Lưu ý quan trọng

### ✅ XML file sẽ được deploy vì:
- Nằm trong thư mục `public/`
- Vite tự động copy files từ `public/` vào `dist/` khi build
- Vercel serve tất cả files trong `dist/`

### ✅ File `vercel.json` đã được cấu hình:
- Set correct Content-Type cho XML
- Enable caching
- Routing cho SPA (Single Page Application)

### ✅ Các file sẽ được deploy:
```
dist/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   ├── fonts/
│   ├── logo.png
│   └── ... (tất cả files từ public/)
└── roadshow-evening-events.xml  ← XML file của bạn
```

## Troubleshooting

### Nếu XML không load được:
1. Kiểm tra file có trong `public/` không
2. Build lại: `npm run build`
3. Kiểm tra file có trong `dist/` sau khi build
4. Redeploy: `vercel --prod`

### Nếu gặp CORS error:
- Vercel tự động handle CORS cho static files
- Nếu vẫn lỗi, thêm vào `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

## Environment Variables (nếu cần)

Nếu cần thêm environment variables:
1. Vào Vercel Dashboard
2. Settings → Environment Variables
3. Thêm variables
4. Redeploy

## Custom Domain (tùy chọn)

1. Vào Vercel Dashboard
2. Settings → Domains
3. Add domain của bạn
4. Follow hướng dẫn config DNS

## Monitoring

Sau khi deploy, bạn có thể:
- Xem logs tại Vercel Dashboard
- Monitor performance
- Xem analytics
- Set up alerts

## Commands hữu ích

```bash
# Xem list deployments
vercel ls

# Xem logs
vercel logs

# Remove deployment
vercel rm [deployment-url]

# Xem thông tin project
vercel inspect
```

## Kết quả

Sau khi deploy thành công:
- ✅ Website hoạt động tại: `https://your-project.vercel.app`
- ✅ XML có thể truy cập: `https://your-project.vercel.app/roadshow-evening-events.xml`
- ✅ Trang Evening Events: `https://your-project.vercel.app/evening-events`
- ✅ Tất cả assets (images, fonts) hoạt động
- ✅ Routing hoạt động với React Router

## Support

Nếu gặp vấn đề:
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: support@vercel.com
