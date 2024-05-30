'use client'

import { Button } from "core/components/button";

const Icon = () => {
  return <div className="w-4 h-4 bg-red-500 rounded-full"></div>;
};

export default function Home() {
  return (
    <div className="p-5">
      <Button variant={"primary"} icon={<Icon />}>Button</Button>
    </div>
  );
}
