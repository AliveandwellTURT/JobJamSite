import PricingSection from '../PricingSection'

export default function PricingSectionExample() {
  return (
    <PricingSection onEnrollClick={(course) => console.log('Enroll clicked for:', course)} />
  )
}
