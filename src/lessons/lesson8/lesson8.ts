// // @ts-ignore
// // console.log('lesson 2');
//
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else
// // https://learn.javascript.ru/ifelse
// // https://learn.javascript.ru/type-conversions
// // https://habr.com/ru/company/ruvds/blog/347866/
// // https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333
//
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80
// // https://habr.com/ru/post/348298/
//
// // https://learn.javascript.ru/switch
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch
//
//
// // Task 01
// // Дан массив minMax создайте 2 переменных min и max которые будут содержать соответствующие значения из
// // массива minMax с помощью:
// // 1. оператора If else
// // 2. Тренарнго оператора
//
// // const minMax: Array<number> = [9, 1];
//
// // Task 02
// // написать функцию access котороя принимает число в качестве аргумента, если число меньше 0 или больше 90
// // функция должна вывести в консоль 'access denied', если число меньше 18 вывести 'you are too young',
// // если число в диапазоне от 18 до 60 включительно 'access confirmed', если больше 60 - 'you are too old',
// // реализовать логику функций через:
// // 1. if else
// // 2. switch case
// // 3. тренарный оператор
//
//
// // Task 03
// // дана следующая струкутура:
//
// enum ACTION_TYPES  {
//     INIT = 'INIT',
//     SET_CURRENTPAGE = 'SET_CURRENTPAGE',
//     SET_PAGE_AMOUNT = 'SET_PAGE_AMOUNT',
//     CHANGE_ACTIVE_STATUS = 'CHANGE_ACTIVE_STATUS',
//     COMPLICATED_ACTION = 'COMPLICATED_ACTION',
// };
//
// type StateType = {
//     currentPage: number;
//     pageAmount: number;
//     isActive: boolean;
// };
//
// const initialState: StateType = {
//     currentPage: 1,
//     pageAmount: 1,
//     isActive: false,
// };
//
// type complicatedPayloadType = {
//     currentPage?: number;
//     pageAmount?: number;
//     isActive?: boolean;
// }
//
// type ActionType = {
//     type: ACTION_TYPES,
//     payload?: number | boolean | complicatedPayloadType,
// };
//
// const reducer = (state: StateType, action: ActionType): StateType => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }
//
// // ниже приведен простой пример, который необходимо взять за основу
//
// let initAction: ActionType = {
//     type: ACTION_TYPES.INIT,
// };
//
// let state: StateType = reducer(initialState, initAction);
// console.log(state === initialState); // true
//
// // Необходимо заполнить action и дописать код функции reducer c использование switch case, что бы
// // следующие действия работали корректно:
//
// let setCurrentPageAction: ActionType = {};
//
// state = reducer(state, setCurrentPageAction);
// console.log(state.currentPage === 2); //true
// console.log(state.currentPage === initialState.currentPage); //false
// console.log(initialState.currentPage === 1); //true
//
// let setPageAmountAction: ActionType = {};
//
// state = reducer(state, setPageAmountAction);
// console.log(state.pageAmount === 58); //true
// console.log(state.pageAmount === initialState.pageAmount); //false
//
// let setActiveStatusAction: ActionType = {};
//
// state = reducer(state, setActiveStatusAction);
// console.log(state.isActive); //true
// console.log(state.isActive === initialState.isActive); //false
//
// let complicatedAction: ActionType = {};
//
// state = reducer(state, complicatedAction);
// console.log(state.currentPage === 15); // true
// console.log(state.pageAmount === 95); // true
// console.log(state.isActive); //false