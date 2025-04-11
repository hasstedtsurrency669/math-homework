<canvas id="mathCanvas" width="500" height="300"></canvas>
<script>
  const canvas = document.getElementById('mathCanvas');
  const context = canvas.getContext('2d');

  // Define functions for math operations

  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    if (y === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return x / y;
  }

  // Update the canvas to display math operations
  function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    const canvasText = document.createElement('div');
    canvasText.classList.add('math-text');
    
    // Draw numbers in the canvas (e.g., for adding)
    for (let i = -5; i <= 5; i++) {
      canvasText.appendChild(document.createTextNode(i));
    }
    
    // Add operations to the canvas
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.moveTo(-10, -5);
    context.lineTo(0, 20);
    context.stroke();

    // Display numbers in the canvas
    const lineText = document.createElement('div');
    lineText.classList.add('math-number-text', 'line');
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      lineText.appendChild(document.createTextNode(i));
    }
    context.fillText(lineText, -12, -4);
    
    // Display math operations in the canvas
    const operationText = document.createElement('div');
    operationText.classList.add('math-operation-text', 'operation');
    add.textContent = 'Add';
    subtract.textContent = 'Subtract';
    multiply.textContent = 'Multiply';
    divide.textContent = 'Divide';
    operationText.appendChild(add);
    operationText.appendChild(subtract);
    operationText.appendChild(multiply);
    operationText.appendChild(divide);

    // Draw math operations in the canvas
    context.beginPath();
    context.fillStyle = 'blue';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillText(operationText, -5, -12);

    // Update the canvas to display the latest operations
    updateCanvas();
  }

  // Add event listeners for math operations
  const buttons = document.querySelectorAll('.math-button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      updateCanvas();
    });
  });

  // Call the function to start drawing
  updateCanvas();
</script>
