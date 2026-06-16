export default function Ambrogio() {
  return (
    <main>

      {/* HERO */}

      <section className="container pt-12">

        <div className="rounded-3xl overflow-hidden">

          <img
            src="/images/ambrogio/hero.jpg"
            alt="Ambrogio Patisserie"
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

          Ambrogio Patisserie

        </h1>

        <p className="text-xl text-gray-500 max-w-3xl leading-9">

          Ambrogio Patisserie offers premium pastries,
          elegant interiors, and a comfortable atmosphere
          that is ideal for socializing and relaxing.

        </p>

      </section>

      {/* GALLERY */}

      <section className="container">

        <h2 className="text-4xl mb-12">

          Gallery

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/images/ambrogio/1.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/ambrogio/2.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/ambrogio/3.jpg"
            alt=""
            className="rounded-3xl aspect-[4/3] object-cover w-full"
          />

          <img
            src="/images/ambrogio/4.jpg"
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

            Iced Latte

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Served in a tall glass with
                distinct layers of milk and espresso.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Pleasant coffee aroma with creamy milk notes.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Smooth, creamy, and balanced
                with low bitterness.

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

            Double Cheese Croissant

          </h3>

          <div className="space-y-8 text-gray-500 leading-9">

            <div>

              <strong>Appearance</strong>

              <p>

                Golden brown with visually
                appealing pastry layers.

              </p>

            </div>

            <div>

              <strong>Texture</strong>

              <p>

                Crispy outside and soft inside.

              </p>

            </div>

            <div>

              <strong>Aroma</strong>

              <p>

                Rich buttery aroma with
                fresh pastry notes.

              </p>

            </div>

            <div>

              <strong>Taste</strong>

              <p>

                Balanced savory cheese and buttery flavors.

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

            Ambrogio Patisserie is ideal for
            visitors who enjoy pastries,
            elegant interiors, and comfortable
            spaces for socializing and relaxing.

          </p>

        </div>

      </section>
      <section className="container pb-28">

<div className="flex justify-between items-center border-t border-[#E4DED7] pt-12">

  <a
    href="/"
    className="group"
  >

    <p className="text-sm text-gray-400 mb-2">

      Previous

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      ← Home

    </p>

  </a>

  <a
    href="/cafes/makmur-jaya"
    className="group text-right"
  >

    <p className="text-sm text-gray-400 mb-2">

      Next

    </p>

    <p className="text-xl transition duration-300 group-hover:text-[#9A7B4F]">

      Makmur Jaya →

    </p>

  </a>

</div>

</section>
    </main>
  );
}