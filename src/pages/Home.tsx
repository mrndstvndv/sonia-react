import { Button } from '@/components/ui/button';
import { IonPage } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=320"
          alt="Music collage background"
          width={320}
          height={600}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Dive Into Your
          <br />
          <span className="text-yellow-400">Sonia.</span>
        </h1>
        <p className="text-sm mb-6">Discover the perfect soundtrack for your life.</p>
        <Button className="w-full bg-[#FFE4C4] text-black hover:bg-[#FFE4C4]/90">Start Explore</Button>
      </div>
    </IonPage>
  );
};

export default Home;
