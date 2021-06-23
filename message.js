const starters = ["You will", "You did", "You should" ];
const activities = ["play", "train", "work", "cook", "study"];
const endings = ["good. Well done!", "hard. Keep it going!", "enough. Have a break."];

const mixedMessage = (arr1, arr2, arr3) => {
    const startIndex = Math.floor(Math.random() * arr1.length);
    const midIndex = Math.floor(Math.random() * arr2.length);
    const endIndex = Math.floor(Math.random() * arr3.length);

    return `${arr1[startIndex]} ${arr2[midIndex]} ${arr3[endIndex]}`;
}

console.log(mixedMessage(starters, activities, endings));

