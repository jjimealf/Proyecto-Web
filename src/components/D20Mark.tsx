type D20MarkProps = {
  label?: string;
  large?: boolean;
};

export function D20Mark({ label = "D20", large = false }: D20MarkProps) {
  return (
    <span className={`d20-mark${large ? " d20-mark--large" : ""}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 112"
        focusable="false"
        role="img"
      >
        <path d="M50 2 96 29v54L50 110 4 83V29Z" />
        <path d="m50 2 18 39-18 69-18-69L50 2Zm-46 27 28 12L4 83m92-54L68 41l28 42M32 41h36M4 83l46-18 46 18" />
      </svg>
      <span>{label}</span>
    </span>
  );
}
