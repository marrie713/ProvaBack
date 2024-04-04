USE Sesi

CREATE TABLE Reserva 
( Id INT IDENTITY PRIMARY KEY, 
  Lugar VARCHAR(20),
  Data_reserva VARCHAR(15),
  hora_reserva VARCHAR(10),
  Descricao Varchar(50)
)

INSERT INTO Reserva VALUES
('Biblioteca', '2023-05-25', '14:00', 'Aula de Analise Obras');

SELECT * FROM Reserva