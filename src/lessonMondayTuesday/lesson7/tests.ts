


export const multi = (a: number, b: number) => {
    return a * b
}

export const sum = (a: number, b: number) => {
    return a + b
}

export const substraction = (a: number, b: number) => {
    return a - b
}

export type Student ={
    name:string
    age:number
    score:number
    isStudent:boolean
    friends:Array<string>
}

export const copyStudent = (args:Student):Student =>{
    return  {...args}
}

export const deepCopyStudent = (args:Student):Student =>{
    return  {...args,friends:[...args.friends]}
}

export const addFriends=(group:Array<Student>)=>{
    return group.map(g=>({...g,friends:group.map(st => st.name).filter(t=>t !== g.name)}))
}
