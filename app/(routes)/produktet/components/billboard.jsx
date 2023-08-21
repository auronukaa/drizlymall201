import { getMain2 } from "@/actions/get-main2";
import MainSection from "./main-section";

const Billboard = async () => {
  const mainSections = await getMain2();

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {mainSections?.data?.map((item) => (
        <MainSection key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Billboard;
