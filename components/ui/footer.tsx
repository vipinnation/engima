const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-gray-600 text-white px-4 py-2 fixed bottom-0 w-full">
        <div></div>
        <div className=" flex xs:flex-col justify-between">
          <p>
            <span>&copy;{new Date().getFullYear()} </span>
            <span className="mx-2"> Enigma</span>|
            <span className="mx-2"> All rights reserved</span>|
            <span className="mr-2 ml-2 text-md hover:text-gray-500 cursor-pointer">
              Terms And Conditions
            </span>
            |
            <span className="mx-2 text-md hover:text-gray-500 cursor-pointer">
              Privacy Policy
            </span>
          </p>
          <p>
            <span className="mx-2 text-md hover:text-gray-500 cursor-pointer">
              Home
            </span>
            |
            <span className="mx-2 text-md hover:text-gray-500 cursor-pointer">
              Blog
            </span>
            |
            <span className="mx-2 text-md hover:text-gray-500 cursor-pointer">
              Search
            </span>
            |
            <span className="mx-2 text-md hover:text-gray-500 cursor-pointer">
              Contact Us
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
