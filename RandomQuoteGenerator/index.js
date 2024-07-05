const quotes = [
    "Life is not about getting and having, it is about giving and being.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "I attribute my success to this: I never gave or took any excuse.",
    "You miss 100% of the shots you do not take.",
    "I have missed more than 9000 shots in my career. I have lost almost 300 games. 26 times I have been trusted to take the game winning shot and missed. I have failed over and over and over again in my life. And that is why I succeed.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}