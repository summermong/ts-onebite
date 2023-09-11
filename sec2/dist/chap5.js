// enum 타입 (열거형 타입)
// 값들에 이름을 부여해 열거하여 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: 'summermong',
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: 'autumnmong',
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: 'wintermong',
    role: Role.GUEST,
    language: Language.korean,
};
console.log(user1, user2, user3);
export {};
