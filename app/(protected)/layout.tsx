import {Navbar} from "@/app/(protected)/_components/navbar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center pt-[20px] bg-gradient-to-r from-green-400 to-blue-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
