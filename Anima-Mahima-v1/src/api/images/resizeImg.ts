import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

const resizeImages = async (
    req: express.Request,
    res: express.Response,
    resize: Function
): Promise<void> => {
    const url = req.url;
    const filename: string = req.query.filename as string;
    const delimitedFileName = filename.split('.')[0];
    const _width: number = Number(req.query.width);
    const _height: number = Number(req.query.height);
    const path: string = './assets/full/' + filename;
    const getImageFromFile = fsPromises
        .readFile(path)
        .then((result) => getTransformedImage(result));

    
    const getTransformedImage = async (imgBuffer: Buffer) => {
        await sharp(imgBuffer)
            .resize(_width, _height)
            .jpeg({ mozjpeg: true })
            .toFile(
                `./assets/thumb/${delimitedFileName}_${_width}_${_height}.jpg`
            );
        console.log(
            await sharp(imgBuffer)
                .resize(_width, _height)
                .jpeg({ mozjpeg: true })
                .toBuffer()
        );
    };
    const __dirname = `./`;
    const thumbPath = `/assets/thumb/${delimitedFileName}_${_width}_${_height}.jpg`;
    await res.sendFile(thumbPath,{root : __dirname});
};

export default resizeImages;
