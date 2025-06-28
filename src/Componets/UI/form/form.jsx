import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import st from './form/form.module.scss';
const Form = ({ children, ...props }) => {
  return (
    <FormProvider {...props}>
      {children}
    </FormProvider>
  );
};
const FormFieldContext = React.createContext(null);
const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  return {
    name: fieldContext.name,
    ...fieldState,
  };
};
const FormItemContext = React.createContext(null);
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn(st.formItem, className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error } = useFormField();
  return (
    <Label
      ref={ref}
      className={cn(error && st.error, className)}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error } = useFormField();
  return (
    <Slot
      ref={ref}
      aria-invalid={!!error}
      className={cn(st.formControl)}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(st.formDescription, className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return (
    <p
      ref={ref}
      className={cn(st.formMessage, className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};