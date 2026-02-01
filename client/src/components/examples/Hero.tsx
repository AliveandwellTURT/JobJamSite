import Hero from '../Hero'

export default function HeroExample() {
  return (
    <Hero
      onEnrollClick={() => console.log('Enroll clicked')}
      onCoursesClick={() => console.log('Courses clicked')}
    />
  )
}
