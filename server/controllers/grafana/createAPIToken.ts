import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const grafanaUrl = 'http://localhost:8888';
const username = 'admin';
const password = 'prom-operator';


// const createOrg = await axios.post(
//     `${grafanaUrl}/api/orgs`,
//     {
//         'name': 'apiorg'
//     },
//     {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         auth: {
//             username: username,
//             password: password,
//         }
//     }
//     const orgId = 
// );


// const response = await axios.post(
//     '${grafanaUrl}/api/user/using/',
//     '',
//     {
//         auth: {
//             username: 'admin',
//             password: 'admin'
//         }
//     }
// );


const createAPITokens = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createOrg = await axios.post(
        `${grafanaUrl}/api/orgs`,
        {
            'name': 'apiorg'
        },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                username: username,
                password: password,
            }
        }
    );
    const orgId: any = createOrg.data.orgId;
    res.locals.orgId = orgId;

    // const switchOrgs = await axios.post(
    //     `${grafanaUrl}/api/orgs/${orgId}/users`,
    //     // '{"loginOrEmail":"admin", "role": "Admin"}',
    //     {
    //         'loginOrEmail': 'admin',
    //         'role': 'Admin'
    //     },
    //     {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         auth: {
    //             username: username,
    //             password: password,
    //         }
    //     }
    // );
    
    const switchToOrg = await axios.post(
        `${grafanaUrl}/api/user/using/${orgId}`,
        // `${grafanaUrl}/api/user/using/2`,
        {
            auth: {
                username: username,
                password: password,
            }
        }
    );


    //not working 

    const getToken = await axios.post(
        `${grafanaUrl}/api/auth/keys`,
        {
            'name': 'apikeycurl',
            'role': 'Admin'
        },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                username: username,
                password: password,
            }
        }
    );
    const token: any = getToken.data;
    console.log(token);
    res.locals.token = token;

    //token format
    //{"id":1,"name":"apikeycurl","key":"eyJrIjoiWElrZUxsV214WlhOMnplc3BrWVhsNlZDTlNiRVBPeGgiLCJuIjoiYXBpa2V5Y3VybCIsImlkIjo0fQ=="}

    // save token to db


    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    next();

};

export default createAPITokens;