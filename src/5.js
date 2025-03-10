
import random

def get_random_number(min_val, max_val):
    return random.randint(min_val, max_val)

def add_numbers(num1, num2):
    return num1 + num2

def subtract_numbers(num1, num2):
    return num1 - num2

def multiply_numbers(num1, num2):
    return num1 * num2

def divide_numbers(num1, num2):
    if num2 == 0:
        return "Error: cannot divide by zero"
    return num1 / num2

if __name__ == "__main__":
    print("Welcome to the math homework helper!")
    min_val = int(input("Enter a minimum value: "))
    max_val = int(input("Enter a maximum value: "))
    num1 = get_random_number(min_val, max_val)
    num2 = get_random_number(min_val, max_val)
    operation = input("Enter an operation (+, -, *, /): ")
    if operation == "+":
        print(add_numbers(num1, num2))
    elif operation == "-":
        print(subtract_numbers(num1, num2))
    elif operation == "*":
        print(multiply_numbers(num1, num2))
    elif operation == "/":
        print(divide_numbers(num1, num2))
    else:
        print("Invalid operation")