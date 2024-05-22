import { useRouter } from "next/router";

function NewsPage() {
    const router = useRouter();
    const newId = router.query.newsId;
    return (
      <h1>NewsId Page</h1>
    )
  }
  
  export default NewsPage;