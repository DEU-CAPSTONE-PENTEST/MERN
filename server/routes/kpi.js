import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {   //route: client isteğine nasıl cevap veriyoruz
    try {
      const kpis = await KPI.find();
      res.status(200).json(kpis); //200 klasik onay
    } catch (error) {
      res.status(404).json({ message: error.message }); //404 klasik hata
    }
  });
  
  export default router;



  
