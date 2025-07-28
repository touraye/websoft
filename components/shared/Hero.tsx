import Image from "next/image";

interface HeroProps {
    imgUrl: string;
}

export default function Hero({imgUrl}: HeroProps) {
    return (<>
        <div className="w-full h-auto rounded-3xl overflow-hidden mt-1">
        <Image
          src={imgUrl} // example "/assets/images/who-we-are-hero.webp"
          alt="Eagle flying over a bridge"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </>)
}