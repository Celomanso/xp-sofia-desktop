import { useState } from "react";

interface WindowXPProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export const WindowXP = ({ 
  title, 
  children, 
  isOpen, 
  onClose, 
  width = 400, 
  height = 300,
  x = 100,
  y = 100 
}: WindowXPProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x, y });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for dragging
  if (isDragging) {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  if (!isOpen) return null;

  return (
    <div 
      className="xp-window fixed z-50"
      style={{ 
        left: position.x,
        top: position.y,
        width,
        height,
        minWidth: 250,
        minHeight: 150
      }}
    >
      {/* Title Bar */}
      <div 
        className="xp-titlebar flex items-center justify-between px-2 py-1 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-white/20 rounded"></div>
          {title}
        </span>
        <div className="flex gap-1">
          <button 
            className="xp-button w-4 h-4 text-xs leading-none"
            title="Minimizar"
          >
            _
          </button>
          <button 
            className="xp-button w-4 h-4 text-xs leading-none"
            title="Maximizar"
          >
            □
          </button>
          <button 
            className="xp-close-button w-4 h-4 text-xs leading-none"
            onClick={onClose}
            title="Fechar"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-3 overflow-auto bg-white text-black text-sm">
        {children}
      </div>
    </div>
  );
};