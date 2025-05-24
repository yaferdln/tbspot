import { memo } from "react";
import { Typewriter as SimpleTypewriter } from "react-simple-typewriter";

const Typewriter = memo(({ words }) => (
  <SimpleTypewriter
    words={words}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={30}
    delaySpeed={1000}
  />
));

export default Typewriter;
