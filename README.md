# SCSS Framework

A modern, utility-first SCSS framework designed for scalability and maintainability.

## Features

- 🎨 Utility-First Approach
- 📱 Responsive Design System
- 🌓 Dark Mode Support
- 🔄 RTL Support
- 🎯 Semantic Class Names
- 🛠 Customizable Configuration
- 📦 Zero Runtime Dependencies

## Installation

```bash
yarn add @mordzin/scss
```

## Development Setup

1. Install dependencies:
```bash
yarn install
```

2. Start development mode:
```bash
yarn dev
```

3. Build for production:
```bash
yarn build
```

4. Run tests:
```bash
yarn test
```

5. Lint code:
```bash
yarn lint
```

6. Format code:
```bash
yarn format
```

## Usage

1. Import the framework in your main SCSS file:

```scss
@use '@mordzin/scss/style';
```

2. Use the utility classes in your HTML:

```html
<div class="m4 p2 bgp c1">
  <!-- m4 = margin scale 4 -->
  <!-- p2 = padding scale 2 -->
  <!-- bgp = background-color primary -->
  <!-- c1 = color scale 1 -->
</div>
```

## Configuration

All configuration variables can be customized in your own SCSS file:

```scss
@use '@mordzin/scss/config' with (
  $scale-start: 0.25,
  $scale-count: 8,
  // ... other configurations
);
```

## Available Utilities

- Spacing (margin, padding)
- Typography
- Colors
- Layout
- Flexbox
- Grid
- Borders
- Effects
- States (hover, focus, active)
- Responsive Design
- Dark Mode
- RTL Support

## Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## License

MIT © [Lucas Mordzin](https://github.com/mordzin)
