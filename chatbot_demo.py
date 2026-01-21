"""
DEMO SCRIPT FOR SCATERS UK CHATBOT
Demonstrates various chatbot capabilities with automated responses
"""

from chatbot_enhanced import ScatersRoadshowChatbot
import time

def demo_chatbot():
    print("\n" + "=" * 70)
    print("🎬 SCATERS UK CHATBOT DEMO")
    print("=" * 70)
    print("\nThis demo showcases the chatbot's capabilities with sample queries.\n")
    time.sleep(2)
    
    # Create chatbot instance
    bot = ScatersRoadshowChatbot()
    
    # Demo queries
    demo_queries = [
        ("cities", "Viewing all roadshow cities and dates"),
        ("london", "Getting details about London event"),
        ("raptor", "Learning about The Raptor skateboard"),
        ("promotions", "Checking exclusive gear and rewards"),
        ("evening", "VIP evening events information"),
        ("register", "How to register for events"),
    ]
    
    print("=" * 70)
    print("🛹 SCATERS UK ROADSHOW CHATBOT")
    print("=" * 70)
    print("\nStarting demo...\n")
    time.sleep(1)
    
    for query, description in demo_queries:
        print("\n" + "-" * 70)
        print(f"📝 Demo Query: {description}")
        print(f"💬 User Input: '{query}'")
        print("-" * 70)
        time.sleep(1)
        
        bot.process_input(query)
        
        print("\n⏸️  Press Enter to continue to next demo...")
        input()
    
    print("\n" + "=" * 70)
    print("✅ DEMO COMPLETE!")
    print("=" * 70)
    print("\nThe chatbot can:")
    print("  ✓ Provide detailed information about all 3 roadshow cities")
    print("  ✓ Explain The Raptor skateboard specifications")
    print("  ✓ Guide users through registration process")
    print("  ✓ Share information about VIP evening events")
    print("  ✓ List promotions and exclusive gear")
    print("  ✓ Understand natural language questions")
    print("\nTo use the chatbot interactively, run:")
    print("  python chatbot_enhanced.py")
    print("=" * 70)

if __name__ == "__main__":
    try:
        demo_chatbot()
    except KeyboardInterrupt:
        print("\n\nDemo interrupted. Goodbye! 🛹")
