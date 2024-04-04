import express from 'express';
import sql from 'mssql';
import { sqlConfig } from './config.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
export const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
        const { recordset } = await pool.query`SELECT * FROM Reserva`
        return res.status(200).json(recordset)
    }
    catch(error){
        return res.status(500).json('Erro!')
    }
})

routes.post('/agendamento/novo', async (req, res)=>{
    try{
        const { Lugar, Data_reserva, hora_reserva, Descricao } = req.body
        await pool.query`INSERT INTO Reserva VALUES(${Lugar}, ${Data_reserva}, ${hora_reserva}, ${Descricao} )`
        return res.status(201).json('Deu certo!')
    }
    catch(error){
        return res.status(500).json('Erro!')
    }
})

routes.delete('/agendamento/excluir/:Id', async (req, res)=>{
    try{
        const { Id } = req.params
        await pool.query`DELETE FROM Reserva WHERE Id = ${Id}`
        return res.status(200).json('Deu certo!')
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Erro!');
    }
})

export default routes