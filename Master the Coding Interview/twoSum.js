//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:

//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

function twoSum(nums, target) {
    const indices = [];
    let len = nums.length;
    const result = [];

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(nums[i]);
                indices.push(nums[j]);
                console.log(indices);
                result.push(nums.indexOf[i]);
                console.log(result);
                //result.push(indices.index[1]);
            }
            //return result;
        }
    }

    //return indices;
}

twoSum([2, 7, 11, 15], 26);

//twoSum([2,7,11,15], 26);

//Testing 

function twoSum(nums, target) {
    let len = nums.length;
    const result = [];


    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            //if(nums[i] + nums[j] === target){
            if (nums[j] == target - nums[i]) {
                // console.log(nums);
                // console.log(nums[i]);
                // console.log(nums[j]);
                // console.log(nums.indexOf(nums[i]));
                // console.log(nums.indexOf(nums[j]));
                // result.push(nums.indexOf(nums[i]));
                // result.push(nums.indexOf(nums[j]));
                // console.log(result);
                result.push(i);
                result.push(j);
                return result;
                //return i;
            }
            //return result;
        }
        //return result;
    }
}

//twoSum([2,7,11,15], 9);
//twoSum([2,7,11,15], 18);
//twoSum([3,2,4], 6);
twoSum([3, 3], 6);



//twoSum([2,7,11,15], 26);

//Final solution
function twoSum(nums, target) {
    let len = nums.length;
    const result = [];


    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result;
            }

        }

    }
}