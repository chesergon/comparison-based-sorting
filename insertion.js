function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        // Store the current element to be compared
        let current = arr[i];
        
        // Compare current element with elements before it and move elements greater than current one position ahead
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place current element in its correct position in the sorted part of the array
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Original Array:", array);

const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
