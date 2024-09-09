import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';




export async function GET(req,res) {
    try {
     
     
        const connection = await mysql.createConnection(dbConfig);

        const [result] = await connection.execute(
            `SELECT * FROM TblRegistration` );

       
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration Info', result }),
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



export async function POST(request) {
    try {
        const data = await request.json();
     

        const {
            registrationNumber,
            firstName,
            middleName,
            lastName,
            emailId,
            phoneNumber,
            aadharNumber,
            panNumber,
            address1,
            address2,
            state,
            country,
            pinCode,
            usertype,
            Parentid
        } = data;

        if (!registrationNumber || !firstName || !lastName || !emailId || !phoneNumber) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const connection = await mysql.createConnection(dbConfig);


        const [result] = await connection.execute(
            `INSERT INTO TblRegistration  (
               UserType, registrationNumber, FirstName, MiddleName, LastName, EmailId,
                PhoneNumber, AadharNumber, PanNumber, Address1, Address2, State,
                Country, PinCode,Parentid, Password, CreatedDate
            ) VALUES (?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 123456, NOW())`,
            [
                usertype, 12, firstName, middleName, lastName, emailId,
                phoneNumber, aadharNumber, panNumber, address1, address2, state,
                country, pinCode,Parentid
            ]
        );
        console.log(result,"result")
        const registrationId = result.insertId;
        const registrationNumbers = `VPI${registrationId}`;
        const Groupdid =1000 + registrationId

        await connection.execute(
            `UPDATE TblRegistration SET RegistrationNumber = ?, Groupid = ? WHERE RegistrationId = ?`,
            [registrationNumbers, Groupdid, registrationId]
        );

        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration successful', result }),
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



export async function PUT(request) {
    try {
        const data = await request.json();
     

        const {
            RegistrationId,
            registrationNumber,
            firstName,
            middleName,
            lastName,
            emailId,
            phoneNumber,
            aadharNumber,
            panNumber,
            address1,
            address2,
            state,
            country,
            pinCode,
            usertype
        } = data;

        if (!registrationNumber || !firstName || !lastName || !emailId || !phoneNumber) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const connection = await mysql.createConnection(dbConfig);

      
        const [result] = await connection.execute(
            `UPDATE TblRegistration SET 
                FirstName = ?, MiddleName = ?, LastName = ?, EmailId = ?,
                PhoneNumber = ?, AadharNumber = ?, PanNumber = ?, Address1 = ?, 
                Address2 = ?, State = ?, Country = ?, PinCode = ?,
                UserType = ?
            WHERE RegistrationId = ?`,
            [
                firstName, middleName, lastName, emailId,
                phoneNumber, aadharNumber, panNumber, address1, address2, state,
                country, pinCode,usertype, RegistrationId, 
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


export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const registrationNumber = url.searchParams.get('RegistrationId');

        if (!registrationNumber) {
            return new Response(
                JSON.stringify({ error: 'Missing registration number' }),
                { status: 400 }
            );
        }

      
        const connection = await mysql.createConnection(dbConfig);

      
        const [result] = await connection.execute(
            `DELETE FROM TblRegistration WHERE RegistrationId = ?`,
            [RegistrationId]
        );

     
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration deleted successfully', result }),
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
