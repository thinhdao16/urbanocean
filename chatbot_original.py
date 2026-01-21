"""
ORIGINAL PYTHON CHATBOT (Workshop Version)
Simple chatbot with basic keyword matching
"""

def chatbot():
    print("=" * 50)
    print("SCATERS UK CHATBOT - Original Version")
    print("=" * 50)
    print("Hello! I'm a simple chatbot. Type 'quit' to exit.")
    print()
    
    while True:
        user_input = input("You: ").lower().strip()
        
        if user_input == 'quit':
            print("Chatbot: Goodbye! Thanks for chatting.")
            break
        
        # Basic keyword matching
        if 'hello' in user_input or 'hi' in user_input:
            print("Chatbot: Hello! How can I help you?")
        
        elif 'name' in user_input:
            print("Chatbot: I'm a SCATERS UK chatbot.")
        
        elif 'skateboard' in user_input:
            print("Chatbot: We sell skateboards!")
        
        elif 'help' in user_input:
            print("Chatbot: I can answer basic questions. Try asking about skateboards.")
        
        else:
            print("Chatbot: I don't understand. Can you rephrase?")

if __name__ == "__main__":
    chatbot()
