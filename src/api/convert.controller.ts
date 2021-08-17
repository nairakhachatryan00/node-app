import { Request, Response } from 'express';
import { convertService } from "../services/convert.service";
import readline from "readline";
import fs from "fs";

class ConvertController {
    convert (req: Request, res: Response, next: any) {
        let result = {};

        const rl = readline.createInterface({
            input: fs.createReadStream('./src/config.txt')
        });
        rl.on('line', (line: string) => {
            let lineData = line.split('=');
            if(lineData.length === 2) {
                let path = lineData[0].split('.');
                convertService.findAndSet(result, path, lineData[1])
            }
        });

        rl.on('close', () => {
            fs.writeFileSync('./src/config.json', JSON.stringify(result));
        });

        rl.on('error', function(err: any) {
            next(err);
        });
        res.send('The file successfully converted!');
    }
}

export const convertController = new ConvertController();

