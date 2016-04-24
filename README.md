ESLint-Plugin-Lodash
===================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Dependencies][deps-image]][deps-url]

Lodash-specific linting rules for ESLint.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    $ npm install eslint

If you installed `ESLint` globally, you have to install the Lodash plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-lodash

# Configuration

Add a `plugins` section and specify ESLint-Plugin-Lodash as a plugin.
You can additionally add settings for the plugin.

### Shared Rule Settings
These are settings that can be shared by all of the rules. All settings are under the `lodash` inside the general `settings` object. For more info about shared settings, read the [ESLint Configuration Guide](http://eslint.org/docs/user-guide/configuring#adding-shared-settings).

* __pragma__: specifies the name you use for the Lodash variable in your code. Default is `_`.
* __version__: specifies the major Lodash Version you are using (default is `4`).
If you wish to use this plugin with Lodash v3, this value should be `3`. (on by default in the config `v3`)


Finally, enable all of the rules that you would like to use.
## Recommended configuration
This plugin exports a `recommended` configuration that enforces all the rules. You can configure the plugin as follows:

```json
{
  "plugins": ["lodash"],
  "extends": ["plugin:lodash/recommended"]
}
```
## Configuration for Using with Lodash v3
Out of the box, this plugin supports the use of Lodash v4. To use with Lodash v3, the config needs to specify the version in the `settings`, and can't use some rules.
The plugin also exports a `v3` config for ease of use.

```json
{
  "plugins": ["lodash"],
  "extends": ["plugin:lodash/v3"]
}
```

# List of provided rules
Rules are divided into categories for your convenience. All rules are off by default, unless you use one of the plugin's configurations which turn all relevant rules on.
### Possible Errors
The following rules point out areas where you might have made mistakes.

* [callback-binding](docs/rules/callback-binding.md): Use or avoid `thisArg` for Lodash method callbacks, depending on major version.
* [collection-method-value](docs/rules/collection-method-value.md): Use value returned from collection methods properly.
* [collection-return](docs/rules/collection-return.md): Always return a value in iteratees of Lodash collection methods that aren't `forEach`.
* [no-double-unwrap](docs/rules/no-double-unwrap.md): Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`) (fixable)
* [no-extra-args](docs/rules/no-extra-args.md): Do not use superfluous arguments on Lodash methods with a specified arity.
* [unwrap](docs/rules/unwrap.md): Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`.,

### Stylistic Issues
These rules are purely matters of style and are quite subjective.
* [chain-style](docs/rules/chain-style.md): Enforce a specific chain style: explicit, implicit, or explicit only when necessary.
* [identity-shorthand](docs/rules/identity-shorthand.md): Prefer identity shorthand syntax
* [matches-prop-shorthand](docs/rules/matches-prop-shorthand.md): Prefer matches property shorthand syntax
* [matches-shorthand](docs/rules/matches-shorthand.md): Prefer matches shorthand syntax
* [no-commit](docs/rules/no-commit.md): Do not use `.commit()` on chains that should end with `.value()`
* [no-single-chain](docs/rules/no-single-chain.md): Prevent chaining syntax for single method, e.g. `_(x).map().value()`
* [path-style](docs/rules/path-style.md): Enforce a specific path style for methods like `get` and `property`: array, string, or arrays only for deep paths.
* [prefer-chain](docs/rules/prefer-chain.md): Prefer a Lodash chain over nested Lodash calls
* [prefer-compact](docs/rules/prefer-compact.md): Prefer `_.compact` over `_.filter` for only truthy values.
* [prefer-filter](docs/rules/prefer-filter.md): Prefer `_.filter` over `_.forEach` with an `if` statement inside.
* [prefer-flat-map](docs/rules/prefer-flat-map.md): Prefer `_.flatMap` over consecutive `map` and `flatten`.
* [prefer-invoke-map](docs/rules/prefer-invoke-map.md): Prefer using `_.invoke` over `_.map` with a method call inside.
* [prefer-map](docs/rules/prefer-map.md): Prefer `_.map` over `_.forEach` with a `push` inside.
* [prefer-reject](docs/rules/prefer-reject.md): Prefer `_.reject` over filter with `!(expression)` or `x.prop1 !== value`
* [prefer-thru](docs/rules/prefer-thru.md): Prefer using `_.prototype.thru` in the chain and not call functions in the initial value, e.g. `_(x).thru(f).map(g)...`
* [prefer-wrapper-method](docs/rules/prefer-wrapper-method.md): Prefer using array and string methods in the chain and not the initial value, e.g. `_(str).split(' ')...`
* [preferred-alias](docs/rules/preferred-alias.md): Prefer using main method names instead of aliases. (fixable)
* [prop-shorthand](docs/rules/prop-shorthand.md): Use/forbid property shorthand syntax.

#### Preference over native
These rules are also stylistic choices, but they also recommend using Lodash instead of native functions and constructs.
* [prefer-constant](docs/rules/prefer-constant.md): Prefer `_.constant` over functions returning literals.
* [prefer-get](docs/rules/prefer-get.md): Prefer using `_.get` or `_.has` over expression chains like `a && a.b && a.b.c`.
* [prefer-includes](docs/rules/prefer-includes.md): Prefer `_.includes` over comparing `indexOf` to 1-11.
* [prefer-is-nil](docs/rules/prefer-is-nil.md): Prefer `_.isNil` over checks for both null and undefined.
* [prefer-lodash-chain](docs/rules/prefer-lodash-chain.md): Prefer using Lodash chains (e.g. `_.map`) over native and mixed chains.
* [prefer-lodash-method](docs/rules/prefer-lodash-method.md): Prefer using Lodash collection methods (e.g. `_.map`) over native array methods.
* [prefer-lodash-typecheck](docs/rules/prefer-lodash-typecheck.md): Prefer using `_.is*` methods over `typeof` and `instanceof` checks when applicable.
* [prefer-matches](docs/rules/prefer-matches.md): Prefer `_.matches` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
* [prefer-noop](docs/rules/prefer-noop.md): Prefer `_.noop` over empty functions.
* [prefer-over-quantifier](docs/rules/prefer-over-quantifier.md): Prefer `_.overSome` and `_.overEvery` instead of checks with `&&` and `||` for methods that have a boolean check iteratee.
* [prefer-startswith](docs/rules/prefer-startswith.md): Prefer `_.startsWith` over `a.indexOf(b) === 0`.
* [prefer-times](docs/rules/prefer-times.md): Prefer `_.times` over `_.map` without using the iteratee's arguments.

# Contributing
Contributions are always welcome! For more info, read our [contribution guide](.github/CONTRIBUTING.md).

# License

ESLint-plugin-lodash is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://npmjs.org/package/eslint-plugin-lodash
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-lodash.svg?style=flat-squarei

[deps-url]: https://david-dm.org/wix/eslint-plugin-lodash
[deps-image]: https://img.shields.io/david/dev/wix/eslint-plugin-lodash.svg?style=flat-square


[status-url]: https://github.com/wix/eslint-plugin-lodash/pulse
[status-image]: http://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square
