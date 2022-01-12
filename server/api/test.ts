import { useBody } from 'h3'

export default async (req, res) => {
    let body = await useBody(req)

    return body
}