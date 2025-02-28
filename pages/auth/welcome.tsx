import Welcome from "@/core/modules/auth/welcome";

// name the page according to its purpose
const WelcomePage = () => <Welcome />;
export default WelcomePage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
