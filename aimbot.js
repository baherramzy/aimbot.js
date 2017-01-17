function sigmoid(x, dx = false) {
	// The sigmoid activation function is used to map any value to a value between 0 and 1
	// https://en.wikipedia.org/wiki/Sigmoid_function

	// One of its beneficial properties is its ability to produce its own derivative 
	// Proof: http://math.stackexchange.com/a/1225116
	
	return dx ? sigmoid(x) * (1 - sigmoid(x)) : 1/(1+Math.pow(Math.E, -x));
}

function train(input, target, iterations) {
	var synapse = [[math.random(0, 1), math.random(0, 1)], [math.random(0, 1), math.random(0, 1)]];

	for (var i = iterations - 1; i >= 0; --i) {
		// Propagate input signal forward
		var output = math.multiply(input, synapse).map(function(value, index, matrix) {
			return sigmoid(value);
		});

		// Calculate error
		var error = math.subtract(target, output);

		// Apply required adjustment
		var temp = output.map(function(value, index, matrix) {
			return sigmoid(value, true);
		});

		var delta = math.dotMultiply(error, temp);

		// Adjust weights
		synapse = math.add(synapse, math.multiply(math.transpose(input), delta));
	}

	return output;
}

var canvasWidth = canvasHeight = 300;
var trainingIterations = 20000;

var input = [math.randomInt(0, canvasWidth), math.randomInt(0, canvasHeight)];
var expectedOutput = input;

// Normalize to 0..1
// z = ( x - min(x) )/( max(x) - min(x) )
var input_scaled = math.divide(input, canvasWidth);
var expectedOutput_scaled = input_scaled;

// Train the network
var actualOutput = train(input_scaled, expectedOutput_scaled, trainingIterations);

// Denormalize by solving the normalization equation above for x
// x = z (max - min) + min
var outputVector = math.multiply(actualOutput, canvasWidth);

// Canvas logic
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#000";

// Draw circle representing character
context.beginPath();
context.arc(input[0], input[1], 5, 0, 2*math.pi);
context.stroke();

// Draw X representing the co-ordinates produced by the ANN
context.fillRect(outputVector[0], outputVector[1], 3, 3);

// Calculate error
var error = math.round( math.sqrt(math.pow(outputVector[0] - input[0], 2) + math.pow(outputVector[1] - input[1], 2)), 2 );
context.fillText('Error in px: ' + error, 10, 290);