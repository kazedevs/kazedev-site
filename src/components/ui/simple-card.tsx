import * as React from "react";
import { cn } from "@/lib/utils";

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  href?: string;
}

export function SimpleCard({
  className,
  title,
  description,
  icon,
  footer,
  children,
  href,
  ...props
}: SimpleCardProps) {
  const content = (
    <>
      <div className="flex flex-col p-6 flex-1">
        {icon && (
          <div className="mb-4">
            {typeof icon === 'string' && icon.startsWith('/') ? (
              <img 
                src={icon} 
                alt={title || 'Project icon'} 
                className="h-12 w-12 object-contain"
              />
            ) : (
              <div className="text-3xl">{icon}</div>
            )}
          </div>
        )}
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
        {children}
      </div>
      {footer && <div className="px-6 pb-4 pt-0">{footer}</div>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
          "flex flex-col h-full hover:border-primary/50 cursor-pointer",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
        "flex flex-col h-full",
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
}
