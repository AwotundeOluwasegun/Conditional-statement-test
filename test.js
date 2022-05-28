//test_one solution

function showMax() {
    let one = document.getElementById("first").value;
    let two = document.getElementById("second").value;
    if (one > two) {
        alert(one)
    };

    if (two > one) {
        alert(two)
    }
}

//test_two solution
const nums = [0, -1, 4,];
const newNum = nums.sort();
const newNum2 = nums.reverse();
const result = alert(newNum2)

document.getElementById('test_two').innerHTML =  newNum2;

//test_three solution
const integers = Math.max(-1, -3, 4, 0, -7);
const highest = alert(integers);

document.getElementById('test_three').innerHTML =  integers;
