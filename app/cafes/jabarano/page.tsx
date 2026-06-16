export default function Jabarano() {

  return (

    <main>

      {/* HERO */}

      <section className="container pt-12">

        <div className="rounded-3xl overflow-hidden">

          <img
            src="/images/jabarano/hero.jpg"
            alt="Jabarano Coffee"
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

          Jabarano Coffee

        </h1>

        <p className="text-xl text-gray-500 max-w-3xl leading-9">

          Jabarano Coffee combines local coffee identity
          with a modern café concept, offering a balanced
          experience for studying, working, and relaxing.

        </p>

      </section>

      {/* GALLERY */}

      <section className="container">

        <h2 className="text-4xl mb-12">

          Gallery

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/images/jabarano/1.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/jabarano/2.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/jabarano/3.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/jabarano/4.jpg"
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

            Kopi Susu Gula Aren

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Light brown color with a creamy appearance.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Sweet aroma from palm sugar combined
                with a mild coffee fragrance.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Balanced sweetness with a smooth
                and easy-to-drink texture.

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

            Bolu Pisang

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Soft golden-brown cake with a homemade look.

              </p>

            </div>

            <div>

              <strong>Texture</strong>

              <p>

                Soft, fluffy, and slightly dense.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Sweet banana aroma with subtle buttery notes.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Natural sweetness with a warm
                and pleasant aftertaste.

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

            Jabarano Coffee provides the most balanced
            experience among the three cafés by combining
            good coffee, comfortable ambience, and a
            welcoming environment.

          </p>

        </div>

      </section>
      <section className="container pb-28">

<div className="flex justify-between items-center border-t border-[#E4DED7] pt-12">

  <a
    href="/cafes/makmur-jaya"
    className="group"
  >

    <p className="text-sm text-gray-400 mb-2">

      Previous

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      ← Makmur Jaya

    </p>

  </a>

  <a
    href="/comparison"
    className="group text-right"
  >

    <p className="text-sm text-gray-400 mb-2">

      Next

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      Comparison →

    </p>

  </a>

</div>

</section>
    </main>

  );

}