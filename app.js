// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i =0; i < 100; i = i + 1){
//     console.log(i);
//     if (i===99){
//         console.log('Đã hoàn thành');
//         break;
//     }
// } 

// Bài 2: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let n1 = 0;
// let n2 = 1;
// let nextTerm;
// for (let i = 1; i <= 20; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// Bài 3: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let n1=0;
// let n2=1;
// let nextTerm;
// let state = true;
// while (state){
//      nextTerm = n1 + n2;
//      n1 = n2;
//      n2 = nextTerm;
//      if (n1%5 === 0){
//         state = false
//         console.log(`${n1}`);
//     }
// }

// Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let n1=0;
// let n2=1;
// let nextTerm;
// let a = 0;
// for (let i = 1; i <= 20; i++){
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     a= a + n1
// }
// console.log(`${a}`);

// Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let i=1;
// let dem=0;
// let tong=0;
// while(dem<=29){
//     if(i%7 === 0){
//         dem+=1;
//         tong+=i;
//     }
// i+=1;
// }
// console.log(tong);

// Bài 6: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// for (let i =0; i <= 100; i = i + 1){
//     console.log(i);
//     if (i%3 === 0 && i%5 !==0){
//         console.log(i + "Fizz");
//     } else if (i%3 !== 0 && i%5 === 0){
//         console.log(i + "Buzz");
//     } else if (i%3 === 0 && i%5 === 0){
//         console.log(i + "FizzBuzz");
//     } else 
//         console.log(i);
// }


// Bài 7: Tính giai thừa của một số nguyên dương
// let n = Number(prompt ('Nhập vào số nguyên dương n bất kỳ'));
// let a = 1; 
// if (n>0 && Number.isInteger(n)== true){
// for (let i = 1; i <= n; i = i +1){
//         a = a*i;    
//     }           
//     console.log(`${a}`);  
// } else {
//     console.log('Nhập lại số n bạn ơi');
// }