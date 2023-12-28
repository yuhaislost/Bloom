import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    if (req.method != 'POST')
    {
        return res.status(405).end();
    }

    try {
        const {email, name, password} = req.body;

        const user = await prismadb.user.findUnique({
            where: {
                email: email,
            }
        });

        if (user)
        {
            return res.status(422).json({error: 'Email already registered'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prismadb.user.create({
            data:{
                email: email,
                name: name,
                password: hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        return res.status(200).json(newUser);

    }catch(error)
    {
        console.log(error);
        return res.status(400).end();
    }
}