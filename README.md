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

Here's a simple example to get you started with the React Dynamic Background component:

```jsx

import React from 'react';
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

## Props

| Prop              | Type     | Default | Description                                      |
|-------------------|----------|---------|--------------------------------------------------|
| `images`          | string[] | `[]`    | Array of image URLs to be used as the background.|
| `interval`        | number   | `2000`  | Time in milliseconds between background changes. |
| `dynamicBgClasses`| string   | `''`    | Additional CSS classes for styling.              |
| `children`        | ReactNode| `null`  | The content to be rendered within the background.|

## Customization

You can customize the appearance of the dynamic background by passing additional CSS classes through the `dynamicBgClasses` prop. Additionally, you can directly modify the CSS variables and classes defined in the component's stylesheet for more control over the styling.

## Contributing

Contributions are always welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes, or open an issue to discuss what you'd like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Remember to replace `react-dynamic-background` with the actual name of your npm package if it's different. Also, ensure that the URLs and default values in the documentation match those in your actual component.