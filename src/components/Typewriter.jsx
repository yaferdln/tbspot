import { memo } from "react";
import { Typewriter as SimpleTypewriter } from "react-simple-typewriter";

const Typewriter = memo(({ words }) => (
  <SimpleTypewriter
    words={words}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={40}
    delaySpeed={1500}
  />
));

export default Typewriter;
