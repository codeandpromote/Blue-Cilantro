'use client';

import type { ServicePeriod } from '@/lib/menu-data';

interface MenuJumpLinkProps {
  service: ServicePeriod;
  label: string;
  className?: string;
}

export default function MenuJumpLink({ service, label, className }: MenuJumpLinkProps) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent<ServicePeriod>('blue-cilantro:select-menu', {
        detail: service,
      })
    );
  };

  return (
    <a href="#menu" onClick={handleClick} className={className}>
      {label}
    </a>
  );
}
