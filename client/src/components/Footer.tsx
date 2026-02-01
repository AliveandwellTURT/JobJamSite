export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} JobJam. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#privacy"
              className="text-muted-foreground hover-elevate active-elevate-2 rounded px-2 py-1"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#refund"
              className="text-muted-foreground hover-elevate active-elevate-2 rounded px-2 py-1"
              data-testid="link-refund"
            >
              Refund Policy
            </a>
            <a
              href="#guarantee"
              className="text-muted-foreground hover-elevate active-elevate-2 rounded px-2 py-1"
              data-testid="link-guarantee"
            >
              Guarantee Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
