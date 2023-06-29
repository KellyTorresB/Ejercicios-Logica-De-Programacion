let temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");//Se solicita la temperatura en grados celsius

while (isNaN(temperaturaCelsius) || temperaturaCelsius === '') {//validar que sea numero
    alert("Por favor, ingrese un valor numérico para la temperatura en grados Celsius:");
    temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");
}

const tempFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;//Convertir celsius a Fahrenheit
const tempKelvin = parseFloat(temperaturaCelsius) + 273.15;//Convertir celsius a Kelvin

alert("Grados Fahrenheit: " + tempFahrenheit + "\nGrados Kelvin: " + tempKelvin);//Imprimir resultados

