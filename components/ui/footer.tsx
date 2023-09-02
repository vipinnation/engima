const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-gray-600 text-white px-4 py-2 fixed bottom-0 w-full">
        <div className=" flex xs:flex-col justify-between">
          <p>Enigma</p>
          <p>&copy;{new Date().getFullYear()} | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
