# eslint-plugin-delta

Plugin Demo for Pluralsight course.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-delta`:

```
$ npm install --save-dev git+https://git@github.com/jamischarles/ps_eslint-plugin-delta.git
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-delta` globally.

## Usage

Add `delta` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "delta"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "delta/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





