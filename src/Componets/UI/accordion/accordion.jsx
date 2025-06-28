import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import st from './accordion/accordion.module.scss';
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`${st.accordionItem} ${props.className}`}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Header className={st.accordionHeader}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`${st.accordionTrigger} ${props.className}`}
      {...props}
    >
      {props.children}
      <ChevronDown className={st.chevron} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef((props, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`${st.accordionContent} ${props.className}`}
    {...props}
  >
    <div className={st.contentInner}>{props.children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };