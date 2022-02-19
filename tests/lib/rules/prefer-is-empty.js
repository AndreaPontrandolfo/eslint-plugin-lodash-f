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
        'const myLengthEqualZero = !isEmpty(myVar);',
        'const myLengthEqualZero = isEmpty(myVar);',
        'const myLengthEqualZero = myVar.length == 0;',
        'const myLengthEqualZero = myVar.length;',
        'const myLengthEqualZero = myVar;'
    ].map(withDefaultPragma),
    invalid: [
        'const myLengthEqualZero = myVar.length === 0;',
        'const myLengthEqualZero = myVar.length > 0;',
        'const myLengthEqualZero = myVar.myProp.mySecondProp.length === 0;',
        'const myLengthEqualZero = myVar.myProp.mySecondProp.length > 0;'
    ].map(withDefaultPragma).map(toErrorObject)
})
