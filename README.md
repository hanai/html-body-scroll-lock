# html-body-scroll-lock

> inspired by [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)

<img src="https://img.shields.io/badge/dependencies-none-green.svg" alt="dependencies">
<a href="https://www.npmjs.com/package/html-body-scroll-lock" target="_blank">
    <img src="https://badgen.net/npm/dm/html-body-scroll-lock" alt="Downloads per month">
    <img src="https://img.shields.io/npm/v/html-body-scroll-lock.svg" alt="Version">
    <img src="https://img.shields.io/npm/v/html-body-scroll-lock/next.svg" alt="Next Version">
    <img src="https://img.shields.io/npm/l/html-body-scroll-lock.svg" alt="License">
</a>

## Introduction
`html-body-scroll-lock` enables body scroll locking for everything.

### Why not [body-scroll-lock(BSL)](https://github.com/willmcpo/body-scroll-lock)?
* Doesn't work on Android webview
* Doesn't work on PC with mouse wheel
* Doesn't work on iOS, if you touch somewhere instead of `targetElement`
* Must pass `targetElement`, even if it's not necessary

## Install
### Node Package Manager(recommended)

```bash
$ npm i -S html-body-scroll-lock
# OR
$ yarn add html-body-scroll-lock
```

## Usage
### Normal

```js
import { lock, unlock } from 'html-body-scroll-lock'

lock()
unlock()
```

### TargetElement needs scrolling（iOS only）
In some scenarios, when scrolling is prohibited, some elements still need to scroll, at this point, pass the targetElement.

```js
import { lock, unlock } from 'html-body-scroll-lock'

const targetElement = document.querySelector('#someElementId')

lock(targetElement)
unlock(targetElement)
```

> The `targetElement` is not required on the PC and Android.
