const fs = require('fs')

const content = fs.readFileSync('./a.txt')
console.log(content)

const path1 = './a.txt'
console.log(path1 + 'path1')
const path =
  'C:\\Users\\yxp2918\\AppData\\Local\\Temp\\egg-multipart-tmp\\cost_record\\2023\\04\\07\\22\\bd8266b2-6b9c-4977-bcd4-2bdb2a9bcc79.png'
console.log(path.replace(/\\/g, '/'))
console.log(fs.readFileSync(path.replace(/\\/g, '/')))
console.log(
  fs.readFileSync(
    'C:/Users/yxp2918/AppData/Local/Temp/egg-multipart-tmp/cost_record/2023/04/07/22/d846948a-4d80-4d5f-a6eb-afaafe2aba66.jpg'
  )
)
