import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';

//change password
export async function PUT(request) {
    try {
        const data = await request.json();
     

        const {
            RegistrationId,Password
           
        } = data;

        // if (!registrationNumber || !firstName || !lastName || !emailId || !phoneNumber) {
        //     return new Response(
        //         JSON.stringify({ error: 'Missing required fields' }),
        //         { status: 400 }
        //     );
        // }

        const connection = await mysql.createConnection(dbConfig);

      
        const [result] = await connection.execute(
            `UPDATE TblRegistration SET 
                Password = ?
            WHERE RegistrationId = ?`,
            [
                Password, RegistrationId, 
            ]
        );

     
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration updated successfully', result }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}
