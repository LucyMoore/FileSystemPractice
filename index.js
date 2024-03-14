import { readFile } from 'node:fs'

async function readCats() {
  try {
    let data = await readFile('./data.json', (err, data) => {
      console.log(data)
    })
  } catch (error) {
    console.log(error)
  }
}

console.log(readCats)
