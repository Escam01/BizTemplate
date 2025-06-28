import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import st from './command/command.module.scss';
import { Dialog, DialogContent } from "@/components/ui/dialog";
const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(st.command, className)}
    {...props}
  />
));
Command.displayName = "Command";
const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className={st.dialogContent}>
        <Command className={st.commandInner}>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className={st.inputWrapper}>
    <Search className={st.searchIcon} />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(st.input, className)}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";
const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(st.list, className)}
    {...props}
  />
));
CommandList.displayName = "CommandList";
const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={st.empty}
    {...props}
  />
));
CommandEmpty.displayName = "CommandEmpty";
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(st.group, className)}
    {...props}
  />
));
CommandGroup.displayName = "CommandGroup";
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(st.separator, className)}
    {...props}
  />
));
CommandSeparator.displayName = "CommandSeparator";
const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(st.item, className)}
    {...props}
  />
));
CommandItem.displayName = "CommandItem";
const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(st.shortcut, className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};