export interface DropdownComponentProps {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  items: string[];
  disabled?: boolean;
  className?: string;
}
