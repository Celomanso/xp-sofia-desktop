import { useState } from "react";

interface DesktopIconProps {
  icon: string;
  title: string;
  onClick: () => void;
}

export const DesktopIcon = ({ icon, title, onClick }: DesktopIconProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    setTimeout(() => {
      onClick();
      setIsSelected(false);
    }, 200);
  };

  return (
    <div 
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={onClick}
    >
      <img 
        src={icon} 
        alt={title}
        className="w-12 h-12 mb-1"
        style={{ imageRendering: 'pixelated' }}
      />
      <span className="text-center leading-tight select-none">
        {title}
      </span>
    </div>
  );
};