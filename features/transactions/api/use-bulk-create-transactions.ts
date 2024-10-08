import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.transactions["bulk-create-transactions"]["$post"]>;
type RequestType = InferRequestType<typeof client.api.transactions["bulk-create-transactions"]["$post"]>["json"];

export const useBulkCreateTransactions = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions["bulk-create-transactions"].$post({
        json
      })
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transactions Created");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => {
      toast.error("Failed to create transactions");
    },
  });

  return mutation;
};
