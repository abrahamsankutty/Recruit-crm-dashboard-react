export const FacebookLogo: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={`${className} flexc`}
      dangerouslySetInnerHTML={{
        __html: `
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="8.5" fill="#1877F2"/>
        <path d="M8.92336 13V8.90135H10.2561L10.4542 7.2966H8.92336V6.27444C8.92336 5.81137 9.04772 5.49432 9.6883 5.49432H10.5V4.06359C10.1051 4.01968 9.70809 3.99848 9.31089 4.00008C8.13287 4.00008 7.32407 4.7462 7.32407 6.11592V7.2936H6V8.89835H7.32696V13H8.92336Z" fill="white"/>
        </svg>
        `,
      }}
    />
  );
};
