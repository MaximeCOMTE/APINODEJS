import http from 'http'
import routes from './routes'

const webServer = http.createServer(routes.handler)



/*
import  fs from 'fs'
import {printMessage} from "./module.js"
import somUtilsFunction from './module.js'

const webServer = http.createServer((request,response) => {
    const url = request.url;
    const method = request.method;

    if (url ==='/'){
        response.write('<html>')
        response.write('<head><title>Enter message</title></head>')
        response.write('<body><form ACTION="/message" METHOD="POST"><input type="text" id="test" name="test" required\n' +
            '       ></form><input type="submit">\n</body>')
        response.write('</html>')
        return response.end()

        if (url === '/message' && method === 'POST'){
            fs.writeFileSync('message.txt', 'test')


            const body = []
            request.on('data', (chunk) =>{
                body.push(chunk)
            })

            request.on('end', () =>{
                const parsedBody = Buffer.concat(body).toString()
                const message = parsedBody.split('=')[1]
                fs.writeFileSync('message.txt', 'test')
                console.log('parsedBody', parsedBody );
            })
            response.statusCode = 302;
            response.setHeader('Location', '/')
            return response.end()
        }
    }

}) */

webServer.listen(3000)