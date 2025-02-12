import { Skeleton } from "@/components/ui/skeleton";
const LoadingSkeleton = () => {
  return (
    <div className="mt-[80px] lg:ml-[250px] p-10">
      <div className="w-full min-h-screen">
        <h2 className="text-4xl font-bold text-primary-dark my-10">Products</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {Array.from({ length: 9 }).map((_skeleton, index) => (
            <div className="flex flex-col space-y-3 w-full" key={index}>
              <Skeleton className="h-[200px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-[50px] w-[250px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
