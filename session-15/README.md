## JS Calculator

1. Get input pressed
2. Store inputs in a queue; validating the number or operator.
3. When operator is pressed, concat previous number sequence to a number e.g. [1, 3, 5, *,] becomes [124, *] This becomes the 'a' part of the operation.
4. Repeat step 3 a second time to get the 'b' part of the operation, they can then be passed to a multiply(a, b) function.
5. Optionally store the operations in a queue, or sperate queues for BODMAS (brackets, orders, division, addition, subtraction) to be processed when equals button is pressed.
6. Display output
