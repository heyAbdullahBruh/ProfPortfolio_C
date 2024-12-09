import BlogDetail from "@/Components/BlogDetail/BlogDetail";

const page = async ({params}) => {
    const {bId}=await params;

    return (
        <>
            <BlogDetail blogId={bId}/>
        </>
    );
};

export default page;