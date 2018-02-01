# npm-version-exists
> Check if the specified package version exists on npm

## Installation

```console
  yarn add npm-version-exists
```
## Usage

```javascript
  const nve = require('npm-version-exists')
  nve({
    name: 'npm-version-exists',
    version: '0.0.1'
  })
    .then(exists => console.log(exists)) //returns bool
    .catch(err => console.log(err))
```

```javascript
  const nve = require('npm-version-exists')

  nve({
    name: 'npm-version-exists',
    version: '0.0.1',
    token: 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx'
  },)
    .then(exists => console.log(exists)) //returns bool
    .catch(err => console.log(err))
```