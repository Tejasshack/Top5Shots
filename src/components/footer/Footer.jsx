'use client';

const Footer = () => {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        { href: "#", name: "Contact" },
        { href: "#", name: "Support" },
        { href: "#", name: "Documentation" },
        { href: "#", name: "Pricing" },
      ],
    },
    {
      label: "About",
      items: [
        { href: "#", name: "Terms" },
        { href: "#", name: "License" },
        { href: "#", name: "Privacy" },
        { href: "#", name: "About Us" },
      ],
    },
    {
      label: "Explore",
      items: [
        { href: "#", name: "Showcase" },
        { href: "#", name: "Roadmap" },
        { href: "#", name: "Languages" },
        { href: "#", name: "Blog" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "#", name: "Partners" },
        { href: "#", name: "Team" },
        { href: "#", name: "Careers" },
      ],
    },
  ];

  return (
    <footer className="pt-10 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Get our beautiful newsletter straight to your inbox.
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-200 font-semibold sm:pb-2">{item.label}</h4>
              {item.items.map((el, index) => (
                <li key={index}>
                  <a href={el.href} className="duration-150 hover:text-gray-400">
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-300">© 2025 Your Company. All rights reserved.</p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            <a href="#" className="hover:text-gray-500">Facebook</a>
            <a href="#" className="hover:text-gray-500">Twitter</a>
            <a href="#" className="hover:text-gray-500">GitHub</a>
            <a href="#" className="hover:text-gray-500">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
