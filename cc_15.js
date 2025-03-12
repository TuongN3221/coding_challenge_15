// Task 1
const riskDashboard = document.getElementById('riskDashboard');
console.log("Risk Dashboard Loaded")

// Task 2 - Adding Risk Items Dynamically
// Function to add a new risk item
function addRiskItem(riskName, riskLevel, department) {
    const riskContainer = document.getElementById("riskDashboard")
    // Create risk card
    const card = document.createElement("div");
    card.className = 'riskCard';

    //Add risk details
    card.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}<p>
        <p>Department: ${department}</p>
    `;
    //append to risk card container
    riskContainer.appendChild(card)
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
// Input new risk in html form
const riskForm = document.getElementById('riskForm');
riskForm.addEventListener('submit', function(event){
    event.preventDefault();

    const riskName = document.getElementById('risk').value;
    const riskLevel = document.getElementById('riskLevel').value
    const riskDepartment = document.getElementById('riskDepartment').value

    addRiskItem(riskName, riskLevel, riskDepartment)
    riskForm.reset()
});