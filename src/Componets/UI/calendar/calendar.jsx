import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import st from './calendar/calendar.module.scss';
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(st.calendar, className)}
      classNames={{
        months: st.months,
        month: st.month,
        caption: st.caption,
        caption_label: st.captionLabel,
        nav: st.nav,
        nav_button: cn(buttonVariants({ variant: "outline" }), st.navButton),
        nav_button_previous: st.navButtonPrevious,
        nav_button_next: st.navButtonNext,
        table: st.table,
        head_row: st.headRow,
        head_cell: st.headCell,
        row: st.row,
        cell: st.cell,
        day: cn(buttonVariants({ variant: "ghost" }), st.day),
        day_range_end: st.dayRangeEnd,
        day_selected: st.daySelected,
        day_today: st.dayToday,
        day_outside: st.dayOutside,
        day_disabled: st.dayDisabled,
        day_range_middle: st.dayRangeMiddle,
        day_hidden: st.dayHidden,
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className={st.icon} />,
        IconRight: ({ ..._props }) => <ChevronRight className={st.icon} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
export { Calendar };