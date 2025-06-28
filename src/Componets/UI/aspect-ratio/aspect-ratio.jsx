import React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import st from './aspect-ratio/aspect-ratio.module.scss';
const AspectRatio = React.forwardRef(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={`${st.aspectRatio} ${className}`}
    {...props}
  />
));
AspectRatio.displayName = "AspectRatio";
export { AspectRatio };