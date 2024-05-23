// 배열 구조 분해 부분
let arr = [10, 20, 30, 40];
// arr 값을 순서대로 a1 = 10, a2 = 20, a3 = 30 변수에 대입 됨
let [a1, a2, a3] = arr;

// 그럼 테스트 해봐야죠?
a1 = 40; // 과연 arr[0] 도 바뀔까? 직접 콘솔에 찍어보세요~~

console.log(arr[0]);

// 객체 구조 분해 부분
let person = {
  name: 'Lee',
  age: 30,
  email: 'test@naver.com',
};
// person 객체 데이터를 매칭하여 구조 분해 작업
let { name, age, email: email } = person;

// 궁금하지 않나요??? 만약 객체 구조 분해할 때 순서가 바뀐다면? => 테스트해보세요

console.log(person);
