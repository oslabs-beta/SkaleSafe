import { Request, Response } from 'express';
const powershell = require('node-powershell');

export const usingPowershell = (req: Request, res: Response) => {
  let ps = new powershell({
    executionPolicy: 'Bypass',
    noProfile: true,
  });
  ps.addCommand(
    `Invoke-WebRequest -Method GET -Uri "http://localhost:9090/api/v1/query?query=your_metric_name"`
  );
  ps.invoke()
    .then((output: any) => {
      let data = JSON.parse(output);
      res.status(200).send(data);
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const url = 'http://localhost:9090';
export const anotherAttempt = async (req: Request, res: Response) => {
  const data =
      await powershell.$`curl -s ${url}/api/v1/label/__name__/values | jq -r ".data[]" | sort`;
    try {res.status(200).send(data) }
    catch((e: any) => res.status(500).send('error')
};

export const helloPowershell = powershell.$`echo "hello from PowerShell"`;
