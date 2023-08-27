import Link from "next/link";

export default function data(){
    return(
        <div>
            <h1>Company Data</h1>
            <ul>
                <li>
                    <Link href='/data/1'>College-1</Link>
                </li>
                <li>
                    <Link href='/data/2'>College-2</Link>
                </li>
                <li>
                    <Link href='/data/3'>College-3</Link>
                </li>
                <li>
                    <Link href='/data/4'>College-4</Link>
                </li>
            </ul>
           

        </div>
    )
}