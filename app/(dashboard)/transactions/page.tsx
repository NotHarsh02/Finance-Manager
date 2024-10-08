"use client";

import { Plus,Loader2} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewTransaction} from "@/features/transactions/hooks/use-new-transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete-transactions";
import { ResponseType, columns } from "./columns";



const TransactionsPage = () => {
  const newTransaction = useNewTransaction();
  const deleteTransactions=useBulkDeleteTransactions();
  const transactionsQuery=useGetTransactions();
  const transactions=transactionsQuery.data ||[]

  const isDisabled=transactionsQuery.isLoading||deleteTransactions.isPending
  if(transactionsQuery.isLoading){
    return(
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm"> 
          <CardHeader>
          <Skeleton className="h-8 w-48"></Skeleton>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full flex items-center justify-center">
               <Loader2 className="size-6 text-slate-300 animate-spin"></Loader2>
              </div>
            </CardContent>
          </Card>
      </div>
      
    )
  }
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">  
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Transactions page</CardTitle>
          <Button onClick={newTransaction.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={transactions}
            filterKey="name"
            onDelete={(rows) => {
              const ids=rows.map((r)=>r.original.id)
              deleteTransactions.mutate({ids});
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
