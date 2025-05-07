# anime-face-generator

A simple CLI and JavaScript library for generating anime‑style faces using a pretrained DCGAN model.

<img src="https://raw.githubusercontent.com/awais7012/npm-commnads-dcgan/main/anime-face-5.png" alt="Sample Anime Faces" width="400" />

## Features

* 🎨 **Anime Face Generation**: Produce one or many stylized face images in PNG format.
* 🚀 **CLI & Library**: Use interactively in the terminal or integrate into your code.
* 🤖 **Programmatic API**: Call `generateAnimeFace()` from any Node.js project.

## Installation

Install the package into your project:

```bash
npm install anime-face-generator --save
```

## Usage

• **CLI & Commands**

For detailed CLI commands, options, and examples, please visit our documentation site:

🔗 [https://dark-face-forge.vercel.app/](https://dark-face-forge.vercel.app/)

• **Programmatic API**

```js
import { generateAnimeFace } from 'anime-face-generator';

generateAnimeFace(5)
  .then(imageDataArray => {
    console.log('Generated anime faces!');
    // imageDataArray contains Buffers you can write to disk or process further
  })
  .catch(error => {
    console.error('Failed to generate anime faces:', error);
  });
```

## Documentation & Support

Visit the full documentation, examples, and command reference at:

🔗 [https://dark-face-forge.vercel.app/](https://dark-face-forge.vercel.app/)

For issues or contributions, please open an issue or pull request on GitHub:

🔗 [https://github.com/awais7012/npm-commnads-dcgan](https://github.com/awais7012/npm-commnads-dcgan)

---


