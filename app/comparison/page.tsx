export default function Comparison() {

  return (

    <main className="container py-24">

      <p className="uppercase tracking-[5px] text-[#9A7B4F] text-sm mb-6">

        Comparative Analysis

      </p>

      <h1 className="text-6xl mb-16">

        Comparison of the Three Cafés

      </h1>

      <div className="overflow-x-auto rounded-3xl border border-[#E4DED7]">

        <table className="min-w-[800px] w-full">

          <thead>

            <tr className="bg-[#F1ECE6]">

              <th className="p-8 text-left">

                Aspect

              </th>

              <th>

                Ambrogio

              </th>

              <th>

                Makmur Jaya

              </th>

              <th>

                Jabarano

              </th>

            </tr>

          </thead>

          <tbody>

          <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Coffee Quality

              </td>

              <td>

                Smooth and balanced

              </td>

              <td>

                Strong and authentic

              </td>

              <td>

                Distinct local character

              </td>

            </tr>

            <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Pastry Quality

              </td>

              <td>

                Premium pastries

              </td>

              <td>

                Limited options

              </td>

              <td>

                Decent variety

              </td>

            </tr>

            <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Ambience

              </td>

              <td>

                Elegant and aesthetic

              </td>

              <td>

                Casual and traditional

              </td>

              <td>

                Modern and comfortable

              </td>

            </tr>

            <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Customer Experience

              </td>

              <td>

                Great for socializing

              </td>

              <td>

                Coffee-focused visits

              </td>

              <td>

                Most balanced

              </td>

            </tr>

            <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Main Strength

              </td>

              <td>

                Pastries & ambience

              </td>

              <td>

                Coffee quality

              </td>

              <td>

                Balanced experience

              </td>

            </tr>

            <tr className="border-t border-[#E4DED7] hover:bg-[#F1ECE6] transition duration-300">

              <td className="p-8">

                Best For

              </td>

              <td>

                Relaxing & socializing

              </td>

              <td>

                Coffee enthusiasts

              </td>

              <td>

                Students & workers

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>

  );

}