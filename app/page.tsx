import Image from 'next/image';
import { Construction } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="w-48">
              <Image 
                src="/logo.svg" 
                alt="Bionx Bros Logo" 
                width={240}
                height={74}
                priority
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-[#374B6D]">
                Under<br />Construction
              </h1>

              <div className="space-y-6 text-gray-600 max-w-xl">
                <p className="text-lg">
                  Bionx Bros. is in the workshop – and so is our website!
                </p>
                
                <p>
                  Right now, we're in the middle of one serious build session. Just like tuning your bike to perfection, we're tightening every bolt, adjusting every gear, and making sure this site is ready to ride as hard as our parts do.
                </p>

                <p>
                  Yeah, we're under construction – but like any great ride, the best builds take time. So, while we fine-tune the details (and maybe torque a few bolts), bookmark this page and get ready to shift into high gear.
                </p>

                <p>
                  Check back soon and see what we've built – trust us, it'll be wheely good!
                </p>

                <p className="italic">
                  – The Bionx Bros. Team
                </p>
              </div>

              <div className="text-sm text-gray-500">
                © Bionx Bros. | 2024, All Rights Reserved
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <Image
              src="/wheel.webp"
              alt="Bike Wheel"
              width={800}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}