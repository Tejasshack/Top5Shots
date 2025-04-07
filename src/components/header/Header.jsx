export default function Header({ children }) {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8 text-center shadow-lg flex  items-center mt-10">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide animate-fade-in mt-20">
          Welcome to <span className="text-blue-400">Top5shots</span>
        </h1>
        <h2 className="text-2xl mt-4 opacity-80 font-serif">
           Top5 best services & products for you
        </h2>
      </div>
      {children && <div className="mt-12 w-full">{children}</div>}
    </header>
  );
}
