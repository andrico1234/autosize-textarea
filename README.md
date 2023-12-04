# Autosize Textarea

![The autosize-textarea component in action](./static/demo.gif)

## Description

A simple textarea component that automatically resizes to fit its content.

## Installation

```bash
npm install autosize-textarea
```

## Usage

```html
<head>
  <script type="module" src="./node_modules/autosize-textarea/autosize-textarea.js"></script>
</head>
<body>
  <autosize-textarea>
    <textarea rows="1" placeholder="Type something here..."></textarea>
  </autosize-textarea>
</body>
```

## Gotchas

### `rows` attribute

The web component applies the `rows` attribute to the textarea element when it is first created, which sets the initial height to fit the content. Becuase the component could register after the textarea is rendered on the page, you may see the textarea change height once the component registers.

To mitigate this, you can apply the `rows` attribute to the textarea element yourself, or set the `rows` attribute to `1` in the html.

---
## Sponsor

Learn to build a component library using minimal tech with [Component Odyssey](https://component-odyssey.com/). As a result, you'll:

- Become a more future-proof web developer
- Build components that your users will love
- Boost your career opportunities
- Learn to do more with less

---