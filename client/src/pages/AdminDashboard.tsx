import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { LogOut } from "lucide-react";
import type { Application } from "@shared/schema";
import logoImage from "@assets/Gemini_Generated_Image_b88tub88tub88tub_1759648053876.png";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  const { data, isLoading } = useQuery<{ success: boolean; applications: Application[] }>({
    queryKey: ["/api/applications"],
  });

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setLocation("/admin/login");
  };

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Global North Overseas" className="h-10 w-auto" />
              <div>
                <h1 className="font-serif font-bold text-lg">Admin Dashboard</h1>
                <p className="text-xs text-muted-foreground">Welcome, Ravindhar</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Application Submissions</CardTitle>
            <CardDescription>
              View all student applications submitted through the contact form
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">
                Loading applications...
              </div>
            ) : data?.applications && data.applications.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Preferred Country</TableHead>
                      <TableHead>Course of Interest</TableHead>
                      <TableHead>Submitted At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.applications.map((application) => (
                      <TableRow key={application.id} data-testid={`application-row-${application.id}`}>
                        <TableCell className="font-medium">{application.id}</TableCell>
                        <TableCell>{application.fullName}</TableCell>
                        <TableCell>{application.email}</TableCell>
                        <TableCell>{application.phone}</TableCell>
                        <TableCell>{application.preferredCountry}</TableCell>
                        <TableCell>{application.courseOfInterest}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDate(application.submittedAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">No applications yet</p>
                <p className="text-sm text-muted-foreground">
                  Applications submitted through the contact form will appear here
                </p>
              </div>
            )}

            {data?.applications && data.applications.length > 0 && (
              <div className="mt-4 text-sm text-muted-foreground">
                Total Applications: {data.applications.length}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
