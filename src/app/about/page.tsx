export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      backgroundImage: 'url("/bg.png")', 
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-[#F285AF] to-[#C43670] text-transparent bg-clip-text">
            About Us
          </h1>
          <p className="text-[#C43670] text-center mb-12">
            Dedicated to providing confidential and professional HIV testing services.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#FBD9E5] mb-8">
            <p className="text-[#C43670]/80 mb-6">
              Your trusted partner in confidential HIV-related healthcare access. Hivelink offers a secure,
              stigma-free platform for booking medical appointments with ease and privacy. Designed to
              protect your confidentiality and support your well-being, we help connect you to timely,
              judgment-free care—because everyone deserves safe, respectful, and accessible healthcare.
            </p>
            
            <h2 className="text-2xl font-bold text-[#C43670] mb-6">Our System's Core Principles</h2>
            
            <ol className="space-y-4 text-[#C43670]/80 list-decimal pl-6">
              <li className="pl-2">
                The appointment system aims to provide a secure and discreet platform that ensures the
                privacy of individuals seeking HIV-related healthcare services.
              </li>
              <li className="pl-2">
                It seeks to improve accessibility by allowing clients to book appointments conveniently
                and without fear of stigma or discrimination.
              </li>
              <li className="pl-2">
                The system is designed to create a safe and judgment-free environment, reducing the
                anxiety and psychological barriers associated with seeking HIV-related medical care.
              </li>
              <li className="pl-2">
                By streamlining the scheduling process, the system helps healthcare providers manage
                appointments efficiently, reducing wait times and ensuring a smooth patient flow.
              </li>
              <li className="pl-2">
                It encourages individuals to seek timely medical consultations and follow-ups by
                offering a user-friendly and confidential booking platform.
              </li>
              <li className="pl-2">
                The system is developed in compliance with ethical and legal standards to ensure
                patient confidentiality and data security in HIV-related healthcare services.
              </li>
            </ol>
          </div>
          
          <h2 className="text-2xl font-bold text-[#C43670] mb-6 text-center">The Visionaries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/Macale, Janna Mae P.png" 
                  alt="Janna Mae P. Macale" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Janna Mae P. Macale</h3>
              <p className="text-[#C43670]/80 text-center text-sm">
              Proponent
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/Lacuata, Carl Marius M..png" 
                  alt="Carl Marius M. Lacuata" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Carl Marius M. Lacuata</h3>
              <p className="text-[#C43670]/80 text-center text-sm">
                Proponent
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/Lacsamana_Mariah.JPG" 
                  alt="Mariah Lacsamana" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Mariah Altea E. Lacsamana</h3>
              <p className="text-[#C43670]/80 text-center text-sm">
                Proponent
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/leus.png" 
                  alt="Leus Ponce" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Ponce Erhomar V. Leus</h3>
              <p className="text-[#C43670]/80 text-center text-sm">

                Proponent
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/genesis.PNG" 
                  alt="Genesis Llaneras" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Genesis U. Llaneras </h3>
              <p className="text-[#C43670]/80 text-center text-sm">
                Proponent
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#FBD9E5] flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img 
                  src="/justin.jpg" 
                  alt="Justin Agustin" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-md font-bold text-[#C43670] mb-1">Justin Agustin</h3>
              <p className="text-[#C43670]/80 text-center text-sm">
                Developer
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#FBD9E5]">
            <h2 className="text-2xl font-bold text-[#C43670] mb-4">Our Commitment</h2>
            <p className="text-[#C43670]/80">
              We are dedicated to promoting health awareness and providing support to our community. Our team works 
              tirelessly to ensure that every individual who uses our service feels respected, supported, and 
              empowered to take charge of their health journey without fear of judgment or stigma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 