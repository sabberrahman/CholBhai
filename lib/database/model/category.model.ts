import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Document{
    _id:string,
    name:string,
}

const CategorySchema= new Schema({
    name:{type:String, require:true, unique:true},
})

const Category = models.Catagory || model("Category",CategorySchema)

export default Category;