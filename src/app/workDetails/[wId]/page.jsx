import WorkDetails from "@/Components/WorkDetails/WorkDetails";

const page = async ({params}) => {
    const {wId}=await params;

    return (
        <>
            <WorkDetails workId={wId}/>
        </>
    );
};

export default page;