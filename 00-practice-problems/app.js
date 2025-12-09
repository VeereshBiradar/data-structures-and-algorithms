//1.Max number from an array 

function maxNumber(arr) {
    let max_num = -Infinity;   // can put arr[0] as intial max_num

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max_num){
            max_num = arr[i];
        }
    }
    return max_num;
}

const result = maxNumber([-8, -54, -32, -70, -2190, -894]);
console.log(result);


// 2.Second maximum number

function secondMaxNumber(arr){
    let first_max_num = -Infinity;
    let second_max_num = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > first_max_num){
            second_max_num = first_max_num;
            first_max_num = arr[i];
        }
        else if(arr[i] > second_max_num && arr[i] < first_max_num) {
            second_max_num = arr[i];
        }
    }
    return second_max_num;
}

const second_max_result = secondMaxNumber([-8, -54, -32, -70, -2190, -894]);
console.log(second_max_result);