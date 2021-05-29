export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


// export type ChangeCurrencyFieldType = {
//     type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
//     amountOfBYN:string
//     amountOfCurrency:string
// };

// export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => ({
//     type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN , amountOfCurrency});

// export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => ({
//     type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN , amountOfCurrency});
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => ({
    type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN , amountOfCurrency}as const);
export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>

// export type ChangeAction = {
//     type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION
//     isBuying:boolean
// };
// export const ChangeActionAC = (isBuying: boolean): ChangeAction => ({
//     type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION , isBuying});
export const ChangeActionAC = (isBuying: boolean)=> ({
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION , isBuying}as const);
export type ChangeAction = ReturnType<typeof ChangeActionAC>

// export type ChangeCurrentCurrencyType = {
//     type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
//     currentCurrency:string
// };

// export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => ({
//     type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY , currentCurrency});
export const СhangeCurrentCurrencyAC = (currentCurrency: string) => ({
    type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY , currentCurrency}as const);
export type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrencyAC>


export type ChangeCurrencyField = ReturnType<typeof СhangeCurrentCurrencyAC>
export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;