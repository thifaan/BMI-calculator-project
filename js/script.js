document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
  const weight = parseFloat(document.getElementById('weight').value);

  const bmi = weight / (height * height);
  let category;

  // Determine BMI category
  if (bmi < 18.5) {
      category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
  } else {
      category = "Obesity";
  }

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <h2>Your BMI: ${bmi.toFixed(2)}</h2>
      <p>Category: ${category}</p>
      ${getHealthTips(category)}
  `;
});

// Function to provide health tips based on BMI category
function getHealthTips(category) {
  switch(category) {
      case "Underweight":
          return "<p>It's important to gain weight safely. Consider consulting with a nutritionist for a balanced diet that helps you achieve a healthy weight.</p>";
      case "Normal weight":
          return "<p>Great job maintaining a healthy weight! Keep up a balanced diet and regular exercise to stay healthy.</p>";
      case "Overweight":
          return "<p>Consider incorporating more physical activity into your routine and maintaining a balanced diet. Consulting a healthcare provider can provide personalized guidance.</p>";
      case "Obesity":
          return "<p>It's advisable to consult with a healthcare professional for a personalized weight management plan that includes diet and exercise.</p>";
      default:
          return "";
  }
}
