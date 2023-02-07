import NavBar from "../components/NavBar"
import Card from "../components/Card"
import { products } from "../lib/Api"
export async function getServerSideProps() {
    const data = await products();
    console.log(data);
    return {
        props: {
            ...data
        }, // will be passed to the page component as props
    };
}

export default function Home(data) {

    return (<main className="min-w-full flex px-5 py-4  flex-col min-h-full">

        <NavBar />
        <div className="flex space-x-5 font-bold text-2xl">
            Products
        </div>
        <div className="flex CardContainer ">
        </div>

    </main>)
}
