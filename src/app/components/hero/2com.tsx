export default function Hero2comon() {
    return (
        <section className="py-32">
        <div className="container">
          <div className="flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-10">
            <div className="order-1 h-full rounded-lg bg-zinc-100 pr-5 pt-10 md:pr-10 md:pt-20 flex items-end">
              <img src="/images/placeholders/minima/placeholder-dark-1.jpg" alt="placeholder"
                className="h-full w-full rounded-tr-lg object-cover" />
            </div>
            <div className="order-3 md:order-2 md:col-span-2 pl-5 pt-10 md:pl-10 md:pt-20 bg-zinc-100 rounded-lg">
              <img src="/images/placeholders/minima/placeholder-dark-2.jpg" alt="placeholder"
                className="max-h-[500px] w-full rounded-tl-lg object-cover" />
            </div>
            <div className="order-2 -mt-6 md:order-3">
              <p className="mb-6 text-sm text-zinc-600 md:mb-12">Lorem ipsum dolor sit amet.</p>
              <h3 className="mb-3 text-2xl font-medium md:mb-6">Quality and Durability</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio maiores sint
                cupiditate ab ullam numquam a similique vel itaque.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }