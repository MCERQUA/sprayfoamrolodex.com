import { UserPlus } from "lucide-react";

/**
 * Mobile-only sticky bottom bar — single CTA to the add-listing form.
 */
export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-rolodex-tab shadow-[0_-4px_16px_rgba(0,0,0,0.15)] flex">
      <a
        href="/#add-listing"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-center text-rolodex-tab-foreground font-bold cursor-pointer"
      >
        <UserPlus className="w-4 h-4" />
        Add Your Listing
      </a>
    </div>
  );
}
