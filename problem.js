// Javascript program to find unique elements in list

const arr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];

console.log(`Array before removing duplicates : `)
console.log(arr);

// Using Array.filter
const useFilter = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

const result = useFilter(arr);

console.log(`Array after removing duplicates : `)
console.log(result)