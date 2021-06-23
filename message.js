const starters = ["You will", "You did", "You should" ];
const activities = ["play", "train", "work", "cook", "study"];
const endings = ["good. Well done!", "hard. Keep it going!", "enough. Have a break."];

const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
};

const mixedMessage = (arr1, arr2, arr3) => {
    const startIndex = generateRandomNumber(arr1.length);
    const midIndex = generateRandomNumber(arr2.length);
    const endIndex = generateRandomNumber(arr3.length);

    return `${arr1[startIndex]} ${arr2[midIndex]} ${arr3[endIndex]}`;
};

console.log(mixedMessage(starters, activities, endings));

