const characters = ['🧙', '⚔️', '🏹', '🛡️', '🔮', '⚡'];
let gems = 100;
let collection = [];

function pullGacha() {
    if (gems >= 10) {
        gems -= 10;
        const char = characters[Math.floor(Math.random() * characters.length)];
        collection.push(char);
        document.getElementById('result').innerHTML = `<h2>You got: ${char}</h2>`;
        updateDisplay();
    } else {
        alert('Not enough gems!');
    }
}

function updateDisplay() {
    document.getElementById('gems').textContent = gems;
    const counts = {};
    collection.forEach(c => counts[c] = (counts[c] || 0) + 1);
    
    document.getElementById('collection').innerHTML = '<h3>Collection:</h3>' + 
        Object.entries(counts).map(([char, count]) => `<span>${char} x${count}</span>`).join('');
}

updateDisplay();