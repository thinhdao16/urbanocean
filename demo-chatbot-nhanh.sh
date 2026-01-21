#!/bin/bash

# Script demo chatbot nhanh cho SCATERS UK
# Chạy: bash demo-chatbot-nhanh.sh

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║              DEMO CHATBOT SCATERS UK - TỰ ĐỘNG                      ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎬 Bắt đầu demo chatbot với các lệnh tự động..."
echo ""
sleep 2

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 1: Xem tất cả thành phố roadshow"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "cities\nquit" | python3 chatbot_enhanced.py | tail -20
echo ""
echo "⏸️  Nhấn Enter để tiếp tục..."
read

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 2: Chi tiết sự kiện London"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "london\nquit" | python3 chatbot_enhanced.py | tail -20
echo ""
echo "⏸️  Nhấn Enter để tiếp tục..."
read

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 3: Thông tin skateboard The Raptor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "raptor\nquit" | python3 chatbot_enhanced.py | tail -25
echo ""
echo "⏸️  Nhấn Enter để tiếp tục..."
read

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 4: Quà tặng và khuyến mãi"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "promotions\nquit" | python3 chatbot_enhanced.py | tail -20
echo ""
echo "⏸️  Nhấn Enter để tiếp tục..."
read

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 5: Hỏi bằng ngôn ngữ tự nhiên"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "When is the London event?\nquit" | python3 chatbot_enhanced.py | tail -10
echo ""
echo "⏸️  Nhấn Enter để tiếp tục..."
read

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 DEMO 6: Hướng dẫn đăng ký"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sleep 1
echo -e "register\nquit" | python3 chatbot_enhanced.py | tail -20
echo ""

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║                        ✅ DEMO HOÀN TẤT!                             ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎯 Chatbot có thể:"
echo "   ✓ Cung cấp thông tin chi tiết về 3 thành phố roadshow"
echo "   ✓ Giải thích thông số kỹ thuật skateboard The Raptor"
echo "   ✓ Hướng dẫn quy trình đăng ký"
echo "   ✓ Chia sẻ thông tin về VIP evening events"
echo "   ✓ Liệt kê khuyến mãi và quà tặng độc quyền"
echo "   ✓ Hiểu câu hỏi bằng ngôn ngữ tự nhiên"
echo ""
echo "🚀 Để sử dụng chatbot interactive:"
echo "   python3 chatbot_enhanced.py"
echo ""
echo "🌐 Để chạy website:"
echo "   npm run dev"
echo ""
echo "☁️  Để deploy lên Vercel:"
echo "   vercel --prod"
echo ""
echo "🛹 NO BEACH? NO BOTHER - SURF INTO THE CITY! 🌊"
