import random

def get_random_js_code():
    # Generate a random number between 1 and 10
    num = random.randint(1, 10)

    # Return a JavaScript code that uses the random number
    return f"const num = {num}; console.log(num);"