export default function Header() {
  var hour = new Date().getHours();
  var greet;

  if (hour >= 5 && hour < 11) greet = "Good morning";
  else if (hour >= 11 && hour < 18) greet = "Good afternoon";
  else if (hour >= 18 && hour < 23) greet = "Good evening";
  else if (hour === 23 || hour < 5) greet = "Hello, night owl";

  return (
    <header className="container max-w-7xl mx-auto px-4 mt-4 md:mt-12">
      <p className="uppercase tracking-tight text-neutral-500 text-sm font-medium">{greet}</p>
      <h1 className="text-4xl font-extrabold">Home</h1>
      <hr className="divide my-2 border-neutral-200 dark:border-neutral-800"></hr>
    </header>
  );
}
