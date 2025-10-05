import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertApplicationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin login endpoint
  app.post("/api/admin/login", async (req, res) => {
    const { email, password } = req.body;
    
    // Check against hardcoded admin credentials
    const ADMIN_EMAIL = "Ravindhar@GNO.com";
    const ADMIN_PASSWORD = "7601081989";
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  // Submit application endpoint
  app.post("/api/applications", async (req, res) => {
    try {
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(validatedData);
      res.json({ success: true, application });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  });

  // Get all applications endpoint (protected)
  app.get("/api/applications", async (req, res) => {
    try {
      const applications = await storage.getAllApplications();
      res.json({ success: true, applications });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
