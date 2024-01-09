let calculation = localStorage.getItem('calculation') || '';
        displayCalc();
        

        function updateCalculation(input) {
            calculation += input;
            displayCalc();
            saveCalculation();
        }

        function saveCalculation() {
            localStorage.setItem('calculation', calculation);
        }

        function displayCalc() {
            document.querySelector('.calc-display').innerHTML = calculation;
        }
