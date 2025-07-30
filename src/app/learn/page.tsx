import React from 'react'

const LearnPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      backgroundImage: 'url("/hl-bg.png")', 
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#69a5ff] to-[#14b5ff] text-transparent bg-clip-text">
            Understanding HIV
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              HIV, or Human Immunodeficiency Virus, affects the immune system by targeting specific cells
              that help fight infection. Over time, if left untreated, it can lead to a more advanced stage known
              as AIDS. Thanks to medical advances, HIV is now a manageable condition, and early detection
              plays a key role in maintaining a healthy life.
            </p>

            <div className="border-2 border-[#d9ebfb] p-4 rounded-xl bg-[#FBD9E5]/10 my-6">
              <p className="text-[#000000]/80 font-semibold text-center">
                Did you know? More than 39 million people around the world are currently living with HIV (UNAIDS, 2023).
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">HIV in the Philippines</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              As of 2025, the Philippines faces a 500% increase in HIV cases over the past decade, according to the Department of Health and UNAIDS. This makes it one of the fastest-growing HIV epidemics in Southeast Asia.
            </p>

            {/* <ul className="list-disc pl-6 space-y-4 text-[#000000]/80">
              <li>
                The 25–34 age group accounts for the highest number of cases, making up 48% of the total.
              </li>
              <li>
                The virus is most prevalent in the National Capital Region (NCR), followed by
                Region IV-A (CALABARZON) and Region III (Central Luzon).
              </li>
            </ul> */}

            <p className="text-[#000000]/80 mt-4">
              These figures highlight the urgent need for accessible testing and prevention services,
              especially among young adults and urban populations.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">HIV in CALABARZON</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80">
             In CALABARZON, the crisis is deeply felt, with a rising number of young Filipinos—especially those aged 15 to 34—testing positive. The majority of new infections occur among men who have sex with men (MSM), transgender individuals, and youth with limited access to testing, education, and healthcare.
              <br /><br />  Stigma, discrimination, and lack of accessible resources continue to fuel this silent epidemic in CALABARZON and beyond
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">How HIV is Transmitted</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              HIV is passed from one person to another through contact with certain body fluids. The most
              common ways it spreads include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#000000]/80 mb-4">
              <li>Unprotected sexual intercourse</li>
              <li>Sharing needles or syringes</li>
              <li>From a parent to child during childbirth or breastfeeding</li>
              <li>Blood transfusions involving unscreened blood (now very rare)</li>
            </ul>

            <p className="text-[#000000]/80">
              HIV is not transmitted through everyday contact such as hugging, sharing utensils, or using the
              same toilet.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">Why HIV Testing Matters</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              Many people who have HIV do not show any symptoms in the early stages. The only way to
              know your status is through testing.
            </p>

            <p className="text-[#14b5ff]/80 mb-2">Getting tested can:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#000000]/80 mb-4">
              <li>Help you begin treatment early, if needed</li>
              <li>Prevent unintentional transmission to others</li>
              <li>Give you peace of mind and control over your health</li>
            </ul>

            <div className="border-2 border-[#d9ebfb] p-4 rounded-xl bg-[#FBD9E5]/10 my-4">
              <p className="text-[#000000]/80 font-semibold text-center">
                Did You Know? Around 1 in 5 people living with HIV are unaware of their status.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">Treatment and Living Well</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              HIV can be effectively managed with antiretroviral therapy (ART), a daily treatment that lowers
              the virus in your body to undetectable levels. With consistent care:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#000000]/80">
              <li>People with HIV can live long, fulfilling lives</li>
              <li>The virus can become untransmittable to sexual partners (a concept known as U=U)</li>
            </ul>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">Common Misconceptions</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-[#000000]/80 border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-[#d9ebfb] p-3 bg-[#FBD9E5]/20 text-[#000000]/80 font-semibold">Myth</th>
                    <th className="border-2 border-[#d9ebfb] p-3 bg-[#FBD9E5]/20 text-[#000000]/80 font-semibold">Fact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-[#d9ebfb] p-3">HIV is spread by touch or sharing food.</td>
                    <td className="border-2 border-[#d9ebfb] p-3">HIV is not transmitted through casual contact.</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-[#d9ebfb] p-3">Only certain groups are at risk.</td>
                    <td className="border-2 border-[#d9ebfb] p-3">Anyone can be affected regardless of background.</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-[#d9ebfb] p-3">Testing is only for people with symptoms.</td>
                    <td className="border-2 border-[#d9ebfb] p-3">HIV can be present without signs. Regular Testing is key.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">What to Expect During Testing</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80 mb-4">
              HIV testing is simple, quick, and confidential. It typically involves a small blood sample or oral
              swab, with results available on the same day in many cases.
            </p>

            <p className="text-[#000000]/80">
              Our team provides a safe, respectful space for everyone. Whether you're testing for the first
              time or it's part of your regular routine, we're here to support you every step of the way.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">Take the First Step</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb] mb-8">
            <p className="text-[#000000]/80">
              Your health is important. Knowing your HIV status is an empowering decision—and we're here
              to make the process as smooth and supportive as possible.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C43670]/30 to-transparent my-8"></div>

          <h2 className="text-2xl font-bold text-[#14b5ff] mb-4">References</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#d9ebfb]">
            <p className="text-[#14b5ff]/80 mb-2 italic">
              LoveYourself PH. (March 2024). HIV Statistics in the Philippines. [Infographic]. Retrieved from
              Instagram: @loveyourself.ph
            </p>

            <p className="text-[#14b5ff]/80 mb-2 italic">
              Odong, C. (2025, January 16). DOH heightens efforts to curb HIV cases in Calabarzon.
            </p>
            <p className="text-[#14b5ff]/80 mb-4 italic">
              Philippine Information Agency.
            </p>
            <a 
              href="https://pia.gov.ph/doh-heightens-efforts-to-curb-hiv-cases-in-calabarzon/#:~:text=The%20DOH-Center%20for%20Health,individuals%20aged%2015%20to%2024" 
              className="text-[#14b5ff] hover:text-[#F285AF] block mb-6 break-words"
            >
              https://pia.gov.ph/doh-heightens-efforts-to-curb-hiv-cases-in-calabarzon/#:~:text=The%20DOH-Center%20for%20Health,individuals%20aged%2015%20to%2024
            </a>

            <p className="text-[#14b5ff]/80 mb-2 italic">
              UNAIDS. (2023). Global HIV & AIDS statistics — Fact sheet. Retrieved from:
            </p>
            <a 
              href="https://www.unaids.org/en/resources/fact-sheet" 
              className="text-[#14b5ff] hover:text-[#F285AF] block mb-6"
            >
              https://www.unaids.org/en/resources/fact-sheet
            </a>

            <p className="text-[#14b5ff]/80 mb-2 italic">
              World Health Organization (WHO). (2023). HIV/AIDS. Retrieved from:
            </p>
            <a 
              href="https://www.who.int/news-room/fact-sheets/detail/hiv-aids" 
              className="text-[#14b5ff] hover:text-[#F285AF] block"
            >
              https://www.who.int/news-room/fact-sheets/detail/hiv-aids
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnPage;