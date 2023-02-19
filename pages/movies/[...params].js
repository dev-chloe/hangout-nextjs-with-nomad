export default function Detail({ params }) {
  const [title] = params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params }
  }
}