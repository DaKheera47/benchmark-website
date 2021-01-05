import { PORT, app } from "./config/config";
import { genericRoutes } from "./routes/generic.routes";

app.use("/", genericRoutes);

app.listen(PORT, () => console.log(`Server Now Running on Port: ${PORT}`));
