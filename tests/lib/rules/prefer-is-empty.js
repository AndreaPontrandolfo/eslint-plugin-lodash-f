'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../src/rules/prefer-is-empty')
const ruleTesterUtil = require('../testUtil/ruleTesterUtil')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = ruleTesterUtil.getRuleTester()
const {withDefaultPragma, fromMessage} = require('../testUtil/optionsUtil')
const toErrorObject = fromMessage('Prefer isEmpty over manually checking for length value.')
ruleTester.run('prefer-is-empty', rule, {
    valid: [
        'const myLengthEqualZero = isEmpty(myvar);'
    ].map(withDefaultPragma),
    invalid: [
        'const myLengthEqualZero = myvar.length === 0;'].map(withDefaultPragma).map(toErrorObject)
})
