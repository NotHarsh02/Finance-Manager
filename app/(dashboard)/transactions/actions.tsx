"use client"
import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem} from "@/components/ui/dropdown-menu"
import {Edit, MoreHorizontal, Trash } from "lucide-react";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import {Button} from "@/components/ui/button"
import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";
import { useConfirm } from "@/hooks/use-confirm";
type Props={
    id:string;
};
export const Actions =({id}:Props)=>{
    const [ConfirmDialog,confirm]=useConfirm(
      "Are you sure?",
      "You are about to delete this account"
    );
    const {onOpen}=useOpenAccount()
    const deleteMutation= useDeleteAccount(id)
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