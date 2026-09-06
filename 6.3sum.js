var threeSum = function(nums) {
    const results = [];
    
    // 1. Sort the array to easily handle duplicates and use two pointers
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate values for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers forward after finding a match
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Sum is too small, move left pointer right to increase sum
            } else {
                right--; // Sum is too large, move right pointer left to decrease sum
            }
        }
    }
    
    return results;
};
