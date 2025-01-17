export const ArrowRightIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={`${className} flexc`}
      dangerouslySetInnerHTML={{
        __html: `
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.414 11.707L7.121 6L1.414 0.292999L0 1.707L4.293 6L0 10.293L1.414 11.707Z" fill="#1F5FAC"/>
        </svg>
        `,
      }}
    />
  );
};
