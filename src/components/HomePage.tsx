import { Button, Input, Divider } from "antd"

const HomePage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <Button type="primary">Create Room</Button>
        <Divider>OR</Divider>
        <Input placeholder="Enter Room ID" className="mb-4" />
        <Button type="primary">Join Room</Button>
      </div>
    </main>
  )
}

export default HomePage