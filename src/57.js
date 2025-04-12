<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Math Homework</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .math-homework {
            margin-bottom: 20px;
        }
        .answer {
            font-size: 24px;
            color: #808080;
        }
    </style>
</head>
<body>
<div class="math-homework">
    <h1>JavaScript Math Homework</h1>

    <!-- Add JavaScript to solve math problems here -->

    <div class="answer" id="result"></div>
</div>

<script>
    // This is a placeholder for the actual code that solves math problems
    // Replace this with your own solution code here

    function calculate() {
        const input = document.getElementById('input').value;
        const resultDiv = document.getElementById('result');
        if (isNaN(input)) {
            resultDiv.innerText = 'Invalid input';
            return;
        }

        const expression = input.split(' ').map(Number).reduce((acc, val) => acc + val, 0);
        const answerDiv = document.createElement('div');
        answerDiv.textContent = `The answer is: ${expression}`;
        resultDiv.appendChild(answerDiv);

        // You can add more logic here to handle calculations and display the answer
    }

    calculate();
</script>
</body>
</html>
