export default function Header() {
  var hour = new Date().getHours();
  var greet;

  if (hour >= 5 && hour < 11) greet = "Good morning";
  else if (hour >= 11 && hour < 18) greet = "Good afternoon";
  else if (hour >= 18 && hour < 23) greet = "Good evening";
  else if (hour === 23 || hour < 5) greet = "Hello, night owl";

  return (
    <header className="container max-w-6xl mx-auto px-4 mt-4 md:mt-12">
      <div className="flex justify-between items-end">
        <div>
          <p className="uppercase tracking-tight text-neutral-500 text-sm font-medium">{greet}</p>
          <h1 className="text-4xl font-extrabold">Home</h1>
        </div>
        <div className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-cover bg-center bg-neutral-500 dark:bg-neutral-700" style={{ backgroundImage: "url(/memoji.png)" }}>

        </div>
      </div>
      <hr className="divide my-2 border-neutral-200 dark:border-neutral-800"></hr>
    </header>
  );
}
