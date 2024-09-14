const NavigationBar = () => {
  return (
    <nav className="sticky top-16 left-0 w-[30%] h-[calc(100dvh-4rem)] bg-gray-200">
      <ul>
        <li className="cursor-pointer">GPT</li>
        <li className="cursor-pointer">Claud</li>
        <li className="cursor-pointer">Gemini</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
