import BlogDetail from "@/Components/BlogDetail/BlogDetail";
import blogData from "@/db/blogData";

export async function generateMetadata({ params }) {
    const {bId}=await params;
    const detaiBlog= blogData.find(bD=> bD.id ===bId);
    const{title,body}=detaiBlog;
    return {
      title: `${title}`,
      description: `${body} .`,
    };
  };

  
const page = async ({params}) => {
    const {bId}=await params;

    return (
        <>
            <BlogDetail blogId={bId}/>
        </>
    );
};

export default page;