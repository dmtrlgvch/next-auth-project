const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
