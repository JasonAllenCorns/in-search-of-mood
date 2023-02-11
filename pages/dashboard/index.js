export default function UserHome() {
  return <h1>Hello World</h1>;
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps = async () => {
  return { props: {} };
};
