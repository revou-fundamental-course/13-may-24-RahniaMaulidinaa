document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = 0.5 * base * height;
    document.getElementById('areaResult').textContent = `Luas Segitiga: ${area}`;
});

document.getElementById('perimeterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const perimeter = sideA + sideB + sideC;
    document.getElementById('perimeterResult').textContent = `Keliling Segitiga: ${perimeter}`;
});
