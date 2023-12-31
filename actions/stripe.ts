'use server';

import type { Stripe } from 'stripe';

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

import { formatAmountForStripe } from '@/utils/stripe-helpers';
import { stripe } from '@/lib/stripe';
import { CURRENCY } from '@/lib/config';



export async function createCheckoutSession(data: FormData): Promise<void> {
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: {
              name: data.get('name') as string,
            },
            unit_amount: formatAmountForStripe(
              Number(data.get('price') as string),
              CURRENCY
            ),
          },
        },
      ],
      success_url: `${headers().get(
        'origin'
      )}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get('origin')}/donate-with-checkout`,
    });

  redirect(checkoutSession.url as string);
}

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get('customDonation') as string),
        CURRENCY
      ),
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}
