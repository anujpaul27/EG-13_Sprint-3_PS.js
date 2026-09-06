function hasDuplicatesFast(arr) {
    const seen = new Set();
    return arr.some(item => {
        if (seen.has(item)) return false; // Found a duplicate, stop looping
        seen.add(item);
        return true;
    });
}

console.log(hasDuplicatesFast([1,2,3,4,5,6]));