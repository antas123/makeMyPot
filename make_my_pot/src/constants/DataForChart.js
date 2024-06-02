export let moneyData = [
    {
        id: 1,
        year: 2024,
    },
    {
        id: 2,
        year: 2025,
    },
    {
        id: 3,
        year: 2026,
    },
    {
        id: 4,
        year: 2027,
    },
    {
        id: 5,
        year: 2028,
    },
    {
        id: 6,
        year: 2029,
    },
    {
        id: 7,
        year: 2030,
    },
    {
        id: 8,
        year: 2031,
    },
    {
        id: 9,
        year: 2031,
    },
    {
        id: 10,
        year: 2032,
    },
];

// Function to generate a random money value between min and max
function getRandomMoney(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// Generate a list of random money values
let randomMoneyValues = moneyData.map(() => getRandomMoney(1, 10));

// Sort the random money values in ascending order
randomMoneyValues.sort((a, b) => a - b);

// Assign the sorted random money values to each entry in moneyData
moneyData = moneyData.map((item, index) => ({
    ...item,
    money: randomMoneyValues[index],
}));

console.log(moneyData);
