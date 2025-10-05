import { useEffect, useMemo, useRef } from "react";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { loadGoogleMaps } from "@/lib/google";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSelect: (cityOrAddress: string) => void;
  placeholder?: string;
};

const TOP_CITIES = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Indore",
];

export default function LocationInput({ value, onChange, onSelect, placeholder }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const apiKey = useMemo(() => import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined, []);

  useEffect(() => {
    if (!apiKey) return;
    loadGoogleMaps(apiKey).then(() => {
      if (!inputRef.current || !(window as any).google?.maps?.places) return;
      const autocomplete = new (window as any).google.maps.places.Autocomplete(inputRef.current!, {
        types: ["geocode"],
        fields: ["formatted_address"],
      });
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const addr = place?.formatted_address as string | undefined;
        if (addr) onSelect(addr);
      });
    }).catch(() => {
      // Ignore load failure; fallback to top cities only
    });
  }, [apiKey, onSelect]);

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex-1 flex items-center px-4 py-2 bg-muted rounded-xl">
        <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && value) onSelect(value); }}
          list="top-cities"
          placeholder={placeholder ?? "Enter your delivery location"}
          className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground"
        />
      </div>
      <datalist id="top-cities">
        {TOP_CITIES.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>
    </div>
  );
}


