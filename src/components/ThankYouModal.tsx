import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, Phone } from "lucide-react";

interface ThankYouModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formSource?: string;
}

const ThankYouModal = ({ open, onOpenChange }: ThankYouModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-secondary border-cream/20 text-cream p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-black text-cream">
            Request Received!
          </h3>
          <p className="text-cream/70 font-body text-sm leading-relaxed">
            Thank you for reaching out. We'll review your request and call you back — usually within minutes during business hours.
          </p>
          <div className="h-px w-full bg-cream/10 my-1" />
          <p className="text-cream/50 font-body text-xs">
            Need help right now?
          </p>
          <a
            href="tel:9549106883"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-primary/90 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call (954) 910-6883
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouModal;
