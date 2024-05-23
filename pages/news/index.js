import Link from "next/link";

function NewsPage() {
    return (
      <>
        <h1>news page index</h1>
        <ul>
          <li>
            <Link href='/news/page1'>News page 1</Link>
          </li>
          <li>
            <Link href='/news/page2'>News page 2</Link>
          </li>
        </ul>
      </>
    )
  }
  
  export default NewsPage;