
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-portfolio-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-portfolio-secondary dark:text-gray-400">
          &copy; {currentYear} Chan-Yen Hsiung
        </p>
      </div>
    </footer>
  );
}
