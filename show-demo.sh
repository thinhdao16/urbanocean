#!/bin/bash

clear
cat << 'BANNER'
╔══════════════════════════════════════════════════════════════════════╗
║                  SCATERS UK - DEMO HOÀN CHỈNH                        ║
║              Chatbot + Website + Deploy Instructions                 ║
╚══════════════════════════════════════════════════════════════════════╝
BANNER

echo ""
echo "🎯 Chọn demo bạn muốn xem:"
echo ""
echo "1. 🤖 Demo Chatbot (Interactive)"
echo "2. 🎬 Demo Chatbot (Auto - tất cả lệnh)"
echo "3. 🌐 Chạy Website (Local)"
echo "4. 📦 Build Production"
echo "5. 🚀 Hướng dẫn Deploy Vercel"
echo "6. 📚 Xem tất cả tài liệu"
echo "7. ❌ Thoát"
echo ""
read -p "Nhập số (1-7): " choice

case $choice in
    1)
        echo ""
        echo "🤖 Khởi động Chatbot Interactive..."
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "💡 Thử các lệnh: cities, london, raptor, promotions, help, quit"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        python3 chatbot_enhanced.py
        ;;
    2)
        echo ""
        echo "🎬 Demo tự động tất cả lệnh chatbot..."
        echo ""
        
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📍 LỆNH: cities"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo -e "cities\nquit" | python3 chatbot_enhanced.py 2>/dev/null | grep -A 20 "SCATERS ROADSHOW"
        echo ""
        read -p "⏸️  Nhấn Enter để tiếp tục..."
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📍 LỆNH: london"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo -e "london\nquit" | python3 chatbot_enhanced.py 2>/dev/null | grep -A 12 "LONDON ROADSHOW"
        echo ""
        read -p "⏸️  Nhấn Enter để tiếp tục..."
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📍 LỆNH: raptor"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo -e "raptor\nquit" | python3 chatbot_enhanced.py 2>/dev/null | grep -A 15 "THE RAPTOR"
        echo ""
        read -p "⏸️  Nhấn Enter để tiếp tục..."
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📍 LỆNH: promotions"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo -e "promotions\nquit" | python3 chatbot_enhanced.py 2>/dev/null | grep -A 15 "PROMOTIONS"
        echo ""
        
        echo "✅ Demo hoàn tất!"
        ;;
    3)
        echo ""
        echo "�� Khởi động Website Local..."
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📝 Đang cài đặt dependencies (nếu cần)..."
        npm install
        echo ""
        echo "🚀 Khởi động dev server..."
        echo "💡 Mở browser: http://localhost:5173"
        echo "💡 Nhấn Ctrl+C để dừng"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        npm run dev
        ;;
    4)
        echo ""
        echo "📦 Build Production..."
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        npm run build
        echo ""
        echo "✅ Build hoàn tất! Files trong thư mục: dist/"
        echo ""
        echo "📊 Kích thước build:"
        du -sh dist/
        echo ""
        echo "💡 Preview build:"
        echo "   npm run preview"
        ;;
    5)
        echo ""
        cat << 'DEPLOY'
🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CÁCH 1: Vercel CLI (Nhanh nhất - 2 phút)

Bước 1: Cài Vercel CLI
   npm install -g vercel

Bước 2: Login
   vercel login

Bước 3: Deploy
   vercel --prod

✅ XONG! Vercel sẽ cho bạn link ngay lập tức.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CÁCH 2: GitHub + Vercel Dashboard (Auto deploy)

Bước 1: Push lên GitHub
   git add .
   git commit -m "Complete website"
   git push origin main

Bước 2: Vào Vercel Dashboard
   1. Truy cập: https://vercel.com
   2. Click "New Project"
   3. Import từ GitHub
   4. Chọn repository
   5. Click "Deploy"

✅ Vercel tự động build và deploy!
✅ Mỗi lần push GitHub → Auto deploy!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎁 VERCEL MIỄN PHÍ:
   ✓ HTTPS tự động
   ✓ CDN toàn cầu
   ✓ Domain miễn phí (.vercel.app)
   ✓ Auto deploy từ GitHub
   ✓ Preview deployments

📚 Chi tiết: Xem file DEPLOYMENT.md

DEPLOY
        ;;
    6)
        echo ""
        echo "📚 TÀI LIỆU CÓ SẴN:"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        ls -1 *.md | while read file; do
            size=$(du -h "$file" | cut -f1)
            echo "📄 $file ($size)"
        done
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "📖 Đọc tài liệu:"
        echo "   cat QUICK-START.md              # Quick start"
        echo "   cat HUONG-DAN-CHAY-VA-DEPLOY.md # Hướng dẫn đầy đủ"
        echo "   cat CHATBOT_INSTRUCTIONS.md     # Chatbot guide"
        echo "   cat DEPLOYMENT.md               # Deploy guide"
        ;;
    7)
        echo ""
        echo "👋 Tạm biệt!"
        exit 0
        ;;
    *)
        echo ""
        echo "❌ Lựa chọn không hợp lệ!"
        ;;
esac

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🛹 NO BEACH? NO BOTHER - SURF INTO THE CITY! 🌊"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
