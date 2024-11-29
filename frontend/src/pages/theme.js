import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [currentColor, setCurrentColor] = useState('#3B82F6');

  // Simplified color palette
  const colorPalette = [
    '#FF6B6B',   // Red
    '#4ECDC4',   // Teal
    '#45B7D1',   // Blue
    '#6C5CE7',   // Purple
    '#A8E6CF',   // Mint
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const applyColor = () => {
    // Update current color to the selected color
    setCurrentColor(selectedColor);
      






    // Update CSS variables permanently
    document.documentElement.style.setProperty('--primary-color', selectedColor);
    //--primary-color for button
    //--secondary-color for heading
    //--third-color for backgroung











    // Optional: Add a visual feedback
    alert(`Color ${selectedColor} has been applied!`);
  };

  return (
    <div className="max-w-sm mx-auto my-24">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gray-100 p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Butoon theme Customizer
          </h2>
        </div>

        {/* Color Preview */}
        <div 
          className="h-40 flex items-center justify-center"
          style={{ 
            backgroundColor: selectedColor,
            color: selectedColor === '#FDCB6E' ? 'black' : 'white'
          }}
        >
          <span className="text-2xl font-bold">
            {selectedColor}
          </span>
        </div>

        {/* Color Selection Grid */}
        <div className="p-4 grid grid-cols-5 gap-3">
          {colorPalette.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-full aspect-square rounded-lg hover:scale-105 transition-transform ${
                selectedColor === color ? 'ring-4 ring-blue-500' : ''
              }`}
              style={{ 
                backgroundColor: color 
              }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>

        {/* Color Input Section */}
        <div className="p-4 border-t border-gray-200 space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter hex color"
            />
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-14 h-14 border-0 rounded-lg cursor-pointer"
            />
          </div>

          {/* Apply Changes Button */}
          <button
            onClick={applyColor}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Apply Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;