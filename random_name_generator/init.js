import app from "./app";

const PORT = 1234

const handleListening = () =>{
    console.log("Listening On : http://localhost:" + PORT);
}

app.listen(PORT, handleListening);