// Example JavaScript code to solve math homework problems
// Replace "math-did-you-know" with the actual problem you need to solve

function calculateArea(base, height) {
    // Calculate area using base and height
    const area = base * height;
    return area;
}

function calculateVolume(cubeSide, cubeHeight) {
    // Calculate volume of a cuboid using length, width, and height
    const volume = cubeSide * cubeHeight * 3; // formula: side * height * 3
    return volume;
}

// Example usage:
const baseValue = 4.0;
const heightValue = 6.0;

console.log("Area:", calculateArea(baseValue, heightValue));
console.log("Volume:", calculateVolume(baseValue, heightValue));

function areaAndVolumeCalculator() {
    // Calculate and display the area of a rectangle and its volume
    const baseArea = calculateArea(4.0, 6.0);
    console.log(`The area of the rectangle is: ${baseArea}`);
    const cubeSide = 2.0;
    const heightCube = 3.0;
    const volumeCube = calculateVolume(cubeSide, heightCube);
    console.log(`The volume of the cuboid with side and height ${cubeSide} * ${heightCube} is: ${volumeCube}`);
}
