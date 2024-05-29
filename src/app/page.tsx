import { Button } from "components/button/button";

export default function Home() {
  return (
    <div className="app bg-stone-100 h-screen flex flex-col">
      <div className="app-header h-12 border-b border-stone-200 px-4 flex items-center">
        <div className="logo">a</div>
      </div>
      <div className="app-wrapper flex-1 flex flex-row">
        <div className="app-menu w-64 border-r border-stone-200">menu bar</div>
        <div className="app-main flex-1">
          <div className="p-5">
            <Button variant="primary">Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
