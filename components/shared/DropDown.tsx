import React, { startTransition, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { ICategory } from '@/lib/database/model/category.model'
import { Input } from '../ui/input'
type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
}


const DropDown = ({value,onChangeHandler}: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory=()=>{

    }
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length>0 && categories.map((category)=>(
            <SelectItem key={category._id} value={category._id} className="select-item p-regular-14">{category.name}</SelectItem>
        ))}

            <AlertDialog>
            <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Add New Category</AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
                <AlertDialogHeader>
                <AlertDialogTitle>New category</AlertDialogTitle>
                <AlertDialogDescription>
                    <Input type='text' placeholder='Category name' onChange={(e)=>setNewCategory(e.target.value)}/>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={()=>startTransition(handleAddCategory)}>Add</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
      </SelectContent>
    </Select>
  )
}

export default DropDown