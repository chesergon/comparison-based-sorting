function quickSort(arr) {
    // Base case: if the array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot (e.g., the first element)
    const pivot = arr[0];
    
    // Partition the array into two sub-arrays: elements less than pivot and elements greater than pivot
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    // Recursively apply quick sort to the sub-arrays and concatenate the sorted arrays with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Original Array:", array);

const sortedArray = quickSort(array);
console.log("Sorted Array:", sortedArray);
