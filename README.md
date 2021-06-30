# y-avatars

> a small package for custom svg-based placeholder avatars

[![NPM](https://img.shields.io/npm/v/y-avatars.svg)](https://www.npmjs.com/package/y-avatars) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save y-avatars
```

## Usage

```jsx
import React, { Component } from 'react'

import { Avatar } from 'y-avatars'

class Example extends Component {
  render() {
    return <Avatar  variant = 'pixel'//varients[  'pixel','frame','ring','smilly','sunset','marble','triangle','patterns','classic'],
  colors = {['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}//colors to use
  name = {'Example Name'}//name used to generate random avatars
  size = {40}//the size of the avatar
  radius = {100}//radius />
  }
}
```

## License

MIT © [uwenayoallain](https://github.com/uwenayoallain)
