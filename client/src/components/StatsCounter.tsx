import { Globe, Building2, Users, UserCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
}

function CountUpAnimation({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const incrementTime = duration / end;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + 1;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <div ref={elementRef} className="text-4xl lg:text-5xl font-bold text-primary" data-testid={`text-count-${end}`}>
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  const stats: StatItem[] = [
    { icon: <Globe className="w-8 h-8" />, count: 25, label: "Countries", suffix: "+" },
    { icon: <Building2 className="w-8 h-8" />, count: 500, label: "Universities", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, count: 10000, label: "Students", suffix: "+" },
    { icon: <UserCheck className="w-8 h-8" />, count: 50, label: "Counsellors", suffix: "+" },
  ];

  return (
    <section className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4" data-testid={`stat-${stat.label.toLowerCase()}`}>
              <div className="flex justify-center text-primary">
                {stat.icon}
              </div>
              <CountUpAnimation end={stat.count} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
