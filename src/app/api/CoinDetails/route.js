import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';


export async function POST(request) {
    try {
        const data = await request.json();

      
        const { userid } = data;
     
        const connection = await mysql.createConnection(dbConfig);

        const [result] = await connection.execute(
            `SELECT * FROM Tblcoindetails  where userid = ?`,[userid] );

       
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'condetailinfo Info', result }),
            { status: 200 }
        );
    } catch (error) {
        console.log('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}
