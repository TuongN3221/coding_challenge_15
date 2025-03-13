// Task 1
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded")

// Task 2 - Adding Risk Items Dynamically
// Function to add a new risk item
function addRiskItem(riskName, riskLevel, department) {
    const riskContainer = document.getElementById("riskDashboard")
    // Create risk card
    const card = document.createElement("div");
    card.className = "riskCard";

    //Add risk details
    card.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}<p>
        <p>Department: ${department}</p>
    `;
    //append to risk card container
    riskContainer.appendChild(card)

    // Task 3 
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"
    resolveButton.classList.add("resolve-button")
    resolveButton.addEventListener("click", function(){
        riskContainer.removeChild(card);
    })
    card.appendChild(resolveButton) 
    
    // Task 4
    if (riskLevel.toLowerCase() === "low"){
        card.classList.add("low")
    }
    if (riskLevel.toLowerCase() === "medium"){
        card.classList.add("medium")
    }
    if (riskLevel.toLowerCase() === "high"){
        card.classList.add("high")
    }
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
// Input new risk in html form
const riskForm = document.getElementById("riskForm");
riskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const riskName = document.getElementById("risk").value;
    const riskLevel = document.getElementById("riskLevel").value
    const riskDepartment = document.getElementById("riskDepartment").value

    addRiskItem(riskName, riskLevel, riskDepartment)
    riskForm.reset()
});

// Task 3 test case
addRiskItem("Market Fluctuations", "High", "Finance");
// Task 4 Test Cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//Task 4
function highlightLow() {
    const markLow = document.querySelectorAll(".low")
    Array.from(markLow).forEach(card => {
        card.style.backgroundColor = "#66ff66";// Green for low
        card.style.color = "white";
    });
}
function highlightMedium() {
    const markMedium = document.querySelectorAll(".medium")
    Array.from(markMedium).forEach(card => {
        card.style.backgroundColor = "#eed202";// Yellow for medium
        card.style.color = "white";
    });
}
function highlightHigh() {
    const markHigh = document.querySelectorAll(".high")
    Array.from(markHigh).forEach(card => {
        card.style.backgroundColor = "#ff6666";// Red for high
        card.style.color = "white";
    });
}
highlightLow();
highlightMedium();
highlightHigh();

// Task 5
const increaseRiskButton = document.getElementById("increaseRisk"); 
increaseRiskButton.addEventListener("click", function() {
    const riskCards = document.querySelectorAll(".riskCard");
    riskCards.forEach(card => {
        const riskLevelElement = card.querySelector("p"); 
        const currentRiskLevel = riskLevelElement.textContent.split(": ")[1].trim().toLowerCase(); // Extract the risk level text

        let newRiskLevel;
        if (currentRiskLevel === "low") {
            newRiskLevel = 'Medium';
            card.classList.remove('low');
            card.classList.add('medium');
            card.style.backgroundColor = "#eed202"; // Yellow for medium
        } else if (currentRiskLevel === "medium") {
            newRiskLevel = 'High';
            card.classList.remove('medium');
            card.classList.add('high');
            card.style.backgroundColor = "#ff6666"; // Red for high
        } else if (currentRiskLevel === "high") {
            newRiskLevel = 'High'; // No change if already high
        }

        // Update the risk level text
        riskLevelElement.textContent = `Risk Level: ${newRiskLevel}`;
    });
});