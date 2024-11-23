import { useState, useEffect } from "react";
import './TypeWriter.css'
const TypewriterEffect = ({texts}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [glow, setGlow] = useState(null);
  
  useEffect(() => {
    const text = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {  
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          switch (currentTextIndex + 1) {
            case 1:
              setGlow('react-glow');
              break;
            case 2:
              setGlow('html-glow');
              break;
            case 3:
              setGlow('css-glow');
              break;
            case 4:
              setGlow('js-glow');
              break;
          
            default:
              setGlow(null);
              break;
          }
        }
      }
    }, isDeleting ? 50 : 100); 
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);
  
  return (
    <div className="typeWriter">
      <div className={`${glow}`}>
        {displayText}
        <span>|</span>
      </div>
    </div>
  );
};

export default TypewriterEffect;
