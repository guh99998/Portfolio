type IconProps = { className?: string };

const common = {
  "aria-hidden": true as const,
  focusable: "false" as const,
  viewBox: "0 0 24 24",
  fill: "currentColor",
};

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.635 22.41c.575.105.785-.25.785-.555 0-.275-.01-1.005-.015-1.97-3.2.695-3.875-1.54-3.875-1.54-.525-1.33-1.28-1.685-1.28-1.685-1.045-.715.08-.7.08-.7 1.155.08 1.765 1.185 1.765 1.185 1.03 1.765 2.7 1.255 3.355.96.105-.745.4-1.255.73-1.545-2.555-.29-5.24-1.28-5.24-5.69 0-1.255.45-2.285 1.185-3.09-.12-.29-.515-1.46.11-3.045 0 0 .965-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.195-1.49 3.16-1.18 3.16-1.18.625 1.585.23 2.755.115 3.045.735.805 1.18 1.835 1.18 3.09 0 4.42-2.69 5.395-5.255 5.68.415.355.78 1.06.78 2.135 0 1.545-.015 2.79-.015 3.17 0 .305.205.665.79.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.75 2.65 4.75 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4V9Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      {...common}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      {...common}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      {...common}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg
      {...common}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.17h-.01a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.24 8.24 0 0 1 12.77-10.2 8.16 8.16 0 0 1 2.42 5.84c0 4.56-3.71 8.21-8.21 8.21Zm4.5-6.15c-.25-.13-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}
