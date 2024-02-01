// src/components/Button.tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color: string;
}

const Button = ({ onClick, children, color }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default Button;
