
import * as React from "react";
import {format} from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react";
import {SelectSingleEventHandler} from "react-day-picker"
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { Button } from "@/components//ui/button";

type Props={
    value?:Date;
    onChange?:SelectSingleEventHandler;
    disabled?:boolean
}
let isCalendar=true

export const DatePicker=({
    value,
    onChange,
    disabled
}:Props)=>{

return(
    <>
    
             <Button
             disabled={disabled}
             variant="outline"
             className={cn(
                "w-full justify-start text-left font-normal",
                !value && "text-muted-foreground"
             )}
             onClick={()=>isCalendar=true}
             >
             <CalendarIcon className="size-4 mr-2"></CalendarIcon>
             {value?format(value,"PPP"):<span>Pick a Date</span>}
             </Button>
        {isCalendar&&(<Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={disabled}
            initialFocus
            onDayClick={()=>isCalendar=false}
            
            />)}
            
     </>


)}