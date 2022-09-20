import {
  HTMLAttributes,
  HtmlHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { gsap } from "gsap";

type BoxAnimatedProps = {
  children: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;
export const BoxAnimated = ({ children, ...rest }: BoxAnimatedProps) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = [boxRef.current];

    gsap.fromTo(
      box,
      {
        opacity: 0,
        scale: 0.8,
      },

      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      }
    );
  }, []);

  return (
    <div ref={boxRef} {...rest}>
      {children}
    </div>
  );
};
