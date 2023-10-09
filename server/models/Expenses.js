const {Schema, model}= require('mongoose')

const expensesSchema = new Schema({
    username:{
        type:String
    },
    amount:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        required:true,
    }
},{
    toJSON:{virtuals:true},
    id:false,
    timestamps:true
})
const Expenses= model("Expenses",expensesSchema)
module.exports = Expenses;