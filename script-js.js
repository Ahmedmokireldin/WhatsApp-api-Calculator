const pricingData = {
    // ... (include all the pricing data here)
};

// Add Rest of Africa, Asia Pacific, Central & Eastern Europe, Latin America, Middle East, and Western Europe countries
// ... (include all the country additions here)

// Populate country dropdown
const countrySelect = document.getElementById('country');
Object.keys(pricingData).sort().forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

function updatePrice() {
    const country = document.getElementById('country').value;
    const messageType = document.getElementById('messageType').value;
    const pricePerMessage = pricingData[country][messageType];
    document.getElementById('pricePerMessage').textContent = `$${pricePerMessage.toFixed(2)}`;
    calculatePrice();
}

function calculatePrice() {
    const country = document.getElementById('country').value;
    const messageType = document.getElementById('messageType').value;
    const messageCount = parseInt(document.getElementById('messageCount').value);

    if (pricingData[country] && pricingData[country][messageType]) {
        const pricePerMessage = pricingData[country][messageType];
        const totalCost = pricePerMessage * messageCount;

        document.getElementById('pricingResults').innerHTML = `
            <h3>${translations[currentLang].pricingResults}</h3>
            <p>${translations[currentLang].country}: ${country}</p>
            <p>${translations[currentLang].messageType}: ${messageType}</p>
            <p>${translations[currentLang].numberOfMessages}: ${messageCount}</p>
            <p>${translations[currentLang].pricePerMessage}: $${pricePerMessage.toFixed(2)}</p>
            <p>${translations[currentLang].totalCost}: $${totalCost.toFixed(2)}</p>
        `;
    }
}

// Add language translation functionality and other necessary JavaScript code here
