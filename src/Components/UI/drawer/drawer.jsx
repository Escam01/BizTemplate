import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import st from './drawer/drawer.module.scss';
const Drawer = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(st.drawerOverlay, className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(st.drawerContent, className)}
      {...props}
    >
      <div className={st.drawerIndicator} />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn(st.drawerHeader, className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn(st.drawerFooter, className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(st.drawerTitle, className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(st.drawerDescription, className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};