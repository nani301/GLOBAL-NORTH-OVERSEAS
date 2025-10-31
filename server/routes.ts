
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertApplicationSchema, universities, courses, scholarships } from "@shared/schema";
import { ilike, or } from "drizzle-orm";

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

  app.get("/api/search", async (req, res) => {
    const { q } = req.query;

    if (!q || typeof q !== "string") {
      return res.status(400).json({ message: "Search query is required" });
    }

    try {
      const universitiesPromise = storage.db
        .select()
        .from(universities)
        .where(
          or(
            ilike(universities.name, `%${q}%`),
            ilike(universities.country, `%${q}%`),
            ilike(universities.description, `%${q}%`)
          )
        );

      const coursesPromise = storage.db
        .select()
        .from(courses)
        .where(
          or(
            ilike(courses.name, `%${q}%`),
            ilike(courses.description, `%${q}%`),
            ilike(courses.level, `%${q}%`)
          )
        );

      const scholarshipsPromise = storage.db
        .select()
        .from(scholarships)
        .where(
          or(
            ilike(scholarships.name, `%${q}%`),
            ilike(scholarships.description, `%${q}%`),
            ilike(scholarships.eligibilityCriteria, `%${q}%`)
          )
        );

      const [universitiesResults, coursesResults, scholarshipsResults] =
        await Promise.all([
          universitiesPromise,
          coursesPromise,
          scholarshipsPromise,
        ]);

      res.json({
        universities: universitiesResults,
        courses: coursesResults,
        scholarships: scholarshipsResults,
      });
    } catch (error) {
      console.error("Search error:", error);
      res.status(500).json({ message: "An error occurred during search" });
    }
  });

  app.post("/api/applications", async (req, res) => {
    const parseResult = insertApplicationSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json(parseResult.error);
    }
    await storage.db.insert(applications).values(parseResult.data);
    res.json({ message: "Application submitted successfully" });
  });

  return createServer(app);
}
