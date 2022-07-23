import express from 'express';

const resizeImages = (req:express.Request, res:express.Response, resize:Function) :void => {
let url = req.url;
let filename = req.query.filename;
let width = req.query.width;
let height = req.query.height;

console.log(`Filename: ${filename} \n Width: ${width} \n Height: ${height}`);

}

export default resizeImages;
