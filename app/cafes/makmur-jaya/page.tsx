export default function MakmurJaya() {

  return (

    <main>

      {/* HERO */}

      <section className="container pt-12">

        <div className="rounded-3xl overflow-hidden">

          <img
            src="/images/makmur/hero.jpg"
            alt="Makmur Jaya Coffee"
            className="w-full aspect-[16/9] object-cover"
          />

        </div>

      </section>

      {/* TITLE */}

      <section className="container py-20">

        <p className="uppercase tracking-[5px] text-[#9A7B4F] text-sm mb-6">

          Café Review

        </p>

        <h1 className="text-6xl mb-8">

          Makmur Jaya Coffee

        </h1>

        <p className="text-xl text-gray-500 max-w-3xl leading-9">

          Makmur Jaya Coffee focuses on strong coffee quality,
          authentic flavors, and a comfortable environment for
          Work From Café activities.

        </p>

      </section>

      {/* GALLERY */}

      <section className="container">

        <h2 className="text-4xl mb-12">

          Gallery

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/images/makmur/1.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/makmur/2.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/makmur/3.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/makmur/4.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

        </div>

      </section>

      {/* COFFEE REVIEW */}

      <section className="container">

        <h2 className="text-4xl mb-12">

          Coffee Review

        </h2>

        <div className="bg-white rounded-3xl p-12 border border-[#E4DED7]">

          <h3 className="text-3xl mb-8">

            Caramel Macchiato

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Served in a tall glass with layers
                of milk, espresso, and caramel sauce.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Dominant caramel aroma with
                a light coffee fragrance.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Sweet, creamy, and smooth with
                a pleasant caramel aftertaste.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PASTRY REVIEW */}

      <section className="container">

        <h2 className="text-4xl mb-12">

          Pastry Review

        </h2>

        <div className="bg-white rounded-3xl p-12 border border-[#E4DED7]">

          <h3 className="text-3xl mb-8">

            Dirty Chocolate

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Attractive dark chocolate color
                with a simple presentation.

              </p>

            </div>

            <div>

              <strong>Texture</strong>

              <p>

                Soft exterior with generous
                melted chocolate filling.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Rich chocolate aroma with
                freshly baked pastry notes.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Rich chocolate flavor that pairs
                well with coffee.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OVERALL EXPERIENCE */}

      <section className="container pb-28">

        <h2 className="text-4xl mb-12">

          Overall Experience

        </h2>

        <div className="bg-[#F1ECE6] rounded-3xl p-12">

          <p className="text-lg leading-10">

            Makmur Jaya Coffee is ideal for coffee
            enthusiasts and visitors looking for a
            comfortable place to study, work, and
            socialize.

          </p>

        </div>

      </section>
      <section className="container pb-28">

<div className="flex justify-between items-center border-t border-[#E4DED7] pt-12">

  <a
    href="/cafes/ambrogio"
    className="group"
  >

    <p className="text-sm text-gray-400 mb-2">

      Previous

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      ← Ambrogio

    </p>

  </a>

  <a
    href="/cafes/jabarano"
    className="group text-right"
  >

    <p className="text-sm text-gray-400 mb-2">

      Next

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      Jabarano →

    </p>

  </a>

</div>

</section>
    </main>

  );

}