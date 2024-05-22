function addContact(
  name,
  phone,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  let str = `name=${name}, phone=${phone}, home=${home}, address=${address}, email=${email}`;
  console.log(str);
}
addContact('홍길동', '010-222-3331');
addContact('이몽룡', '010-222-3331', '02-3422-9900', '서울시');

// 기본값(ex = '없음') -> 뒤에서부터
// ...- > 뒤에서부터
// 템플릿 문자열 (${})
