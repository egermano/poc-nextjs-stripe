import { createCheckoutSession } from '@/actions/stripe';
import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

type Product = {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  limit: string;
};

const products: Product[] = [
  {
    name: 'Workshop 1',
    priceMonthly: 29,
    priceYearly: 99,
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Workshop 2',
    priceMonthly: 29,
    priceYearly: 299,
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Bundle',
    priceMonthly: 49,
    priceYearly: 499,
    limit: 'Up to 50 active job postings',
  },
];

const Product = (product: Product) => {
  return (
    <div className="mx-auto mt-16 mx-2 max-w-2xl rounded-3xl ring-1 ring-gray-200">
      <form action={createCheckoutSession}>
        <input type="hidden" name="name" value={product.name} />
        <input type="hidden" name="price" value={product.priceMonthly} />
        <div className="p-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
            amet indis perferendis blanditiis repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="p-2 ">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {product.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>
                <button
                  type="submit"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="flex flex-row">
          {products.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
