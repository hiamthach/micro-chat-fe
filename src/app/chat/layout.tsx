import Sidebar from '@/components/layout/Sidebar';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full flex">
      <Sidebar />
      <div className="flex-1 px-8 py-3">{children}</div>
    </main>
  );
};

export default ChatLayout;
