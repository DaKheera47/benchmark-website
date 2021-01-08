import { PORT, app } from "./config/config";
import { genericRoutes } from "./routes/generic.routes";
import { authRoutes } from "./routes/auth.routes";

app.use("/", genericRoutes);
app.use("/", authRoutes);

app.listen(PORT, () => console.log(`Server Now Running on Port: ${PORT}`));
