import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="container pt-12">

        <div className="rounded-3xl overflow-hidden">

          <img
            src="/images/banner.jpg"
            alt="Bandung Cafes"
            className="w-full aspect-[16/9] object-cover"
          />

        </div>

      </section>

      {/* TITLE */}

      <section className="container text-center pt-10 pb-24">

        <p className="uppercase tracking-[5px] text-[#9A7B4F] text-sm mb-6">

          Research & Development Final Project

        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-none mb-10">

          Comparative Review of
          <br />
          Local Cafés in Bandung

        </h1>

        <p className="max-w-3xl mx-auto text-gray-500 text-base md:text-lg leading-9">

          A digital publication comparing
          Ambrogio Patisserie, Makmur Jaya Coffee,
          and Jabarano Coffee through direct
          observation and personal experience.

        </p>

      </section>

      {/* CAFE CARDS */}

      {/* CAFE CARDS */}

<section className="container pb-32">

<div className="flex items-center justify-between mb-16">

  <h2 className="text-5xl">

    Featured Cafés

  </h2>

  <p className="text-gray-400 hidden md:block">

    Explore each café review

  </p>

</div>

<div className="grid md:grid-cols-3 gap-10">

  {/* AMBROGIO */}

  <Link

    href="/cafes/ambrogio"

    className="group"

  >

    <div className="bg-white rounded-3xl overflow-hidden border border-[#E4DED7] shadow-sm hover:shadow-xl transition duration-500">

      <div className="overflow-hidden">

        <img

          src="/images/ambrogio/hero.jpg"

          alt=""

          className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"

        />

      </div>

      <div className="p-10">

        <h3 className="text-4xl mb-4">

          Ambrogio Patisserie

        </h3>

        <p className="text-gray-500 leading-8 mb-8">

          Premium pastries and elegant ambience.

        </p>

        <div className="flex gap-3 flex-wrap mb-10">

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            Pastry

          </div>

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            Ambience

          </div>

        </div>

        <div className="text-[#9A7B4F]">

          Read Review →

        </div>

      </div>

    </div>

  </Link>

  {/* MAKMUR */}

  <Link

    href="/cafes/makmur-jaya"

    className="group"

  >

    <div className="bg-white rounded-3xl overflow-hidden border border-[#E4DED7] shadow-sm hover:shadow-xl transition duration-500">

      <div className="overflow-hidden">

        <img

          src="/images/makmur/hero.jpg"

          alt=""

          className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"

        />

      </div>

      <div className="p-10">

        <h3 className="text-4xl mb-4">

          Makmur Jaya Coffee

        </h3>

        <p className="text-gray-500 leading-8 mb-8">

          Strong coffee culture and authentic flavors.

        </p>

        <div className="flex gap-3 flex-wrap mb-10">

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            Coffee

          </div>

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            WFC

          </div>

        </div>

        <div className="text-[#9A7B4F]">

          Read Review →

        </div>

      </div>

    </div>

  </Link>

  {/* JABARANO */}

  <Link

    href="/cafes/jabarano"

    className="group"

  >

    <div className="bg-white rounded-3xl overflow-hidden border border-[#E4DED7] shadow-sm hover:shadow-xl transition duration-500">

      <div className="overflow-hidden">

        <img

          src="/images/jabarano/hero.jpg"

          alt=""

          className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"

        />

      </div>

      <div className="p-10">

        <h3 className="text-4xl mb-4">

          Jabarano Coffee

        </h3>

        <p className="text-gray-500 leading-8 mb-8">

          Balanced products and comfortable ambience.

        </p>

        <div className="flex gap-3 flex-wrap mb-10">

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            Balance

          </div>

          <div className="bg-[#F1ECE6] px-4 py-2 rounded-full text-xs">

            Experience

          </div>

        </div>

        <div className="text-[#9A7B4F]">

          Read Review →

        </div>

      </div>

    </div>

  </Link>

</div>

</section>

    </main>
  );
}