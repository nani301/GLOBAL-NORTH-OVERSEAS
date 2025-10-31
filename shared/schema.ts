
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredCountry: text("preferred_country").notNull(),
  courseOfInterest: text("course_of_interest").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  submittedAt: true,
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;

// New tables for searchable information

export const universities = pgTable("universities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  country: text("country").notNull(),
  description: text("description"),
  logoUrl: text("logo_url"),
  websiteUrl: text("website_url"),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  universityId: integer("university_id").references(() => universities.id),
  description: text("description"),
  level: text("level"), // e.g., Bachelor's, Master's, PhD
  duration: text("duration"),
});

export const scholarships = pgTable("scholarships", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  universityId: integer("university_id").references(() => universities.id),
  description: text("description"),
  amount: text("amount"),
  eligibilityCriteria: text("eligibility_criteria"),
});

export const accommodations = pgTable("accommodations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  universityId: integer("university_id").references(() => universities.id),
  description: text("description"),
  type: text("type"), // e.g., Hostel, PG, Apartment
  rent: text("rent"),
  websiteUrl: text("website_url"),
});

// Zod schemas for validation

export const insertUniversitySchema = createInsertSchema(universities).omit({ id: true });
export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertScholarshipSchema = createInsertSchema(scholarships).omit({ id: true });
export const insertAccommodationSchema = createInsertSchema(accommodations).omit({ id: true });

export type InsertUniversity = z.infer<typeof insertUniversitySchema>;
export type University = typeof universities.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;
export type InsertScholarship = z.infer<typeof insertScholarshipSchema>;
export type Scholarship = typeof scholarships.$inferSelect;
export type InsertAccommodation = z.infer<typeof insertAccommodationSchema>;
export type Accommodation = typeof accommodations.$inferSelect;
