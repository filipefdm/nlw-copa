// interface HomeProps {
//   count: number;
// }

import appPreviewImg from "../assets/app-nlw-copa-preview.png";

export default function Home(/* { count }: HomeProps */) {
  return (
    <div>
      <main></main>

      <img src={appPreviewImg} alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3333/pools/count");
//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       count: data.count,
//     },
//   };
// };
