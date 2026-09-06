var canConstruct = function(ransomNote, magazine) {
    const charCount = {};
    
    // Count each character in the magazine
    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Subtract counts using characters from the ransom note
    for (let char of ransomNote) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    
    return true;
};
console.log(canConstruct("aa", "aab"));
