import WorkDetails from "@/Components/WorkDetails/WorkDetails";
import { workData } from "@/db/workData";


export async function generateMetadata({ params }) {
    const {wId}=await params;
    const detail= workData.find(wrk => wrk.id===wId);
       const {title,dsc}=detail;
    return {
      title: `${title}`,
      description: `${dsc} .`,
    };
  };



const page = async ({params}) => {
    const {wId}=await params;

    return (
        <>
            <WorkDetails workId={wId}/>
        </>
    );
};

export default page;