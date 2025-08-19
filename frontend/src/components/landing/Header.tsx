import Image from 'next/image';
import logo from '/public/logo.png'; // put your logo in public folder

export default function Header() {
  return (
    <header className="">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
        <span className="text-xl font-bold text-gray-800">MyWebsite</span>
      </div>
    </header>
  );
}

