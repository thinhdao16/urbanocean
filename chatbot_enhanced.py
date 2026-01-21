"""
ENHANCED PYTHON CHATBOT FOR SCATERS UK ROADSHOW
Comprehensive chatbot with detailed knowledge about:
- Roadshow tour (3 cities: London, Birmingham, Sheffield)
- The Raptor skateboard specifications
- Evening VIP events
- Registration process
- Event activities and promotions
"""

import re
from datetime import datetime

class ScatersRoadshowChatbot:
    def __init__(self):
        self.conversation_history = []
        self.user_name = None
        
        # Knowledge base
        self.roadshow_data = {
            'london': {
                'date': 'April 4, 2026',
                'location': 'Southbank Centre',
                'activity': 'THE CONCRETE WAVE LINE',
                'description': '3-move line. Style over technicality.',
                'promotion': 'Top 50 early registrants receive: Scaters x Southbank Tee and Sunscreen Wax',
                'challenge': 'Urban undercroft skating with focus on smooth, stylish lines'
            },
            'birmingham': {
                'date': 'April 11, 2026',
                'location': 'Creation Skate Park',
                'activity': 'BOWL JAM',
                'description': 'Line over tricks. Smooth flow, clean speed, no foot down.',
                'promotion': 'Top 50 early registrants receive: Bucket Hat and Sunscreen Wax',
                'challenge': 'Modern skatepark bowl session focusing on continuous flow'
            },
            'sheffield': {
                'date': 'April 18, 2026',
                'location': 'Devonshire Green',
                'activity': 'STEEL CITY SURF CRUISE',
                'description': 'Long-distance carving. Smooth S-curves. Ride the concrete wave.',
                'promotion': 'Top 50 early registrants receive: Steel Bottle and Sunscreen Wax',
                'challenge': 'Extended route through Sheffield streets with focus on carving and endurance'
            }
        }
        
        self.raptor_specs = {
            'name': 'The Raptor - Urban Ocean',
            'material': '7-ply Canadian maple reinforced with carbon fiber',
            'design': 'Teal and sand wave graphics with RAPTOR x SCATERS graffiti logos',
            'trucks': 'Long-distance carving truck technology for fluid S-curves',
            'grip': 'High-grip tape with exclusive "No Beach? No Bother." message',
            'launch': 'Spring 2026',
            'tagline': 'Born for the streets, inspired by the sea'
        }
        
        self.evening_events = {
            'description': 'VIP evening events with meal, free drinks, talk from Skateboard England representative, and meet England team member',
            'eligibility': 'Guests chosen from email campaign sign-ups or website draw entries',
            'requirements': 'Main entrant must be 18+ or accompanied by parent/guardian. Can bring up to 2 guests (18+)',
            'registration': 'Sign up through website or email campaign'
        }
    
    def greet(self):
        print("=" * 70)
        print("🛹 WELCOME TO SCATERS UK ROADSHOW CHATBOT 🛹")
        print("=" * 70)
        print("\nHello! I'm your guide to the SCATERS Roadshow Tour 2026!")
        print("I can help you with:")
        print("  • Roadshow tour dates and locations")
        print("  • The Raptor skateboard details")
        print("  • Evening VIP events information")
        print("  • Registration and promotions")
        print("  • Event activities and challenges")
        print("\nType 'help' for commands or 'quit' to exit.")
        print("-" * 70)
    
    def show_help(self):
        help_text = """
AVAILABLE COMMANDS:
  • 'cities' or 'tour' - View all roadshow cities and dates
  • 'london', 'birmingham', 'sheffield' - Get details about specific city
  • 'raptor' or 'skateboard' - Learn about The Raptor skateboard
  • 'evening' or 'vip' - Information about VIP evening events
  • 'register' or 'signup' - How to register for events
  • 'promotions' or 'gifts' - What you can receive
  • 'help' - Show this help message
  • 'quit' or 'exit' - End conversation
  
You can also ask natural questions like:
  • "When is the London event?"
  • "What skateboard are you launching?"
  • "How do I register?"
  • "What can I win?"
        """
        print(help_text)
    
    def show_all_cities(self):
        print("\n🌆 SCATERS ROADSHOW TOUR 2026 - SURF INTO THE CITY")
        print("=" * 70)
        for city, data in self.roadshow_data.items():
            print(f"\n📍 {city.upper()}")
            print(f"   Date: {data['date']}")
            print(f"   Location: {data['location']}")
            print(f"   Activity: {data['activity']}")
            print(f"   {data['description']}")
        print("\n" + "=" * 70)
    
    def show_city_details(self, city):
        if city in self.roadshow_data:
            data = self.roadshow_data[city]
            print(f"\n📍 {city.upper()} ROADSHOW EVENT")
            print("=" * 70)
            print(f"📅 Date: {data['date']}")
            print(f"📌 Location: {data['location']}")
            print(f"🎯 Activity: {data['activity']}")
            print(f"📝 Description: {data['description']}")
            print(f"🎁 Promotion: {data['promotion']}")
            print(f"💪 Challenge: {data['challenge']}")
            print("\n✅ All participants receive Sunscreen Wax!")
            print("🌐 Register online at the SCATERS UK website")
            print("=" * 70)
        else:
            print(f"\nSorry, I don't have information about {city}.")
            print("Available cities: London, Birmingham, Sheffield")
    
    def show_raptor_info(self):
        print("\n🛹 THE RAPTOR - URBAN OCEAN SKATEBOARD")
        print("=" * 70)
        print(f"Name: {self.raptor_specs['name']}")
        print(f"Tagline: {self.raptor_specs['tagline']}")
        print(f"\n🔧 SPECIFICATIONS:")
        print(f"  • Material: {self.raptor_specs['material']}")
        print(f"  • Design: {self.raptor_specs['design']}")
        print(f"  • Trucks: {self.raptor_specs['trucks']}")
        print(f"  • Grip Tape: {self.raptor_specs['grip']}")
        print(f"\n🚀 Launch: {self.raptor_specs['launch']}")
        print("\n💡 The Raptor is designed for long-distance carving and urban surfing.")
        print("   Perfect for riding the concrete wave with smooth S-curves!")
        print("=" * 70)
    
    def show_evening_events(self):
        print("\n🌟 VIP EVENING EVENTS")
        print("=" * 70)
        print(f"Description: {self.evening_events['description']}")
        print(f"\n👥 Eligibility: {self.evening_events['eligibility']}")
        print(f"\n📋 Requirements: {self.evening_events['requirements']}")
        print(f"\n📝 How to Enter: {self.evening_events['registration']}")
        print("\n💎 These exclusive events include:")
        print("   • Meal with free drinks at local hotel/restaurant")
        print("   • Talk from Skateboard England representative")
        print("   • Meet and greet with England skateboard team member")
        print("=" * 70)
    
    def show_registration_info(self):
        print("\n📝 HOW TO REGISTER")
        print("=" * 70)
        print("1. Visit the SCATERS UK website")
        print("2. Navigate to the Register page")
        print("3. Fill out the registration form")
        print("4. Choose your preferred city and date")
        print("\n🎁 BENEFITS OF EARLY REGISTRATION:")
        print("   • Top 50 registrants at each city get exclusive collaboration gear")
        print("   • All participants receive Sunscreen Wax")
        print("   • Chance to enter VIP evening event draw")
        print("\n💰 Registration is FREE!")
        print("⚠️  Participants under 18 need parental/guardian consent")
        print("=" * 70)
    
    def show_promotions(self):
        print("\n🎁 PROMOTIONS & EXCLUSIVE GEAR")
        print("=" * 70)
        print("Top 50 early registrants at each city receive:")
        print("\n📍 LONDON (April 4):")
        print("   • Scaters x Southbank Tee")
        print("   • Sunscreen Wax")
        print("\n📍 BIRMINGHAM (April 11):")
        print("   • Bucket Hat")
        print("   • Sunscreen Wax")
        print("\n📍 SHEFFIELD (April 18):")
        print("   • Steel Bottle")
        print("   • Sunscreen Wax")
        print("\n✨ ALL PARTICIPANTS receive Sunscreen Wax!")
        print("=" * 70)
    
    def process_input(self, user_input):
        # Store in conversation history
        self.conversation_history.append(('user', user_input))
        
        # Convert to lowercase for matching
        text = user_input.lower().strip()
        
        # Command matching
        if text in ['quit', 'exit', 'bye']:
            return 'quit'
        
        elif text == 'help':
            self.show_help()
        
        elif text in ['cities', 'tour', 'all cities', 'show cities']:
            self.show_all_cities()
        
        elif 'london' in text:
            self.show_city_details('london')
        
        elif 'birmingham' in text:
            self.show_city_details('birmingham')
        
        elif 'sheffield' in text:
            self.show_city_details('sheffield')
        
        elif text in ['raptor', 'skateboard', 'board', 'the raptor']:
            self.show_raptor_info()
        
        elif text in ['evening', 'vip', 'evening events', 'vip events']:
            self.show_evening_events()
        
        elif text in ['register', 'signup', 'sign up', 'registration', 'how to register']:
            self.show_registration_info()
        
        elif text in ['promotions', 'promotion', 'gifts', 'prizes', 'rewards']:
            self.show_promotions()
        
        # Natural language understanding
        elif 'when' in text and any(city in text for city in ['london', 'birmingham', 'sheffield']):
            for city in ['london', 'birmingham', 'sheffield']:
                if city in text:
                    print(f"\nThe {city.title()} event is on {self.roadshow_data[city]['date']}")
                    print(f"at {self.roadshow_data[city]['location']}")
                    break
        
        elif 'where' in text and any(city in text for city in ['london', 'birmingham', 'sheffield']):
            for city in ['london', 'birmingham', 'sheffield']:
                if city in text:
                    print(f"\nThe {city.title()} event is at {self.roadshow_data[city]['location']}")
                    break
        
        elif 'date' in text or 'when' in text:
            self.show_all_cities()
        
        elif 'what' in text and ('win' in text or 'get' in text or 'receive' in text):
            self.show_promotions()
        
        elif 'how' in text and ('register' in text or 'sign up' in text):
            self.show_registration_info()
        
        elif any(word in text for word in ['hello', 'hi', 'hey', 'greetings']):
            print("\nHello! How can I help you with the SCATERS Roadshow today?")
            print("Ask me about cities, dates, The Raptor skateboard, or registration!")
        
        elif 'thank' in text:
            print("\nYou're welcome! Enjoy the roadshow! 🛹")
        
        else:
            print("\nI'm not sure I understand. Try asking about:")
            print("  • Specific cities (London, Birmingham, Sheffield)")
            print("  • The Raptor skateboard")
            print("  • Registration process")
            print("  • VIP evening events")
            print("\nOr type 'help' for all available commands.")
        
        return 'continue'
    
    def run(self):
        self.greet()
        
        while True:
            try:
                user_input = input("\n💬 You: ").strip()
                
                if not user_input:
                    continue
                
                result = self.process_input(user_input)
                
                if result == 'quit':
                    print("\n" + "=" * 70)
                    print("🛹 Thanks for chatting! See you at the roadshow!")
                    print("NO BEACH? NO BOTHER - SURF INTO THE CITY! 🌊")
                    print("=" * 70)
                    break
                    
            except KeyboardInterrupt:
                print("\n\nGoodbye! 🛹")
                break
            except Exception as e:
                print(f"\nOops! Something went wrong: {e}")
                print("Let's try again!")

if __name__ == "__main__":
    chatbot = ScatersRoadshowChatbot()
    chatbot.run()
