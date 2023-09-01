# POC Next.js + Tailwind CSS + TypeScript + Stripe

This is a proof of concept for a Next.js + Tailwind CSS + TypeScript + Stripe integration.

Stack:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stripe](https://stripe.com/)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:4200](http://localhost:4200) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

At first copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then, add the following variables:

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
`STRIPE_SECRET_KEY` - Your Stripe secret key


