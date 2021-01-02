import { PORT, app } from "./config/config";
import { authRoutes } from "./routes/authRoutes";

app.use("/", authRoutes);

app.listen(PORT, () => console.log(`Server Now Running on Port: ${PORT}`));
