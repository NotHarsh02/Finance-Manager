"use client"
import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem} from "@/components/ui/dropdown-menu"
import {Edit, MoreHorizontal, Trash } from "lucide-react";
import { useOpenCategory} from "@/features/categories/hooks/use-open-category";
import {Button} from "@/components/ui/button"
import { useDeleteCategory} from "@/features/categories/api/use-delete-category";
import { useConfirm } from "@/hooks/use-confirm";
type Props={
    id:string;
};
export const Actions =({id}:Props)=>{
    const [ConfirmDialog,confirm]=useConfirm(
      "Are you sure?",
      "You are about to delete this category"
    );
    const {onOpen}=useOpenCategory()
    const deleteMutation= useDeleteCategory(id)
    const handleDelete= async()=>{
      const ok = await confirm()
      if(ok){
        deleteMutation.mutate();
      }
    }
    return (
        <>
        <ConfirmDialog></ConfirmDialog>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <MoreHorizontal className="size-4"></MoreHorizontal>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
           <DropdownMenuItem
           disabled={deleteMutation.isPending}
           onClick={()=>{onOpen(id)}}>
            <Edit className="size-4 mr-2"></Edit>
            Edit
           </DropdownMenuItem>
           <DropdownMenuItem
           disabled={deleteMutation.isPending}
           onClick={handleDelete}>
            <Trash className="size-4 mr-2"></Trash>
            Delete
           </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
        </>
    )
};