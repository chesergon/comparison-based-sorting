function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Original Array:", array);

const sortedArray = selectionSort(array);
console.log("Sorted Array:", sortedArray);
