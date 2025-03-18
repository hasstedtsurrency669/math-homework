import random

def get_random_js_code():
    # Generate a random number between 1 and 10
    num = random.randint(1, 10)

    # Generate a random operator (+, -, *, /)
    op = random.choice(['+', '-', '*', '/'])

    # Generate a random number between 1 and 20
    num2 = random.randint(1, 20)

    # Evaluate the expression using eval() function
    result = eval(f"{num} {op} {num2}")

    return f"{num} {op} {num2} = {result}"