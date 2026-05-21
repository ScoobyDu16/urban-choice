import { GOOGLE_MAP_URL } from "../../../constants/config";
import { GOOGLE_MAPS_LINK } from "../../../constants";
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  embedUrl?: string;
  height?: string;
  showLink?: boolean;
}

export default function GoogleMap({
  embedUrl = GOOGLE_MAP_URL,
  height = "h-96",
  showLink = true,
}: GoogleMapProps) {
  return (
    <div>
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <iframe
          src={embedUrl}
          className={`w-full ${height} rounded-lg`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Urban Choice Location"
        />
      </div>
      {showLink && (
        <div className="mt-6 text-center">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            <MapPin size={20} />
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
