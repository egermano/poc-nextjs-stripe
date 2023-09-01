import styles from './page.module.scss';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <Hero />
      <Pricing />
    </>
  );
}
