
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { University, Course, Scholarship } from "@shared/schema";

const searchAPI = async (query: string) => {
  if (!query) return null;
  const res = await fetch(`/api/search?q=${query}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchAPI(searchTerm),
    enabled: !!searchTerm, // Only run query if searchTerm is not empty
  });

  const handleSearch = () => {
    setSearchTerm(query);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex w-full max-w-2xl mx-auto items-center space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Search for universities, courses, scholarships..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {data && (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.universities.map((uni: University) => (
                <Card key={uni.id}>
                  <CardHeader>
                    <CardTitle>{uni.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{uni.country}</p>
                    <p className="text-sm text-gray-500">{uni.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {data.universities.length === 0 && <p>No universities found.</p>}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.courses.map((course: Course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{course.level}</p>
                     <p className="text-sm text-gray-500">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {data.courses.length === 0 && <p>No courses found.</p>}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.scholarships.map((scholarship: Scholarship) => (
                <Card key={scholarship.id}>
                  <CardHeader>
                    <CardTitle>{scholarship.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{scholarship.amount}</p>
                    <p className="text-sm text-gray-500">{scholarship.eligibilityCriteria}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {data.scholarships.length === 0 && <p>No scholarships found.</p>}
          </section>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
