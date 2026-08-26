import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Button({
  href,
  onClick,
  children,
  variant = 'primary', // 'primary', 'dark', 'outline', 'text'
  size = 'md',
  className = '',
  icon = true,
  cursorText = 'GO',
  go,
  ...props
}) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (href && go) {
      e.preventDefault();
      go(href);
    }
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={`custom-button btn-variant-${variant} btn-size-${size} ${className}`}
      data-cursor-text={cursorText}
      {...props}
    >
      <span className="btn-content">{children}</span>
      {icon && <ArrowUpRight size={size === 'lg' ? 18 : 16} className="btn-icon" />}
    </Component>
  );
}
