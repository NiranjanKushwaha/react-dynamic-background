# React Dynamic Background

A lightweight and customizable React component for creating dynamic backgrounds with ease. This component allows you to cycle through images as the background of a container, with options for customization including the transition interval and additional CSS classes for styling.

## Features

- Easy to use and integrate into any React project.
- Supports cycling through multiple background images.
- Customizable image display interval.
- Allows additional CSS classes for further customization.
- Fully responsive and adaptable to various screen sizes.

## Installation

To install the React Dynamic Background component, run the following command in your project directory:

```bash

npm install react-dynamic-background

```


## Usage

To use `react-dynamic-background`, import it into your React component. Here's a basic example:

```jsx

import React from 'react';
import './App.css';
import DynamicBackground from 'react-dynamic-background';

const App = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    // Add more images as needed
  ];

  return (
    <DynamicBackground images={images} interval={3000}>
      <h1>Welcome to My Site</h1>
      {/* Additional content here */}
    </DynamicBackground>
  );
};

export default App;

```

## Customizing Styles

To customize the background styles such as opacity, blur, or borders, you will need to add some CSS. Here's an example `app.css` file that includes styles for lower and higher opacity, a blur effect, and a border style:

```css

/* App.css */
.opacity-low::before {
  opacity: 0.2; /* Lower opacity */
}

.opacity-high::before {
  opacity: 0.8; /* Higher opacity */
}

.blur-effect::before {
  filter: blur(8px); /* Apply blur */
}

.border-style::before {
  border: 5px solid #fff; /* Add border */
}

```

## Examples

### Changing Opacity Based on Component State

```jsx

import React, { useState } from 'react';
import './css/app.css';
import DynamicBackground from 'react-dynamic-background';

function App() {
  const [isHighOpacity, setIsHighOpacity] = useState(false);

  return (
    <div className='parent' onClick={() => setIsHighOpacity(!isHighOpacity)}>
      <DynamicBackground dynamicBgClasses={isHighOpacity ? 'opacity-high' : 'opacity-low'}>
        Click me to change opacity!
      </DynamicBackground>
    </div>
  );
}

export default App;

```

### Applying a Blur Effect

```jsx

import React from 'react';
import './css/app.css';
import DynamicBackground from 'react-dynamic-background';

const App = () => {
  return (
    <div className='parent'>
      <DynamicBackground dynamicBgClasses='blur-effect'>
        Your content here.
      </DynamicBackground>
    </div>
  );
};

export default App;

```

### Adding a Border

```jsx

import React from 'react';
import './css/app.css';
import DynamicBackground from 'react-dynamic-background';

const App = () => {
  return (
    <div className='parent'>
      <DynamicBackground dynamicBgClasses='border-style'>
        Your content here.
      </DynamicBackground>
    </div>
  );
};

export default App;

```

## Customization

You can customize the appearance of the dynamic background by passing additional CSS classes through the `dynamicBgClasses` prop. Additionally, you can directly modify the CSS variables and classes defined in the component's stylesheet for more control over the styling.

## Props

| Prop              | Type     | Default | Description                                      |
|-------------------|----------|---------|--------------------------------------------------|
| `images`          | string[] | `[]`    | Array of image URLs to be used as the background.|
| `interval`        | number   | `2000`  | Time in milliseconds between background changes. |
| `dynamicBgClasses`| string   | `''`    | Additional CSS classes for styling.              |
| `children`        | ReactNode| `null`  | The content to be rendered within the background.|


## Conclusion

With `react-dynamic-background`, you can easily add and customize dynamic backgrounds in your React applications. Remember to import your CSS styles to apply effects like opacity changes, blur, or borders. Experiment with different styles and images to create unique and engaging user experiences.

## Contributing

Contributions are always welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes, or open an issue to discuss what you'd like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
