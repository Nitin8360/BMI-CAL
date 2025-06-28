function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
  
    if (!weight || !heightCm || heightCm <= 0) {
      document.getElementById("result").innerText = "Please enter valid weight and height.";
      return;
    }
  
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);
    let message = "";
  
    if (bmi < 18.5) message = "Underweight";
    else if (bmi < 24.9) message = "Normal weight";
    else if (bmi < 29.9) message = "Overweight";
    else message = "Obesity";
  
    document.getElementById("result").innerText = `Your BMI is ${bmi} (${message})`;
  }
