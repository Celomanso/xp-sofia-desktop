import { useState, useEffect } from "react";

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
  // Mobile detection
  const isMobile = window.innerWidth < 768;
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

  // Properly manage event listeners with useEffect
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Reset position when window is reopened
  useEffect(() => {
    if (isOpen) {
      setPosition({ x, y });
      setIsDragging(false);
    }
  }, [isOpen, x, y]);

  if (!isOpen) return null;

  return (
    <div 
      className="xp-window fixed z-50"
      style={{ 
        left: isMobile ? 10 : position.x,
        top: isMobile ? 10 : position.y,
        width: isMobile ? 'calc(100vw - 20px)' : width,
        height: isMobile ? 'calc(100vh - 20px)' : height,
        minWidth: isMobile ? 'auto' : 250,
        minHeight: isMobile ? 'auto' : 150,
        maxWidth: isMobile ? '100vw' : 'none',
        maxHeight: isMobile ? '100vh' : 'none'
      }}
    >
      {/* Title Bar */}
      <div 
        className={`xp-titlebar flex items-center justify-between px-2 py-1 ${isMobile ? 'cursor-default' : 'cursor-move'}`}
        onMouseDown={isMobile ? undefined : handleMouseDown}
      >
        <span className={`flex items-center gap-1 ${isMobile ? 'text-sm' : ''}`}>
          <div className="w-4 h-4 bg-white/20 rounded"></div>
          {title}
        </span>
        <div className="flex gap-1">
          {!isMobile && (
            <>
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
            </>
          )}
          <button 
            className={`xp-close-button ${isMobile ? 'w-6 h-6 text-sm' : 'w-4 h-4 text-xs'} leading-none`}
            onClick={onClose}
            title="Fechar"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex-1 p-3 overflow-auto bg-white text-black ${isMobile ? 'text-base' : 'text-sm'}`}>
        {children}
      </div>
    </div>
  );
};