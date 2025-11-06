import { Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const MobileContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-3 px-4">
        <a
          href="tel:+919455335010"
          className="flex flex-col items-center space-y-1 text-primary hover:opacity-80 transition-opacity"
        >
          <div className="bg-primary text-primary-foreground p-2.5 rounded-full">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">Call</span>
        </a>

        <a
          href="https://wa.me/919455335010"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-1 text-secondary hover:opacity-80 transition-opacity"
        >
          <div className="bg-secondary text-secondary-foreground p-2.5 rounded-full">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        <Link
          to="/contact"
          className="flex flex-col items-center space-y-1 text-accent hover:opacity-80 transition-opacity"
        >
          <div className="bg-accent text-accent-foreground p-2.5 rounded-full">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">Enquiry</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileContactBar;