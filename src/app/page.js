import AddUser from "./component/addUser";
import DisplayUser from "./component/displayUser";

export default function Home() {
    return (
        <>
            <main>
                <AddUser />
                <DisplayUser/>
            </main>
        </>
    );
}