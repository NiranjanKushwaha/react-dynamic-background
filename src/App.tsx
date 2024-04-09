
import { useState } from 'react';
import './css/app.css';
import DynamicBackground from './components/DynamicBackground';

function App() {
  const [isHighOpacity, setIsHighOpacity] = useState(false);

  return (
    <div className='parent' onClick={() => setIsHighOpacity(!isHighOpacity)}>
      <DynamicBackground dynamicBgClasses={isHighOpacity ? 'opacity-high' : 'opacity-low'} images={['https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg']}>
        Click me to change opacity!
      </DynamicBackground>
    </div>
  );
}

export default App;
