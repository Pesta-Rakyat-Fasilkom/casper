import React from "react";

// USAGE EXAMPLE

// export const ChipsUsage = () => {
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);

//   const handleSelect = (item: string) => {
//     setSelectedItems((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Chips
//         items={["Chips 1", "Chips 2", "Chips 3"]}
//         selectedItems={selectedItems}
//         onSelect={handleSelect}
//       />
//     </div>
//   );
// };

// DISCLAIMER: JANGAN ADA LEBIH DARI SATU ITEM YANG NAMANYA SAMA

interface ChipsProps {
  items?: string[];
  selectedItems?: string[];
  onSelect?: (item: string) => void;
  className?: string;
  chipClassName?: string;
}

const Chips: React.FC<ChipsProps> = ({
  items = [],
  selectedItems = [],
  onSelect,
  className = "",
  chipClassName = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex rounded-full cursor-pointer"
          onClick={() => onSelect && onSelect(item)}
        >
          {selectedItems.includes(item) || (
            <div
              className="peer absolute w-full h-full rounded-full border-[3px] border-transparent"
              style={{
                background:
                  "linear-gradient(to bottom, #F62455, #AB3B55) border-box",
                WebkitMask:
                  "linear-gradient(blue 0 0) padding-box, linear-gradient(blue 0 0)",
                WebkitMaskComposite: "xor",
              }}
            />
          )}
          <div
            className={`${selectedItems.includes(item) ? "text-text-light-1 bg-button-primary" : "text-text-dark-1"}
                 flex items-center peer-hover:bg-accents-red-3 rounded-full px-5 py-2 text-lg transition-colors ${chipClassName}`}
          >
            <span>{item}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chips;
