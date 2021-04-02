
const todolistID1= '233'
const todolistID2= '234'


const todoList = [
    {
        id:todolistID1,
        title:'What To Learn',
        filter:'all',
    },
    {
        id:todolistID2,
        title:'Learn',
        filter:'all',
    }

]

const tasks = {
    [todolistID1]:[{
        id:'223',title:'Vodka',isDone:true
    },
        {
            id:'224',title:'Plus',isDone:true
        },
        {
            id:'225',title:'Beer',isDone:true
        },
    ],
    [todolistID2]:[{
        id:'213',title:'Money',isDone:true
    },
        {
            id:'214',title:'Ha',isDone:true
        },
        {
            id:'215',title:'Veter',isDone:true
        },
    ]
}