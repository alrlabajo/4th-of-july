import React, { useState, useEffect } from 'react';

const TextType = ({
  text = ["Hello World"],
  typingSpeed = 100,
  pauseDuration = 1000,
  showCursor = true,
  cursorCharacter = "|",
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const targetText = text[currentTextIndex];

    if (isTyping) {
      if (currentText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentTextIndex, isTyping, text, typingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [showCursor]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-teal-500">
        {currentText}
        {showCursor && (
          <span className={`${showCursorState ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            {cursorCharacter}
          </span>
        )}
      </span>
    </div>
  );
};

export default TextType;
