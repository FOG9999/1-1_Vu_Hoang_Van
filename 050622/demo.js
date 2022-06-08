// ! HOW TO RUN THIS FILE: MỞ INDEX.HTML -> MỞ DEVELOPER TOOLS (F12 TRÊN WINDOWS, HOẶC CTRL+SHIFT+I) -> TAB CONSOLE ĐỂ THẤY OUTPUT
// ! BỎ COMMENT CÁC DÒNG CODE CONSOLE.LOG KHÁC ĐỂ THẤY OUTPUT CỦA MỘT MỤC

// * CÁC FUNCTION KHI LÀM VIỆC VỚI MẢNG
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter ra nhung so le
let filterOutput = arr.filter((value, index) => {
    // console.log('current element index: ', index)
    return value % 2 === 1;
})

let mapOutput = arr.map((value, index) => {
    return value * 2;
})

const arrObj = [{ x: 1 }], objToCompare = { x: 1 };

let indexOfOutput = arrObj.indexOf(objToCompare); // -1 do so sánh === object luôn trả về false, phải lấy từng property và giá trị của property đó trong 2 object rồi so sánh
let keysOfObject = Object.getOwnPropertyNames(objToCompare); // lấy danh sách các property của object dưới dạng các string => ['x']
let indexOfSameElement = -1;
arrObj.forEach(ele => {
    let isObjectEquals = true;
    keysOfObject.forEach(key => {
        // nếu tồn tại một key mà 2 giá trị của key đó trong 2 object khác nhau thì phần tử hiện tại trong mảng không giống objToCompare
        if (ele[key] !== objToCompare[key]) {
            isObjectEquals = false;
        }
    })
})
if (indexOfSameElement > -1) {
    // console.log('Tồn tại 1 phần tử giống object cần tìm (objToCompare) với index trong mảng là: ', indexOfSameElement);
}

// cat ra mot phan trong array ban dau ma khong thay doi array do
let sliceOutput = arr.slice(0, 5);

// splice cat ra mang ban dau va return ve phan bi cat
// let spliceOutput = arr.splice(0, 5);

// reduce: input = array, output = value
let reduceOutput = arr.reduce((pre, curr, currIndex) => {
    return pre + curr;
});

// find, findIndex
// trả về phần tử đầu tiên thỏa mãn hàm callback, undefined nếu k có
let found = arr.find(element => element > 5);

// trả về index của phần tử đầu tiên thỏa mãn hàm callback, hoặc -1 nếu k có
let foundIndex = arr.findIndex(ele => ele > 5);

// console.log(reduceOutput);

// * SỰ KHÁC BIỆT CỦA NORMAL FUNCTION VÀ ARROW FUNCTION
// normal function -> ES5
// function func() { }
// arrow function -> ES6
// let func = () => { }

let obj = {
    a: 1,
    func: () => {
        console.log(this.a);
    }
}

let obj2 = {
    a: 1,
    func: function () {
        console.log(this.a);
    }
}

// console.log(obj.func(), obj2.func()) // window, obj2
// keyword this luôn trỏ tới context cuối cùng mà đã gọi nó
// Lý giải cho điều này là do: normal function tạo ra một context riêng cho this, còn arrow function thì không, 
// do đó this trong arrow function sẽ trỏ tới object chưa object obj (window), còn trong normal, trỏ tới object đã gọi function đó (obj2)

// * String
let str = '       Vu Hoang        ';
// console.log(str.length); // chieu dai cua string
// console.log(str.trim()) // remove khoang trắng đầu cuối
// console.log(str.charAt(0)) // lấy ký tự ở vị trí số bao nhiêu, undefined nếu > length của string
// console.log(str.concat('abc')) // nối chuỗi
// console.log(str.includes('xxx')) // kiểm tra sự bao gồm một chuỗi string khác

// * so sánh var let const
var i = 0;
for (var i = 0; i < 5; i++) {
    console.log('i trong vong for: ', i);
}
console.log('i sau khi ket thuc vong for: ', i); // 5

let j = 0;
for (let j = 0; j < 5; j++) {
    console.log('j trong vong for: ', j);
}
console.log('j sau khj ket thuc vong for: ', j); // 0
// let được sử dụng là một block variable, nên khi khai báo j trong vòng for, một ô nhớ khác sẽ được khởi tạo cho biến j và bị hủy sau khi kế thúc for, j được lấy lại giá trị ban đầu của nó trước for = 0
// var là global scope, do đó khi khai báo i trong vòng for nó sẽ ghi đè giá trị của i hiện tại, không trả về giá trị tại thười điểm trước vòng for nữa

const arr1 = [0, 1];
// arr1 = [1,2] ------> ERROR: cannot assign new value for a constant variable
// arr1[0] = 2 -------> No error: do chỉ variable arr1 mới được khai báo const, các phần tử bên trong nó thì vẫn có thể gán giá trị mới
// const cũng là block scope như let
const k = 0;
for (let k = 0; k < 5; k++) {
    console.log('k trong vong for: ', k);
}
console.log('k sau khk ket thuc vong for: ', k); // 0

// * Object
let key1 = 'x', key2 = 'x-y', obj1 = { x: 1, 'x-y': 10 };
console.log(obj1[key1], obj1[key2]) // 1, 10
console.log(obj1[key1] === obj1.x) // true
// đối với các thuộc tính khồng có ký tự đặc biệt thì hoàn toàn có thể truy cập bằng cách dùng dấu (.) hoặc thông qua ['tên thuộc tính']
// đối với các thuộc tính có ký tự đặc biệt thì chỉ có thể truy cập qua []

// * COPY OBJECT HOẶC ARRAY SỰ DỤNG SPREAD OPERATOR
console.log({ ...obj1, ...obj }) // {x: 1, 'x-y': 10, a: 1, func: () => {console.log(this)}}
console.log(
    [...arr, ...arr1]
) // tương tự với array
