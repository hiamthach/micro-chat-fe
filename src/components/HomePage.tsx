import { Button, Input, Divider, Form } from 'antd';

const HomePage = () => {
  const handleCreateRoom = () => {
    console.log('create room');
  };

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <Input placeholder="Enter Your Name" className="mb-4" />
        <Button type="primary" onClick={handleCreateRoom}>
          Create Room
        </Button>
        <Divider>OR</Divider>
        <Form autoComplete="off" className="mb-4">
          <Form.Item name="roomID">
            <Input placeholder="Enter Room ID" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Join Room
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default HomePage;
