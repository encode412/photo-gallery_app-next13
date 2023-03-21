import Instagram from "./components/Instagram";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <div>
      <Hero
        heading='Freeze each moment'
        message='Go back in time and keep them alive!'
        buttonText='Break the time barrier'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
