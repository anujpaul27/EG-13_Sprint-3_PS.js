var isAnagram = function(s, t) {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Create a frequency map for characters
    const charCount = {};
    
    // Count characters in the first string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Decrement counts using the second string
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Character not found or count dropped below 0
        }
        charCount[char]--;
    }
    
    return true;
};
