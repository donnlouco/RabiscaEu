const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const horariosPadrao = [
    "10:00",
    "11:30",
    "13:00",
    "15:00",
    "16:30",
    "18:00"
];

app.get("/disponibilidade", (req, res) => {
    const data = req.query.data;

    if (!data) {
        return res.status(400).json({ erro: "A data é obrigatória" });
    }

    const dia = new Date(data).getDate();

    const horarios = dia % 2 === 0 
        ? horariosPadrao.slice(0, 3)
        : horariosPadrao.slice(3);

    res.json(horarios);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
