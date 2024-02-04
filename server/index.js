import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import { kpis} from "./data/data.js";

/* Routes */
app.use("/kpi", kpiRoutes) //routes giriş noktası

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    
    // bunları bir kere çalıştırsak yeterli
    // await mongoose.connection.db.dropDatabase(); //duplicate olmasın diye
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));