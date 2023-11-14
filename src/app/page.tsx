import Image from 'next/image'

import IndexNavbar from "~/components/IndexNavbar";
import Footer from "~/components/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faUsers, faCertificate, faCompass, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { EcommerceCard } from '~/components/EcomerceCard';
import { hrAuctionsDiscordServerInvitationLink } from '~/components/Consts';

export default function Home() {
  return (
    <>
      <IndexNavbar />
      <section id="top" className="header relative pt-0 sm:pt-12 items-center flex">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full lg:w-4/12 xl:w-4/12 p-8">
            <div className="pt-2 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                HR Auctions - Przyspieszamy Twoją karierę!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Rekrutacje odwrócone, Centrum Doskonalenia Możliwości Kompetencji i Kariery oraz wiele więcej &#129321;
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Chcesz być na bieżąco? Dołacz do naszego serwera HR Auction na Discordzie!
              </p>
              <div className="mt-12 py-2 hidden lg:block">
                <a href={hrAuctionsDiscordServerInvitationLink}
                    className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    type="button"
                  >
                    Dołączam do discorda
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 xl:w-8/12 px-4">            
          <video className="h-full w-full rounded-lg" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-12">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  alt="laptop"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                  width={700}
                  height={466}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Nasza platforma to nie tylko aukcje
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Równie istotna część to
                    <span className='font-bold'> Centrum Doskonalenia Możliwości Kompetencji i Kariery</span>, które składa się z kilku modułów:
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        {/* <i className="fas fa-sitemap"></i> */}
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Development and Improvement Center
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        dostęp do dedykowanych szkoleń, warsztatów kohortowych, mastermindów i usług wsparcia eksperckiego Brainstormaker
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FontAwesomeIcon icon={faCompass} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Mentoring Support
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        wspierający Kandydata poprzez procesy mentoringowe w trzech ścieżkach: kariery, merytoryczny, PR-owy w celu zbudowania/utrzymania, doskonalenia i rozwoju wizerunku i marki fachowca
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="file-certificate"></i>
                        <FontAwesomeIcon icon={faCertificate} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Wall of Glory</h6>
                      <p className="mb-4 text-blueGray-500">
                        miejsce, gdzie kandydat może pochwalić się m.in. certyfikatami z ukończonych szkoleń.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Prosumption
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        zgłoszenie chęci Kandydata angażowania się w interdyscyplinarne projekty, zgłoszenia feedbacku odnośnie działania HR Auctions w celu jej doskonalenia i rozwoju, zgłoszenie chęci Kandydata do bycia mentorem, które będzie weryfikowane i wybranym Kandydatom zostanie zaproponowana współpraca w charakterze mentora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Dlaczego takie podejście?
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Przestrzeń HR Auctions z Capability Excellence jako Centrum Możliwości Kompetencji i Kariery została stworzona jako alternatywa dla tradycyjnego ujęcia rynku pracy i procesów rekrutacyjnych. W ramach HR Auctions to kandydat jako fachowiec informuje rynek o swojej dyspozycyjności i możliwościach w zakresie podjęcia pracy i współpracy. A pracodawcy lub wyznaczone osoby upoważnione do podejmowania decyzji finansowych składają swoją propozycję odnośnie warunków pracy i tym samym biorą udział w licytacji. Decyzja wyboru pracodawcy i oferty leży po stronie kandydata.
              </p>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-12">
              <div className="relative flex flex-col items-center min-w-0 w-full mb-6 mt-48 md:mt-0">
                <EcommerceCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-1 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div id="discord" className="container mx-auto" >
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Dołącz do naszego discorda!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Chcesz być jedną z pierwszych osób na platformie?
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href={hrAuctionsDiscordServerInvitationLink}
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Dołaczam do discorda!</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
