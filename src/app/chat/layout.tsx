import Sidebar from '@/components/layout/Sidebar';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-full flex relative">
      <div className="sticky top-0 left-0">
        <Sidebar />
      </div>
      <div className="flex-1 px-8 py-4">{children}</div>
    </main>
  );
};

export default ChatLayout;
