import { useBody } from 'h3'
import fs from 'fs'

const test = async (req) => {
    let body = await useBody(req)
    console.log('OKKKKK')
    fs.writeFileSync('data.json', JSON.stringify(body))
}

export default async (req, res) => {
    console.log("Yo")
    switch (req.method) {
        case 'GET': console.log("YoKK"); return fs.readFileSync('data.json')
        case 'POST': test(req); return 'OK'
    } 
}