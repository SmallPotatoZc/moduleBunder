const detective = require('detective')
const resolve = require('resolve').sync
const fs = require('fs')
const path = require('path')

let ID = 0
function createModuleObject(filepath) {
  const source = fs.readFileSync(filepath, 'utf-8')
  const requires = detective(source)
  const id = ID++

      return {
    id, filepath, source, requires
  }
}