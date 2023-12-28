// import { compare } from 'bcrypt';
// import { NextApiRequest, NextApiResponse } from 'next';
// import prismadb from '@/lib/prismadb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse)
// {
//     if (req.method != 'POST')
//     {
//         return res.status(405).end();
//     }

//     try{
//         const {email, password} = req.body;

//         const user = await prismadb.user.findUnique({
//             where: {
//                 email: email,
//             }
//         });

//         if (!user)
//         {
//             return res.status(404).json({error: "Email has not been registered"});
//         }

        

//     }catch{

//     }
// }