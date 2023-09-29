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
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        get:function(value){
            return new Date(value).toISOString()
        }
    }
},{
    toJSON:{virtuals:true},
    id:false
})
const Expenses= model("Expenses",expensesSchema)
module.exports = Expenses;